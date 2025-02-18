import {useState} from 'react';
import Repetition from './components/Repetition';
import Duration from './components/Duration';

function App() {
  let screen; 
  let [page, setPage]= useState("menu");
  let [exercise, setExercise]= useState("empty");

  if (page === "menu") {
    screen = <>
    <h1> Exercise App</h1>

    <ul>
      <li><button onClick={() => {setExercise("Squats"); setPage ("reps")}}>Squats</button></li>
      <li><button onClick={() => {setExercise("Running"); setPage ("timer")}}>Running</button></li>
      <li><button onClick={() => {setExercise("Planks"); setPage ("timer")}}>Planks</button></li>
      <li><button onClick={() => {setExercise("Jumping Jacks"); setPage ("reps")}}>Jumping Jacks</button></li>
      <li><button onClick={() => {setExercise("High Knees"); setPage ("timer")}}>High Knees</button></li>
      <li><button onClick={() => {setExercise("Crunches"); setPage ("reps")}}>Crunches</button></li>
    </ul> </>
  } 
  else if (page === "timer") {
    screen = <Duration name={exercise} />
  }
  else if (page === "reps") {
    screen = <Repetition name={exercise}/>
  }
  return (
    <>{screen}</>
  );
}

export default App;
