import './Slider.css';

const Slider = ({
  value,
  onChange,
  min = 5,
  max = 25,
  label,
}: {
  value: number;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
  label: string;
}) => (
  <>
    {label ? `${label}: ` : ''}
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      className="slider"
      onChange={(slider) => onChange(slider.target.value)}
    ></input>
  </>
);

export default Slider;
