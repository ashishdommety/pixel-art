import { useState, useEffect } from 'react';
import Slider from './Slider';

const ColorPicker = ({ color, setColor }) => {
  const changeRed = (r) => {
    let newColor = color;
    setColor({ r, g: color.g, b: color.b });
  };

  const changeGreen = (g) => {
    let newColor = color;
    setColor({ r: color.r, g, b: color.b });
  };

  const changeBlue = (b) => {
    let newColor = color;
    setColor({ r: color.r, g: color.g, b });
  };

  return (
    <div
      style={{
        width: `200px`,
        padding: `10px`,
      }}
    >
      <p>Pixel Color:</p>
      <div style={{ display: `block`, margin: `auto`, marginBottom: `15px` }}>
        <p
          style={{ fontSize: `14px` }}
        >{`rgb (${color.r}, ${color.g}, ${color.b})`}</p>
        <div
          style={{
            height: `25px`,
            width: `100%`,
            backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
            borderRadius: `10px`,
            border: `1px solid black`,
            marginRight: `10px`,
          }}
        ></div>
      </div>
      <Slider
        value={color.r}
        onChange={changeRed}
        min={0}
        max={255}
        label={`Red`}
      />
      <Slider
        value={color.g}
        onChange={changeGreen}
        min={0}
        max={255}
        label={`Green`}
      />
      <Slider
        value={color.b}
        onChange={changeBlue}
        min={0}
        max={255}
        label={`Blue`}
      />
    </div>
  );
};

export default ColorPicker;
