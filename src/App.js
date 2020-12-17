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
My button count
     </button>
    </div>
  );
}

export default App;
