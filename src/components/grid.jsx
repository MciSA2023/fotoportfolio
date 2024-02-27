import React, { useState, useEffect} from 'react';
import './grid.css';
import Pictureonhero from './undercomponents/pictureonhero';
import Landing_page from './landing_page';


function Grid() {
  const [showGrid, setShowGrid] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setAnimationComplete(true);
      }, 5500);
      
   }
   , []);

   if (animationComplete) {
      return (
         <Landing_page />
      );
   }



  return (
    <div className={`grid_container ${showGrid ? '' : 'fade-out'}`} >
      <div className={`grid ${showGrid ? 'scale-in-center' : ''}`}>
        <div className='item slide-in-top'>
          <Pictureonhero pictureId={0} />
        </div>
        <div className='item slide-in-bottom'>
         <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-top_delayed'>
      <Pictureonhero pictureId={0} />
      </div>
      <div className='item slide-in-bottom-delayed'>
         <Pictureonhero pictureId={1} />
      </div> 
      <div className='item slide-in-top'>
      <Pictureonhero pictureId={0} />
      </div>
      <div className='item slide-in-top'>
         <Pictureonhero pictureId={1} />
      </div> 
      <div className='item slide-in-bottom'>
      <Pictureonhero pictureId={0} />
      </div>
      <div className='item slide-in-top_delayed'>
         <Pictureonhero pictureId={1} />
      </div> 
      <div className='item slide-in-bottom-delayed'>
      <Pictureonhero pictureId={0} />
      </div>
      <div className='item slide-in-top'>
         <Pictureonhero pictureId={1} />
      </div> 
      <div className='item slide-in-top'>
      <Pictureonhero pictureId={0} />
      </div>
      <div className='item slide-in-bottom'>
         <Pictureonhero pictureId={1} />
      </div> 
         <div className='item slide-in-top_delayed'>
            <Pictureonhero pictureId={0} />
         </div>
      <div className='item slide-in-bottom-delayed'>
         <Pictureonhero pictureId={1} />
      </div> 
      <div className='item slide-in-top'>
      <Pictureonhero pictureId={0} />
      </div>
      <div className='item slide-in-top'>
         <Pictureonhero pictureId={1} />
      </div> 
      <div className='item slide-in-bottom'>
      <Pictureonhero pictureId={0} />
      </div>
      <div className='item slide-in-top_delayed'>
         <Pictureonhero pictureId={1} />
      </div> 
      <div className='item slide-in-bottom-delayed'>
      <Pictureonhero pictureId={0} />
      </div>
      <div className='item slide-in-top'>
         <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-top'>
      <Pictureonhero pictureId={0} />
      </div>
      <div className='item slide-in-bottom'>
         <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-top_delayed'>
      <Pictureonhero pictureId={0} />
      </div>
      <div className='item slide-in-bottom-delayed'>
         <Pictureonhero pictureId={1} />
      </div>
      <div className='item slide-in-top'>
      <Pictureonhero pictureId={0} />
      </div>
      </div>
    </div>
  );
}

export default Grid;
