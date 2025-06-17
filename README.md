# Ballon d'Or Predictor

## Description
The Ballon d'Or Predictor is a web application that simulates the probability of football players winning the prestigious Ballon d'Or award based on their performance metrics. The application consists of a React frontend and a Flask backend. The backend processes player data from a CSV file and performs probabilistic simulations using machine learning techniques, while the frontend displays the results in an interactive interface.

## Features
- Simulates Ballon d'Or probabilities based on player metrics such as goals, assists, matches played, and trophies won.
- Displays simulation results in a user-friendly table format.
- Allows users to trigger simulations directly from the frontend.

---

## Prerequisites
- Python 3.10 or higher
- Node.js and npm
- A modern web browser

---

## Installation and Setup

### Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Create and activate a virtual environment:
On macOS/Linux:
    ```
    python3 -m venv venv
    source venv/bin/activate
   ```
On Windows:
    ```
    python3 -m venv venv
    venv\Scripts\activate
   ```

3. Install the required dependencies:
    ```pip install -r requirements.txt```

4. Start the Flask backend:
    ```python app.py```

### Frontend Setup

1. Navigate to the `frontend` directory

2. Install the required dependencies:
    ```npm install```

3. Start the React development server:
    ```npm run dev```

## Usage
1. Open the frontend in your browser at `local host address`.
2. Click the "Generate Results" button on the Start Page to navigate to the simulation page.
3. On the simulation page, click "🔄 Simulate Ballon d'Or" to fetch simulation results from the backend.
4. View the simulation results in the table.

---

## Troubleshooting
- **Backend Issues**:
  - Ensure the virtual environment is activated and all dependencies are installed.
  - Verify that the Flask backend is running on the right address.

- **Frontend Issues**:
  - Ensure `npm install` was run successfully in the `frontend` directory.
  - Verify that the React development server is running on the right address.

- **CORS Errors**:
  - Ensure `flask-cors` is installed and enabled in the backend.
  - Check the browser's developer tools (Console and Network tabs) for error details.

- **Dependency Issues**:
  - If you encounter missing packages, ensure they are installed in the virtual environment:
    ```pip install -r requirements.txt```
  - For frontend issues, ensure all dependencies are installed:
    ```npm install```