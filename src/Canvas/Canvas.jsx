import { useState, useEffect } from 'react';
import './Canvas.css';

const Box = ({ pixeColor, gridDisplay }) => {
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
        border: gridDisplay ? `solid rgb(235, 235, 235)` : ``,
      }}
    ></div>
  );
};

const Canvas = ({ size, pixelColor, gridDisplay }) => {
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
    <div id="canvas">
      {canvasState.map((row, i) => (
        <div style={{ display: `flex` }}>
          {row.map(() => (
            <Box pixeColor={pixelColor} gridDisplay={gridDisplay} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
