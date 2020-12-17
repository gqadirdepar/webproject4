import React ,{useState} from 'react';

import './App.css';

function App() {
  let [count , setcount]=useState(1)

  return (
    <div>
<Message />

     <button onClick={
       ()=>setcount(count+1)
     }
     >
Click button 
     </button>
    </div>
  );
}

export default App;
