import './GridToggle.css';

const GridToggle = ({
  gridDisplay,
  setGridDisplay,
}: {
  gridDisplay: boolean;
  setGridDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <p>Toggle Grid:</p>
      <button onClick={() => setGridDisplay(!gridDisplay)} id="grid-toggle">
        {gridDisplay ? 'Turn Off' : 'Turn On'}
      </button>
    </>
  );
};

export default GridToggle;
