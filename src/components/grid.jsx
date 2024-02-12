import './grid.css';
import Pictureonhero from './undercomponents/pictureonhero';


function Grid () {
  return (
  <div className='grid_container'> 
    <div className="grid">
      <div className='item slide-in-top'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-bottom'>
         <Pictureonhero pictureId={2} />
      </div>
      <div className='item slide-in-top_delayed'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-bottom-delayed'>
         <Pictureonhero pictureId={2} />
      </div> 
      <div className='item slide-in-top'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-top'>
         <Pictureonhero pictureId={2} />
      </div> 
      <div className='item slide-in-bottom'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-top_delayed'>
         <Pictureonhero pictureId={2} />
      </div> 
      <div className='item slide-in-bottom-delayed'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-top'>
         <Pictureonhero pictureId={2} />
      </div> 
      <div className='item slide-in-top'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-bottom'>
         <Pictureonhero pictureId={2} />
      </div> 
      <div className='item slide-in-top_delayed'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-bottom-delayed'>
         <Pictureonhero pictureId={2} />
      </div> 
      <div className='item slide-in-top'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-top'>
         <Pictureonhero pictureId={2} />
      </div> 
      <div className='item slide-in-bottom'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-top_delayed'>
         <Pictureonhero pictureId={2} />
      </div> 
      <div className='item slide-in-bottom-delayed'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-top'>
         <Pictureonhero pictureId={2} />
      </div>
      <div className='item slide-in-top'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-bottom'>
         <Pictureonhero pictureId={2} />
      </div>
      <div className='item slide-in-top_delayed'>
      <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-bottom-delayed'>
         <Pictureonhero pictureId={2} />
      </div>
      <div className='item slide-in-top'>
      <Pictureonhero pictureId={1} />
      </div>
    </div>
  </div>
  );
}

export default Grid;