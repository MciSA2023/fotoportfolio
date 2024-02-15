import './drawer.css';
import getpictures from "../services/getpictures";
import { useState } from 'react';

function Drawer(props) { 
  const pictures = getpictures();
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Setze den initialen Index auf 0
  const selectedPicture = pictures[currentImageIndex];

  const handlebuttonclickplus = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  }

  const handlebuttonclickminus = () => {
    setCurrentImageIndex((currentImageIndex - 1 + pictures.length) % pictures.length);
  }

  return (
    <div className="drawer_wrapper" style={{ backgroundImage: `url(${selectedPicture.imagePath})`, backgroundSize: 'cover'}}>
      <div className='drawer_container'>
        <div className='button_container'>
          <button onClick={handlebuttonclickplus}>Nächstes Bild</button>
        </div>
        <button onClick={handlebuttonclickminus}>Vorheriges Bild</button>
      </div>
    </div>    
  );
}

export default Drawer;
