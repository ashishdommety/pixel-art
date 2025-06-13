import { useState, useEffect } from 'react';
import './App.css';
import Canvas from './Canvas/Canvas';
import Controls from './Controls/Controls';

const App = () => {
  const [canvasSize, setCanvasSize] = useState(5);
  const [color, setColor] = useState({
    r: 0,
    g: 0,
    b: 0,
  });
  const [gridDisplay, setGridDisplay] = useState(true);

  return (
    <div className="content">
      <h1>Pixel Art</h1>
      <div id="content">
        <div className="background-instructions">
          <h2 style={{ fontWeight: `regular` }}>Controls</h2>
          <hr />
          <Controls
            canvasSize={canvasSize}
            setCanvasSize={setCanvasSize}
            color={color}
            setColor={setColor}
          />
        </div>
        <Canvas
          size={canvasSize}
          pixelColor={color}
          gridDisplay={gridDisplay}
        />
      </div>
    </div>
  );
};

export default App;
