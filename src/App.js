import React, { useState } from 'react';
import './App.css';
import Coin from './Coin';

function App() {
  
  const [coin,setCoin] = useState("head");
  const [headCount,setHeadCount] = useState(0);
  const [tailCount,setTailCount] = useState(0);
  const handleFlip = () =>{
      const choose = Math.random() < 0.5 ? "head" : "tail";
      choose==="head"?setHeadCount(headCount+1):setTailCount(tailCount+1)
      setCoin(choose);
  }

  return (
    <div className='imageContainer'>
      <h1>Want to flip coin without coin?</h1>
      <Coin side={coin}/>
      <button type="submit" className='flipButton' onClick={handleFlip}>Flip me!</button>
      <h2>Out of {headCount+tailCount} flips, There have been {headCount} heads and {tailCount} tails.</h2>
    </div>
  );
}

export default App;
