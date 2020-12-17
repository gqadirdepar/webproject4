import React ,{useState} from 'react';

import './App.css';

function App() {
  let [count , setcount]=useState(1)

  return (
    <div>
     <h3>Button pressed {count}</h3>
     <button onClick={
       ()=>setcount(2)
     }
     >
Click button 
     </button>
    </div>
  );
}

export default App;
