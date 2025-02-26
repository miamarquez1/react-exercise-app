import React, { useState } from 'react';

function RunningExercise({ name }) {
  const [laps, setLaps] = useState([]);

  const recordLap = () => {
    const currentTime = new Date().toLocaleTimeString();
    setLaps([...laps, currentTime]);
  };

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={recordLap}>Record Lap</button>
      <h3>Laps:</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>{lap}</li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;