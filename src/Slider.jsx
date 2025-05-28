import './Slider.css';

const Slider = ({ value, onChange }) => (
  <input
    type="range"
    min="5"
    max="25"
    value={value}
    className="slider"
    onChange={(slider) => onChange(slider.target.value)}
  ></input>
);

export default Slider;
