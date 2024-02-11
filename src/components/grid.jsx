import './grid.css';


function Grid () {
  return (
    <div className="grid">
        <div className="row">
            <div className="col">1</div>
            <div className="col">2</div>
            <div className="col">3</div>
        </div>
        <div className="row">
            <div className="col">4</div>
            <div className="col">5</div>
            <div className="col">6</div>
        </div>
        <div className="row">
            <div className="col">7</div>
            <div className="col">8</div>
            <div className="col">9</div>
        </div>
    </div>
  );
}

export default Grid;