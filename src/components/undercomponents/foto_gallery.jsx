import React, { useState, useRef } from 'react';
import pictures from '../../services/getpictures';
import './foto_gallery.css';

const FotoGallery = ({ category }) => {
    const [modal, setModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const modalImgRef = useRef(null);

    const openFullscreen = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    // Anpassung der Filterlogik
    const filteredPictures = pictures.filter(image => category === null || category === undefined || image.category === category);

    return (
        <div className="foto-gallery">
            <div className="grid-container">
                {filteredPictures.map((image, index) => (
                    <div className={`grid-item ${image.format}-size`} key={index} onClick={() => openFullscreen(image.imagePath)}>
                        <img src={image.imagePath} alt={image.category} className='shown_pic' />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <ModalOverlay modal={modal} modalImgSrc={selectedImage} closeModal={closeModal} />
            )}
        </div>
    );
}

const ModalOverlay = ({ modal, modalImgSrc, closeModal }) => (
    <div className={modal ? "modal" : "modal-hidden"} onClick={closeModal}>
        <span className="close" onClick={closeModal}>&times;</span>
        <img className="modal-content" src={modalImgSrc} alt="modal" />
    </div>
);

export default FotoGallery;
