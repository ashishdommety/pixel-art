import { useState, useEffect } from 'react';
import './Canvas.css';

const Box = ({ pixeColor }) => {
  const [color, setColor] = useState(`rgb(255,255,255)`);

  const changeColor = () => {
    const currentColor = `rgb(${pixeColor.r}, ${pixeColor.g}, ${pixeColor.b})`;
    setColor(currentColor);
  };

  return (
    <div
      onClick={changeColor}
      className="pixelBox"
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

const Canvas = ({ size, pixelColor }) => {
  const [canvasState, setCanvasState] = useState([]);

  // initiate the canvas
  useEffect(() => {
    let canvas = new Array(size);
    let row = new Array(size);

    // insert 0s into row row
    for (let i = 0; i < size; i++) {
      row[i] = 0;
    }

    // push 0s row into parent canvas
    for (let i = 0; i < size; i++) {
      canvas[i] = row;
    }

    setCanvasState(canvas);
  }, [size]);

  return (
    <div
      style={{
        display: `block`,
        margin: `auto`,
        width: `fit-content`,
        boxShadow: `1px 1px 4px #000000`,
      }}
    >
      {canvasState.map((row, i) => (
        <div style={{ display: `flex` }}>
          {row.map(() => (
            <Box pixeColor={pixelColor} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
