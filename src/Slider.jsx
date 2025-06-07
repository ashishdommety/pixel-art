import './Slider.css';

const Slider = ({ value, onChange, min = '5', max = '25', label }) => (
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
