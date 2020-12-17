import React ,{useState} from 'react';
import Message from './message.js';
import './App.css';

function App() {
  let [count , setcount]=useState(1)
  let [isMorning , setMorning]= useState(true)

  return (
    <div>
      <h2> Day Time is : {isMorning ? 'Good Morning' : 'Good Night' }</h2>
<Message counter={count} />

     <button onClick={
       ()=>setcount(count+1)
     }
     >
Click button 
     </button>
     <button onClick={
       ()=>setMorning(!isMorning)
     }
     >
Update Day Click
     </button>
    </div>
  );
}

export default App;
