import Slider from './Slider';
import ColorPicker from './ColorPicker';

const Controls = ({ canvasSize, setCanvasSize, color, setColor }) => {
  return (
    <div>
      <p>Canvas Size:</p>
      <Slider
        value={canvasSize}
        onChange={(value) => setCanvasSize(Number(value))}
        label={`Size`}
      />
      <ColorPicker color={color} setColor={setColor} />
    </div>
  );
};

export default Controls;
