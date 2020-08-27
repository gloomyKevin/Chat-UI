import React, { useState } from 'react';
import Button from './Button.jsx'
import './App.css';
import useColorSwitch from './useColorSwitch.jsx';

// use hook
function App() {
  // const [color, setColor] = useState("#ff0000");

  // const handleClick1 = () => {
  //   alert("1");
  //   setColor("##00ff00")
  // }
  const [color, handleClick1] = useColorSwitch();

  const handleClick2 = () => {
    // alert("2");
  }
  return (
    <div>
      {/* <Button label="按钮" onClick={handleClick1}><span>&gt;</span></Button>
      <p style={{ color }}>这是一段文本</p>
      <Button label="点我" onClick={handleClick2} /> */}
    </div>
  );
}

export default App; 