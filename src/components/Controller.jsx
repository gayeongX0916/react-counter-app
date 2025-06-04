const Controller = ({ handleonClick }) => {
  return (
    <div className="counter-controller">
      <button onClick={() => handleonClick(-1)}>-1</button>
      <button onClick={() => handleonClick(-10)}>-10</button>
      <button onClick={() => handleonClick(-100)}>-100</button>
      <button onClick={() => handleonClick(+1)}>+1</button>
      <button onClick={() => handleonClick(+10)}>+10</button>
      <button onClick={() => handleonClick(+100)}>+100</button>
    </div>
  );
};

export default Controller;
