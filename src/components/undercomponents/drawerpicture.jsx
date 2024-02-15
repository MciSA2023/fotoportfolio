import './drawerpicture.css'
import getpictures from "../../services/getpictures";


function Drawerpicture({ pictureId }) {
  const pictures = getpictures();
  const selectedPicture = pictures.find(picture => picture.id === pictureId);

  if (!selectedPicture) {
      return <div>No picture found with the provided ID.</div>;
  }

  return (
      <div className='Wrapper-Drawerpicture'>
              <img src={selectedPicture.imagePath} alt={selectedPicture.category} className='picture_setformat_drawer'/>
      </div>
  );
}

export default Drawerpicture;