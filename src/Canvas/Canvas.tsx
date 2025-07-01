import { useState, useEffect } from 'react';
import './Canvas.css';
import { pixelColor } from '../types';

const Box = ({
  pixelColor,
  gridDisplay,
}: {
  pixelColor: pixelColor;
  gridDisplay: boolean;
}) => {
  const [color, setColor] = useState(`rgb(255,255,255)`);

  const changeColor = () => {
    const currentColor = `rgb(${pixelColor.r}, ${pixelColor.g}, ${pixelColor.b})`;
    setColor(currentColor);
  };

  return (
    <div
      onClick={changeColor}
      className="pixelBox"
      style={{
        backgroundColor: color,
        border: gridDisplay ? `solid rgb(235, 235, 235) 0.1px` : ``,
      }}
    ></div>
  );
};

const Canvas = ({
  size,
  pixelColor,
  gridDisplay,
}: {
  size: number;
  pixelColor: pixelColor;
  gridDisplay: boolean;
}) => {
  const [canvasState, setCanvasState] = useState<number[][]>([]);

  // initiate the canvas
  useEffect(() => {
    let canvas: number[][] = new Array(size);
    let row: number[] = new Array(size);

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
            <Box pixelColor={pixelColor} gridDisplay={gridDisplay} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
