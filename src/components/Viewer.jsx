const Viewer = ({count}) => {
  return (
    <div className="counter-viewer">
      <div>현재 카운트 :</div>
      <h2>{count}</h2>
    </div>
  );
};

export default Viewer;
