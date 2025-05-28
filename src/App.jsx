import { useState, useEffect } from 'react';
import './App.css';
import Canvas from './Canvas';
import Slider from './Slider';

const App = () => {
  const [sliderValue, setSliderValue] = useState(5);

  const changePixelDimensions = (value) => {
    setSliderValue(Number(value));
  };

  return (
    <div className="content">
      <h1>Pixel Art</h1>
      <div className="background-instructions">
        <h2 style={{ fontWeight: `regular` }}>
          Wanna make some pixel art? 😃 🎨
        </h2>
        <p
          style={{ textAlign: `left`, marginLeft: `25px`, marginBottom: `5px` }}
        >
          Instructions:
        </p>
        <ol>
          <li>
            Hover over the canvas below and click on a pixel to either fill it
            or clear it.
          </li>
          <li>
            Use the 👾 slider to increase or decrease the pixel canvas size.
          </li>
        </ol>
      </div>
      <Slider value={sliderValue} onChange={changePixelDimensions} />
      <Canvas size={sliderValue} />
    </div>
  );
};

export default App;
