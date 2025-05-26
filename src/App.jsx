import './App.css';
import Canvas from './Canvas';

const App = () => {
  return (
    <div className="content">
      <h1>Pixel Art</h1>
      <p>Click to fill or erase a pixel.</p>
      <Canvas size={5} />
    </div>
  );
};

export default App;
