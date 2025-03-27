from flask import Flask, request, render_template_string
import pandas as pd
import joblib
from datetime import datetime, timedelta

app = Flask(__name__)

# Load the saved model and mappings
try:
    model = joblib.load('crop_price_model_xgboost_citywise.pkl')
    crop_name_to_code = joblib.load('crop_name_to_code.pkl')
    city_name_to_code = joblib.load('city_name_to_code.pkl')
    print("Model and mappings loaded successfully")
except FileNotFoundError:
    print("Error: Model or mapping files not found. Please ensure they are in the same directory.")
    exit(1)

# Load the combined dataset to get historical and recent prices
try:
    combined_df = pd.read_excel('combined_crop_data_citywise.xlsx')
    combined_df['Date'] = pd.to_datetime(combined_df['Date'])
except FileNotFoundError:
    print("Error: Dataset file 'combined_crop_data_citywise.xlsx' not found.")
    exit(1)

# Define the season function
def get_season(month):
    if month in [6, 7, 8, 9]:  # Monsoon in India
        return 1
    elif month in [12, 1, 2]:  # Winter
        return 2
    else:  # Summer
        return 3

# Function to validate and parse date input
def parse_date(date_str, date_name):
    try:
        date = pd.to_datetime(date_str)
        return date, None
    except ValueError:
        return None, f"Invalid {date_name} format. Please use YYYY-MM-DD (e.g., 2025-03-26)."

# Map cities to dominant soil types
city_to_soil = {
    'Mumbai': 'alluvial',
    'Nagpur': 'black',
    'Nashik': 'red',
    'Pune': 'black',
    'Raigad': 'laterite',
    'Thane': 'alluvial'
}

# Define soil-to-crop mapping (only your six crops)
soil_crops = {
    'alluvial': ['Rice', 'Wheat'],
    'red': ['Jowar', 'Maize'],
    'black': ['Wheat', 'Bengal Gram'],
    'laterite': [],  # None of your crops suit laterite
    'arid': ['Jowar'],
    'peaty': ['Rice'],
    'saline': ['Wheat'],
    'alkaline': ['Bengal Gram']
}

# Define production costs (INR per quintal)
production_costs = {
    'Rice': 8000,
    'Wheat': 6000,
    'Bengal Gram': 7000,
    'Jowar': 5000,
    'Maize': 5500
    # If your sixth crop isn't specified, we'll handle it in the prediction function
}

# Function to predict the price for a given crop, city, and date
def predict_crop_price(crop_name, city_name, prediction_date, planting_date):
    if city_name.lower() == 'thane':
        return None, None, "Predictions for Thane are unavailable due to insufficient data."

    crop_code = crop_name_to_code.get(crop_name)
    city_code = city_name_to_code.get(city_name)
    if crop_code is None:
        return None, None, f"{crop_name} not found in the dataset. Available crops are: {list(crop_name_to_code.keys())}"
    if city_code is None:
        return None, None, f"{city_name} not found in the dataset. Available cities are: {list(city_name_to_code.keys())}"

    # Get the most recent price for the crop in the city
    most_recent_price = combined_df[(combined_df['Crop'] == crop_name) & (combined_df['City'] == city_name)]['Price'].iloc[-1]

    # Prepare the feature set for prediction
    new_data = pd.DataFrame({
        'Year': [prediction_date.year],
        'Month': [prediction_date.month],
        'Day': [prediction_date.day],
        'DayOfWeek': [prediction_date.dayofweek],
        'Crop': [crop_code],
        'City': [city_code],
        'Season': [get_season(prediction_date.month)],
        'Prev_Price': [most_recent_price]
    })

    # Predict the price using the existing model
    predicted_price = model.predict(new_data)[0]
    return predicted_price, most_recent_price, None

# HTML template for the webpage
HTML_TEMPLATE = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crop Price Prediction</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1, h3 {
            text-align: center;
            color: #333;
        }
        label {
            display: block;
            margin: 10px 0 5px;
        }
        select, input {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
        #result, #suggestions {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #f9f9f9;
        }
        .profit-negative {
            color: red;
            font-weight: bold;
        }
        .profit-positive {
            color: green;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Crop Price Prediction</h1>
        <form method="POST" action="/">
            <label for="city">Location (City):</label>
            <select id="city" name="city_name" required>
                <option value="">Select a city</option>
                {% for city in cities %}
                    <option value="{{ city }}">{{ city }}</option>
                {% endfor %}
            </select>

            <label for="crop">Crop:</label>
            <select id="crop" name="crop_name" required>
                <option value="">Select a crop</option>
                {% for crop in crops %}
                    <option value="{{ crop }}">{{ crop }}</option>
                {% endfor %}
            </select>

            <label for="ield">Expected ield (in Quintals):</label>
            <input type="number" id="ield" name="ield" step="0.1" min="0" required placeholder="e.g., 10">

            <label for="planting_date">Planting Date (YYYY-MM-DD):</label>
            <input type="date" id="planting_date" name="planting_date" required>

            <label for="prediction_date">Prediction Date (YYYY-MM-DD):</label>
            <input type="date" id="prediction_date" name="prediction_date" required>

            <button type="submit">Predict Price</button>
        </form>

        <div id="suggestions">
            {% if dominant_soil %}
                <h3>Dominant Soil Type: {{ dominant_soil|capitalize }}</h3>
                <p><strong>Suggested Crops for This Soil:</strong></p>
                {% if suggested_crops %}
                    <ul>
                        {% for crop in suggested_crops %}
                            <li>{{ crop.crop }}: {{ crop.predicted_price }} INR/quintal (Predicted for {{ prediction_date_str }})</li>
                        {% endfor %}
                    </ul>
                {% else %}
                    <p>No suitable crops in our dataset for this soil type.</p>
                {% endif %}
            {% endif %}
        </div>

        <div id="result">
            {% if error %}
                <p style="color: red;">Error: {{ error }}</p>
            {% endif %}
            {% if predicted_price is not none %}
                <h3>Prediction Results for {{ crop_name }} in {{ city_name }}</h3>
                <p><strong>Predicted Price:</strong> {{ predicted_price }} INR/quintal</p>
                <p><strong>Adjusted Price (with 5% inflation):</strong> {{ adjusted_price }} INR/quintal</p>
                <p><strong>Revenue (for {{ ield }} quintals):</strong> {{ revenue }} INR</p>
                <p><strong>Production Cost (for {{ ield }} quintals):</strong> {{ cost }} INR</p>
                <p><strong>Net Profit:</strong> <span class="{% if net_profit < 0 %}profit-negative{% else %}profit-positive{% endif %}">{{ net_profit }} INR</span></p>
                <p><strong>Storage Recommendation:</strong> {{ storage_recommendation }}</p>
                <p><strong>Most Recent Price:</strong> {{ most_recent_price }} INR/quintal</p>
                <h4>Historical Prices for {{ prediction_month }}:</h4>
                <p><strong>Mean:</strong> {{ historical_mean }} INR/quintal (average price for {{ crop_name }} in {{ city_name }} during {{ prediction_month }} from 2019-2020)</p>
                <p><strong>Min:</strong> {{ historical_min }} INR/quintal (lowest price for {{ crop_name }} in {{ city_name }} during {{ prediction_month }} from 2019-2020)</p>
                <p><strong>Max:</strong> {{ historical_max }} INR/quintal (highest price for {{ crop_name }} in {{ city_name }} during {{ prediction_month }} from 2019-2020)</p>
                <h4>Recent Prices:</h4>
                <ul>
                    {% for price in recent_prices %}
                        <li>{{ price.Date }}: {{ price.Price }} INR/quintal</li>
                    {% endfor %}
                </ul>
            {% endif %}
        </div>
    </div>
</body>
</html>
"""

# Route to render the webpage and handle predictions
@app.route('/', methods=['GET', 'POST'])
def index():
    # Default values for GET request (page load/refresh)
    error = None
    predicted_price = None
    adjusted_price = None
    most_recent_price = None
    historical_mean = None
    historical_min = None
    historical_max = None
    prediction_month = None
    recent_prices = []
    dominant_soil = None
    suggested_crops = []
    crop_name = None
    city_name = None
    prediction_date_str = None
    ield_amount = None
    revenue = None
    cost = None
    net_profit = None
    storage_recommendation = None

    crops = list(crop_name_to_code.keys())
    cities = list(city_name_to_code.keys())

    if request.method == 'POST':
        crop_name = request.form.get('crop_name')
        city_name = request.form.get('city_name')
        planting_date_str = request.form.get('planting_date')
        prediction_date_str = request.form.get('prediction_date')
        ield_str = request.form.get('ield')

        # Validate inputs
        if not all([crop_name, city_name, planting_date_str, prediction_date_str, ield_str]):
            error = "All fields are required."
        else:
            try:
                ield_amount = float(ield_str)
                if ield_amount <= 0:
                    error = "ield must be greater than 0."
            except ValueError:
                error = "ield must be a valid number."

            if not error:
                planting_date, error = parse_date(planting_date_str, "planting date")
                if error:
                    return render_template_string(HTML_TEMPLATE, error=error, crops=crops, cities=cities)

                prediction_date, error = parse_date(prediction_date_str, "prediction date")
                if error:
                    return render_template_string(HTML_TEMPLATE, error=error, crops=crops, cities=cities)

                if prediction_date <= planting_date:
                    error = "Prediction date must be after the planting date."
                else:
                    # Determine dominant soil type based on city
                    dominant_soil = city_to_soil.get(city_name)
                    if dominant_soil:
                        suggested_crop_names = soil_crops.get(dominant_soil.lower(), [])
                        # Predict prices for suggested crops
                        suggested_crops = []
                        for suggested_crop in suggested_crop_names:
                            if suggested_crop != crop_name:  # Avoid duplicating the selected crop
                                pred_price, _, error = predict_crop_price(suggested_crop, city_name, prediction_date, planting_date)
                                if not error:
                                    days_difference = (prediction_date - planting_date).days
                                    months_difference = days_difference / 30
                                    adjusted_pred_price = pred_price * (1 + 0.05 * (months_difference / 12))
                                    suggested_crops.append({
                                        'crop': suggested_crop,
                                        'predicted_price': round(adjusted_pred_price, 2)
                                    })

                    # Predict the price for the selected crop
                    predicted_price, most_recent_price, error = predict_crop_price(crop_name, city_name, prediction_date, planting_date)
                    if error:
                        return render_template_string(HTML_TEMPLATE, error=error, crops=crops, cities=cities, dominant_soil=dominant_soil, suggested_crops=suggested_crops)

                    # Adjust for inflation
                    inflation_rate = 0.05
                    days_difference = (prediction_date - planting_date).days
                    months_difference = days_difference / 30
                    adjusted_price = predicted_price * (1 + inflation_rate * (months_difference / 12))

                    # Calculate net profit
                    production_cost = production_costs.get(crop_name, 6000)  # Default cost if crop not in dictionary
                    revenue = adjusted_price * ield_amount
                    cost = production_cost * ield_amount
                    net_profit = revenue - cost

                    # Predict price for the next month (for cold storage recommendation)
                    next_month_date = prediction_date + timedelta(days=30)  # Approximate one month
                    next_month_price, _, _ = predict_crop_price(crop_name, city_name, next_month_date, planting_date)
                    if next_month_price:
                        days_difference_next = (next_month_date - planting_date).days
                        months_difference_next = days_difference_next / 30
                        adjusted_next_month_price = next_month_price * (1 + inflation_rate * (months_difference_next / 12))
                        price_difference = adjusted_next_month_price - adjusted_price
                        if price_difference > 0:
                            storage_recommendation = f"Store for one month to gain {round(price_difference, 2)} INR/quintal (price expected to rise to {round(adjusted_next_month_price, 2)} INR/quintal)."
                        else:
                            storage_recommendation = f"Sell now as prices may drop by {round(-price_difference, 2)} INR/quintal (price expected to fall to {round(adjusted_next_month_price, 2)} INR/quintal)."

                    # Get historical prices for the same month and city
                    prediction_month = prediction_date.strftime('%B')
                    historical_prices = combined_df[(combined_df['Crop'] == crop_name) &
                                                   (combined_df['City'] == city_name) &
                                                   (combined_df['Date'].dt.month == prediction_date.month)]['Price']
                    historical_stats = historical_prices.describe().to_dict() if not historical_prices.empty else {}
                    historical_mean = round(historical_stats.get('mean', 0), 2)
                    historical_min = round(historical_stats.get('min', 0), 2)
                    historical_max = round(historical_stats.get('max', 0), 2)

                    # Get recent prices for the crop in the specified city
                    recent_prices = combined_df[(combined_df['Crop'] == crop_name) &
                                               (combined_df['City'] == city_name)].sort_values('Date', ascending=False).head(5)
                    recent_prices = recent_prices[['Date', 'Price']].to_dict('records')

    return render_template_string(
        HTML_TEMPLATE,
        error=error,
        predicted_price=round(predicted_price, 2) if predicted_price is not None else None,
        adjusted_price=round(adjusted_price, 2) if adjusted_price is not None else None,
        most_recent_price=round(most_recent_price, 2) if most_recent_price is not None else None,
        historical_mean=historical_mean,
        historical_min=historical_min,
        historical_max=historical_max,
        prediction_month=prediction_month,
        recent_prices=recent_prices,
        crops=crops,
        cities=cities,
        dominant_soil=dominant_soil,
        suggested_crops=suggested_crops,
        crop_name=crop_name,
        city_name=city_name,
        prediction_date_str=prediction_date_str ,
        ield=ield_amount,
        revenue=round(revenue, 2) if revenue is not None else None,
        cost=round(cost, 2) if cost is not None else None,
        net_profit=round(net_profit, 2) if net_profit is not None else None,
        storage_recommendation=storage_recommendation if storage_recommendation else "Unable to provide storage recommendation."
    )

if __name__ == '__main__':
    app.run(debug=True)