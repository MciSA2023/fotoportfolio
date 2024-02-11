import './pictureonhero.css';
import getpictures from "../../services/getpictures";


function Pictureonhero(picture_id) {
    const pictures = getpictures();
  return (
    <div className='Wrapper-PictureonHero'>
        <div>
        {pictures.map(picture => (
                <div key={picture.id}>
                    <img src={picture.imagePath} alt={picture.category} className='picture_setformat'/>
                </div>
            ))}
        </div>
    </div>

  );
}

export default Pictureonhero;