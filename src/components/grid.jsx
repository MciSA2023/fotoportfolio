import './grid.css';
import Pictureonhero from './undercomponents/pictureonhero';


function Grid () {
  return (
    <div className="grid">
        <div className="col slide-in-bottom">
            <Pictureonhero/>
            <div className="row">2</div>
            <div className="row">3</div>
            <div className="row">4</div>
            <div className="row">5</div>
        </div>
        <div className="row">
            <div className="col">6</div>
            <div className="col">7</div>
            <div className="col">8</div>
            <div className="col">9</div>
            <div className="col">10</div>
        </div>
        <div className="row">
            <div className="col">11</div>
            <div className="col">12</div>
            <div className="col">13</div>
            <div className="col">14</div>
            <div className="col">15</div>
            
        </div>
        <div className="row">
            <div className="col">16</div>
            <div className="col">17</div>
            <div className="col">18</div>
            <div className="col">19</div>
            <div className="col">20</div>
                
        </div>
        <div className="row">
            <div className="col">21</div>
            <div className="col">22</div>
            <div className="col">23</div>
            <div className="col">24</div>
            <div className="col">25</div>
            </div>
    </div>
  );
}

export default Grid;