import './pictureonhero.css';
import getpictures from "../../services/getpictures";


function Pictureonhero({ pictureId }) {
  const pictures = getpictures();
  const selectedPicture = pictures.find(picture => picture.id === pictureId);

  if (!selectedPicture) {
      return <div>No picture found with the provided ID.</div>;
  }

  return (
      <div className='Wrapper-PictureonHero'>
              <img src={selectedPicture.imagePath} alt={selectedPicture.category} className='picture_setformat'/>
      </div>
  );
}

export default Pictureonhero;