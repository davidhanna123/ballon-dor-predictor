import React from 'react';

function Table({ players }) {
  
  return (
    <table border="1" cellPadding="10" style={{ marginTop: '1rem', width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>Minutes Played</th>
          <th>Trophies</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{player.name}</td>
            <td>{player.goals}</td>
            <td>{player.assists}</td>
            <td>{player.minutes}</td>
            <td>{player.trophies}</td>
            <td>{player.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
