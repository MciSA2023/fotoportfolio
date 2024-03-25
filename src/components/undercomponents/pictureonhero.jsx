// Pictureonhero.js
import React from 'react';
import pictures from "../../services/getpictures";
import './pictureonhero.css';

function Pictureonhero({ pictureId }) {
  const selectedPicture = pictures.find(picture => picture.id === pictureId);

  if (!selectedPicture) {
    return <div>No picture found with the provided ID.</div>;
  }

  const imagePath = require(`../../img/DSC${selectedPicture.id}.JPG`);

  return (
    <div className='Wrapper-PictureonHero'>
      <img src={imagePath} alt={selectedPicture.category} className='picture_setformat' loading='lazy'/>
    </div>
  );
}

export default Pictureonhero;