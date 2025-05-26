import { useState, useEffect } from 'react';

const Box = (color) => {
  const [boxColor, setBoxColor] = useState(0);

  return (
    <div
      onClick={() => setBoxColor(!boxColor)}
      style={{
        width: `20px`,
        height: `20px`,
        backgroundColor: boxColor ? `black` : `white`,
        margin: `1px`,
        cursor: `pointer`,
      }}
    ></div>
  );
};

const Canvas = ({ size }) => {
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
  }, []);

  return (
    <div style={{ display: `block`, margin: `auto`, width: `fit-content` }}>
      {canvasState.map((row, i) => (
        <div style={{ display: `flex` }}>
          {row.map(() => (
            <Box />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
