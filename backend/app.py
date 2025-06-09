from flask import Flask, render_template, request, jsonify
from flask_cors import CORS  # Import CORS
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from collections import Counter

app = Flask(__name__)
CORS(app)  

# Load the players.csv file
PLAYERS_FILE = "../data/players.csv"
players_df = pd.read_csv(PLAYERS_FILE)

def simulate_ballon_dor_from_metrics(df: pd.DataFrame, num_simulations: int = 1000) -> pd.DataFrame:
    df = df.copy()
    df["Trophy Count"] = df["Trophies This Season"].apply(lambda x: len(str(x).split(",")))
    df["Goals per Match"] = df["Goals"] / df["Matches"]
    features = df[["Trophy Count", "Goals per Match", "Man of the Match Awards"]]
    scaler = StandardScaler()
    scaled_features = scaler.fit_transform(features)
    raw_scores = scaled_features.mean(axis=1)
    probabilities = (raw_scores - raw_scores.min()) / (raw_scores.max() - raw_scores.min())
    probabilities = probabilities / probabilities.sum()
    player_names = df["Name"].values
    sim_winners = np.random.choice(player_names, size=num_simulations, p=probabilities)
    win_counts = Counter(sim_winners)
    total = sum(win_counts.values())
    result_df = pd.DataFrame({
        "Player": list(win_counts.keys()),
        "Simulated Wins": list(win_counts.values()),
        "Win Probability (%)": [round(100 * win_counts[p] / total, 2) for p in win_counts]
    }).sort_values("Win Probability (%)", ascending=False).reset_index(drop=True)
    return result_df

@app.route('/')
def index():
    return "Hello, Ballon d'Or Predictor!"

@app.route('/simulate', methods=['POST'])
def simulate():
    # Use the loaded players_df for simulation
    result_df = simulate_ballon_dor_from_metrics(players_df)
    return jsonify(result_df.to_dict(orient="records"))

if __name__ == '__main__':
    app.run(debug=True)