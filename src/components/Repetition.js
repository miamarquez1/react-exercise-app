import {useState} from 'react';

function Repetition ({name}) {
    const [CompletedRep, setCompletedRep] = useState(0);

function RepCounter() {
    setCompletedRep(CompletedRep + 1);}

function ResetCounter() {
    setCompletedRep(0);}

return(
<>
    <h1> {name}</h1>
    <h2> Completed Repetitions: {CompletedRep}</h2>

    <ul>
      <li><button onClick={() => {RepCounter()}}>Completed Rep</button></li>
      <li><button onClick={() => {ResetCounter()}}>Reset</button></li>
    </ul> </>

    )
}
export default Repetition;