import React, { useState, useEffect} from 'react';
import './grid.css';
import Pictureonhero from './undercomponents/pictureonhero';
import Drawer from './drawer';


function Grid() {
  const [showGrid, setShowGrid] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setShowGrid(false);
         setAnimationComplete(true);
      }, 5500);
      
   }
   , []);

   if (animationComplete) {
      return (
         <Drawer />
      );
   }



  return (
    <div className={`grid_container ${showGrid ? '' : 'fade-out'}`} >
      <div className={`grid ${showGrid ? 'scale-in-center' : ''}`}>
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
