import React, { useState, useEffect } from 'react';
import './grid.css';
import Pictureonhero from './undercomponents/pictureonhero';
import Landing_page from './landing_page';
import pictures from '../services/getpictures';

function Grid() {
  const [showGrid, setShowGrid] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    preloadImages();
    
    setTimeout(() => {
      setAnimationComplete(true);
    }, 6500);
  }, []);

  
  const preloadImages = () => {
    pictures.forEach(picture => {
      const img = new Image();
      img.src = require(`../img/DSC${picture.id}.JPG`);
    });
  };

  if (animationComplete) {
    return <Landing_page />;
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
     <Pictureonhero pictureId={3} />
     </div>
     <div className='item slide-in-bottom-delayed'>
        <Pictureonhero pictureId={4} />
     </div> 
     <div className='item slide-in-top'>
     <Pictureonhero pictureId={5} />
     </div>
     <div className='item slide-in-top'>
        <Pictureonhero pictureId={6} />
     </div> 
     <div className='item slide-in-bottom'>
     <Pictureonhero pictureId={7} />
     </div>
     <div className='item slide-in-top_delayed'>
        <Pictureonhero pictureId={8} />
     </div> 
     <div className='item slide-in-bottom-delayed'>
     <Pictureonhero pictureId={9} />
     </div>
     <div className='item slide-in-top'>
        <Pictureonhero pictureId={10} />
     </div> 
     <div className='item slide-in-top'>
     <Pictureonhero pictureId={1} />
     </div>
     <div className='item slide-in-bottom'>
        <Pictureonhero pictureId={4} />
     </div> 
        <div className='item slide-in-top_delayed'>
           <Pictureonhero pictureId={0} />
        </div>
     <div className='item slide-in-bottom-delayed'>
        <Pictureonhero pictureId={3} />
     </div> 
     <div className='item slide-in-top'>
     <Pictureonhero pictureId={4} />
     </div>
     <div className='item slide-in-top'>
        <Pictureonhero pictureId={5} />
     </div> 
     <div className='item slide-in-bottom'>
     <Pictureonhero pictureId={6} />
     </div>
     <div className='item slide-in-top_delayed'>
        <Pictureonhero pictureId={7} />
     </div> 
     <div className='item slide-in-bottom-delayed'>
     <Pictureonhero pictureId={8} />
     </div>
     <div className='item slide-in-top'>
        <Pictureonhero pictureId={9} />
     </div>
     <div className='item slide-in-top'>
     <Pictureonhero pictureId={10} />
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
     <Pictureonhero pictureId={3} />
     </div>
     </div>
   </div>
 );

}

export default Grid;
