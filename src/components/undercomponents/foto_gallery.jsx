import React, { useState } from 'react';
import pictures from '../../services/getpictures';
import './foto_gallery.css';

const FotoGallery = () => {
    const [images, setImages] = useState(Array.from({ length: 3 }, (_, i) => i + 1));
    const [loadedImages, setLoadedImages] = useState(3);

    const loadMoreImages = () => {
        const newImages = Array.from({ length: loadedImages + 3 }, (_, i) => i + 1);
        setImages(newImages);
        setLoadedImages(loadedImages + 3);
    };

    const openfullscreen = (e) => {
        const image = e.target;
        image.requestFullscreen();
    }
    

    return (
        <div className="foto-gallery">
            <div className="grid-container">
                {pictures.map((image, index) => (
                    <div className="grid-item" key={index}onClick={openfullscreen}>
                        <img src={image.imagePath} alt={image.category} />
                    </div>
                ))}
            </div>
            {loadedImages < 100 && (
            <div className=''>
                <button onClick={loadMoreImages}>Load More</button>
            </div>
            )}
        </div>
    );
}

export default FotoGallery;
