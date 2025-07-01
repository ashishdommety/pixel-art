import Slider from './Slider';
import ColorPicker from './ColorPicker';
import GridToggle from './GridToggle';
import { pixelColor } from '../types';

const Controls = ({
  canvasSize,
  setCanvasSize,
  color,
  setColor,
  gridDisplay,
  setGridDisplay,
}: {
  canvasSize: number;
  setCanvasSize: React.Dispatch<React.SetStateAction<number>>;
  color: pixelColor;
  setColor: React.Dispatch<React.SetStateAction<pixelColor>>;
  gridDisplay: boolean;
  setGridDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <p>Canvas Size:</p>
      <Slider
        value={canvasSize}
        onChange={(value: string) => setCanvasSize(Number(value))}
        label={`Size`}
      />
      <ColorPicker color={color} setColor={setColor} />
      <GridToggle gridDisplay={gridDisplay} setGridDisplay={setGridDisplay} />
    </div>
  );
};

export default Controls;
