import Slider from './Slider';
import ColorPicker from './ColorPicker';
import GridToggle from './GridToggle';

const Controls = ({
  canvasSize,
  setCanvasSize,
  color,
  setColor,
  gridDisplay,
  setGridDisplay,
}) => {
  return (
    <div>
      <p>Canvas Size:</p>
      <Slider
        value={canvasSize}
        onChange={(value) => setCanvasSize(Number(value))}
        label={`Size`}
      />
      <ColorPicker color={color} setColor={setColor} />
      <GridToggle gridDisplay={gridDisplay} setGridDisplay={setGridDisplay} />
    </div>
  );
};

export default Controls;
