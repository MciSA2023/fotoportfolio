import './landing_page.css';
import getpictures from "../services/getpictures";
import { useState } from 'react';

function Landing_page() { 
  const pictures = getpictures();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlebuttonclickplus = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  }

  const handlebuttonclickminus = () => {
    setCurrentImageIndex((currentImageIndex - 1 + pictures.length) % pictures.length);
  }

  return (
    <div className='landing_page_main_container'>
      <div>
      </div>
    </div>
  );
}

export default Landing_page;
