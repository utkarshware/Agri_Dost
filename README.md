# 🌾 Agri_Dost - Smart Agricultural Price Prediction Platform

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3.x-green.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-API-lightgrey.svg)](https://flask.palletsprojects.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![XGBoost](https://img.shields.io/badge/XGBoost-ML_Model-orange.svg)](https://xgboost.readthedocs.io/)

Agri_Dost is an intelligent agricultural platform designed to empower farmers with AI-driven crop price predictions, alternative crop recommendations, and real-time assistance through a multilingual chatbot. This comprehensive solution helps farmers make informed decisions about crop selection and market timing to maximize their profits.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Machine Learning Model](#-machine-learning-model)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### 🎯 Core Features

- **📊 AI-Powered Price Prediction**
  - Accurate crop price forecasting using XGBoost machine learning model
  - Historical price analysis across multiple cities in Maharashtra
  - Time-series predictions with seasonal adjustments
  - Support for multiple crop types (Maize, Wheat, Rice, etc.)

- **🌱 Alternative Crop Selection**
  - Intelligent crop recommendations based on soil type and climate
  - Profit maximization suggestions
  - Yield optimization insights

- **🤖 AI Chatbot (Sahayak)**
  - Real-time agricultural assistance
  - Powered by Google Gemini AI
  - Multilingual support for regional languages
  - Context-aware farming advice

- **📈 Interactive Dashboard**
  - Visual price trend analysis
  - City-wise crop price comparisons
  - Historical data visualization with charts
  - Personalized user profiles

### 🔐 User Management

- Secure authentication system
- User registration and login
- Protected routes for authenticated users
- Profile management

### 🎨 Modern UI/UX

- Responsive design for all devices
- 3D animated backgrounds using Spline
- Lottie animations for engaging user experience
- Clean and intuitive interface with TailwindCSS

---

## 🛠 Tech Stack

### Frontend

- **Framework:** React 18.3.1
- **Routing:** React Router DOM 7.4.0
- **Styling:** TailwindCSS 3.4, PostCSS, Autoprefixer
- **UI Components:** Material-UI (MUI) 7.0
- **Icons:** React Icons, Lucide React
- **Animations:** Lottie React, Spline (3D)
- **Charts:** Recharts 2.15
- **HTTP Client:** Axios 1.8.4

### Backend

- **Framework:** Flask (Python)
- **Machine Learning:** XGBoost, Scikit-learn
- **Data Processing:** Pandas, NumPy
- **Model Persistence:** Joblib
- **Data Visualization:** Matplotlib

### AI/ML

- **Price Prediction Model:** XGBoost Regressor
- **Chatbot:** Google Gemini AI (gemini-1.5-flash)
- **Feature Engineering:** Time-series analysis, Seasonal encoding

---

## 📂 Project Structure

```
Agri_Dost/
├── public/                      # Static public assets
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/                         # React application source
│   ├── assets/                  # Animation files
│   │   └── farming-animation.json
│   │
│   ├── components/              # Reusable components
│   │   ├── Chatbot.jsx         # AI chatbot component
│   │   ├── Navbar.jsx          # Navigation bar
│   │   └── ProtectedRoute.jsx  # Route protection
│   │
│   ├── context/                 # React context
│   │   └── AuthContext.js      # Authentication context
│   │
│   ├── data/                    # Static data
│   │   └── stateDistrictData.js
│   │
│   ├── hooks/                   # Custom hooks
│   │   └── useAuth.js
│   │
│   ├── pages/                   # Application pages
│   │   ├── Home.jsx            # Landing page
│   │   ├── Dashboard.jsx       # Main dashboard
│   │   ├── About.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Profile.jsx
│   │   ├── UserInfo.jsx
│   │   ├── LearnMore.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsOfService.jsx
│   │
│   ├── App.js                   # Main app component
│   ├── App.css                  # App styles
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles
│
├── PredictiveModel/             # ML Backend
│   ├── app_with_webpage.py     # Flask API server
│   ├── app.py                  # Alternative API
│   ├── prediction_model.py     # Model training script
│   ├── Prediction_script.py    # Prediction utilities
│   ├── Dataset_API.py          # Data fetching
│   ├── Mock_data.py            # Test data generation
│   ├── create_rgb.py           # Image processing
│   ├── image_cleaner.py        # Data cleaning
│   ├── inspect_data.py         # Data analysis
│   ├── prepare_stgan.py        # Data preparation
│   ├── requirements.txt        # Python dependencies
│   │
│   ├── dataset/                # Training data
│   │   ├── Mumbai/
│   │   ├── Nagpur/
│   │   ├── Nashik/
│   │   ├── Pune/
│   │   ├── Raigad/
│   │   └── Thane/
│   │
│   ├── static/                 # Flask static files
│   └── templates/              # Flask templates
│       └── index.html
│
├── package.json                # NPM dependencies
├── tailwind.config.js          # TailwindCSS config
├── postcss.config.js           # PostCSS config
└── README.md                   # Project documentation
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.x or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Python** (v3.8 or higher) - [Download](https://www.python.org/)
- **pip** - Python package installer
- **Git** - Version control

---

## 🚀 Installation

### Frontend Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/utkarshware/Agri_Dost.git
   cd Agri_Dost
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment file**

   ```bash
   # Create .env file in the root directory
   touch .env
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000`

### Backend Setup

1. **Navigate to PredictiveModel directory**

   ```bash
   cd PredictiveModel
   ```

2. **Create a virtual environment** (recommended)

   ```bash
   python -m venv venv

   # Activate virtual environment
   # On Windows:
   venv\Scripts\activate

   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install Python dependencies**

   ```bash
   pip install flask pandas scikit-learn xgboost joblib matplotlib openpyxl
   ```

4. **Train the model** (if not already trained)

   ```bash
   python prediction_model.py
   ```

5. **Start the Flask server**

   ```bash
   python app_with_webpage.py
   ```

   The API will run at `http://localhost:5000`

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Gemini AI API Key (for chatbot)
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here

# Backend API URL
REACT_APP_API_URL=http://localhost:5000

# Other environment-specific variables
REACT_APP_ENV=development
```

### Getting API Keys

1. **Google Gemini API Key:**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Create a new API key
   - Copy and paste it into your `.env` file

---

## 📖 Usage

### Running the Complete Application

1. **Start the Backend Server** (Terminal 1)

   ```bash
   cd PredictiveModel
   python app_with_webpage.py
   ```

2. **Start the Frontend** (Terminal 2)

   ```bash
   npm start
   ```

3. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`

### Using the Features

#### 1. Price Prediction

- Log in or sign up for an account
- Navigate to the Dashboard
- Select your crop type and city
- Choose the date range for prediction
- View detailed price forecasts and trends

#### 2. Chatbot Assistance

- Click the chatbot icon (Sahayak) in the bottom-right corner
- Ask agriculture-related questions
- Get instant AI-powered responses

#### 3. Profile Management

- Update your personal information
- View your prediction history
- Manage account settings

---

## 🤖 Machine Learning Model

### Model Architecture

The price prediction system uses **XGBoost (Extreme Gradient Boosting)** regression model with the following features:

#### Input Features

- **Temporal Features:** Year, Month, Day, Day of Week
- **Location:** City code (Mumbai, Pune, Nagpur, Nashik, Raigad, Thane)
- **Crop Type:** Encoded crop category
- **Seasonal Factor:** Monsoon, Winter, Summer classification
- **Historical Price:** Previous day's price

#### Data Processing Pipeline

1. **Data Collection:** Historical crop prices from multiple cities
2. **Data Cleaning:**
   - Remove null values
   - Filter outliers using IQR method
   - Handle missing prices with group means
3. **Feature Engineering:**
   - Extract date components
   - Encode categorical variables (crop, city)
   - Calculate seasonal indicators
   - Create lag features (previous prices)
4. **Model Training:**
   - Train-test split (80-20)
   - XGBoost regression
   - Hyperparameter optimization

#### Model Performance

- **Evaluation Metrics:** RMSE, R² Score, MAE
- **Accuracy:** High predictive accuracy for short to medium-term forecasts
- **Dataset:** City-wise historical crop price data for Maharashtra

#### Model Files

- `crop_price_model_xgboost_citywise.pkl` - Trained model
- `crop_name_to_code.pkl` - Crop encoding mapping
- `city_name_to_code.pkl` - City encoding mapping

---

## 🔌 API Documentation

### Flask Backend Endpoints

#### 1. Predict Crop Price

**Endpoint:** `POST /predict`

**Request Body:**

```json
{
  "crop": "Maize",
  "city": "Pune",
  "start_date": "2025-01-01",
  "end_date": "2025-01-15"
}
```

**Response:**

```json
{
  "predictions": [
    {
      "date": "2025-01-01",
      "price": 2450.5
    },
    {
      "date": "2025-01-02",
      "price": 2455.75
    }
  ],
  "statistics": {
    "mean_price": 2453.12,
    "min_price": 2450.5,
    "max_price": 2455.75
  }
}
```

#### 2. Get Available Crops

**Endpoint:** `GET /crops`

**Response:**

```json
{
  "crops": ["Maize", "Wheat", "Rice", "Soybean", "Cotton"]
}
```

#### 3. Get Available Cities

**Endpoint:** `GET /cities`

**Response:**

```json
{
  "cities": ["Mumbai", "Pune", "Nagpur", "Nashik", "Raigad", "Thane"]
}
```

---

## 🧪 Testing

### Run Frontend Tests

```bash
npm test
```

### Run Backend Tests

```bash
cd PredictiveModel
python -m pytest tests/
```

---

## 📦 Building for Production

### Frontend Production Build

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### Deploy Frontend

```bash
# Example: Deploy to Netlify, Vercel, or any static hosting
npm run build
# Upload build folder to hosting service
```

### Deploy Backend

```bash
# Example: Deploy Flask app to Heroku, AWS, or Google Cloud
# Set up production environment variables
# Configure production server (Gunicorn, uWSGI, etc.)
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Project Maintainer:** Utkarsh Ware  
**Repository:** [Agri_Dost](https://github.com/utkarshware/Agri_Dost)

For questions, suggestions, or support:

- 📧 Email: [Contact via GitHub](https://github.com/utkarshware)
- 🐛 Issues: [GitHub Issues](https://github.com/utkarshware/Agri_Dost/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/utkarshware/Agri_Dost/discussions)

---

## 🙏 Acknowledgments

- Thanks to all contributors who have helped improve this project
- Google Gemini AI for powering the chatbot
- XGBoost team for the excellent ML library
- Maharashtra Agricultural Department for data insights
- Open-source community for the amazing tools and libraries

---

## 🌟 Star This Repository

If you find this project helpful, please consider giving it a ⭐ on GitHub!

---

## 📊 Project Status

🚧 **Active Development** - This project is actively maintained and updated regularly.

### Roadmap

- [ ] Add more crop types
- [ ] Expand to additional states in India
- [ ] Implement weather data integration
- [ ] Add mobile application (React Native)
- [ ] Real-time market price updates
- [ ] Advanced analytics dashboard
- [ ] Multi-language support for UI

---

**Made with ❤️ for Indian Farmers**
