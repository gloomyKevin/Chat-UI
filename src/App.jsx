import React, { useState } from 'react';
import Button from './Button.jsx'
import './App.css';
import useColorSwitch from './useColorSwitch.js';

// use hook
function App() {
  // const [color, setColor] = useState("#ff0000");

  // const handleClick1 = () => {
  //   // alert("1");
  //   // setColor("#00ff00");
  // };
  const [color, handleClick1] = useColorSwitch();

  // const handleClick2 = () => {
  //   alert("2");
  // };

  const [color2, handleClick2] = useColorSwitch("#0000ff", "#ff00ff");

  return (
    <div>
      <Button label="按钮" onClick={handleClick1} />
      <p style={{ color }}>这是一段文本</p>
      <Button label="点我" onClick={handleClick2} />
      <p style={{ color: color2 }}>这是第二段文本</p>
    </div>
  );

}

export default App; 