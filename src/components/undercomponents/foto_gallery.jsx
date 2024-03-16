import React, { useState, useRef } from 'react';
import pictures from '../../services/getpictures';
import './foto_gallery.css';

const FotoGallery = () => {
    const [images, setImages] = useState(Array.from({ length: 1 }, (_, i) => i + 1));
    const [loadedImages, setLoadedImages] = useState(1);
    const [modal, setModal] = useState(false);
    const modalImgRef = useRef(null);

    const loadMoreImages = () => {
        const newImages = Array.from({ length: loadedImages + 3 }, (_, i) => i + 1);
        setImages(newImages);
        setLoadedImages(loadedImages + 3);
    };

    const openFullscreen = (e) => {
        setModal(true);
        const imgSrc = e.target.src;
        modalImgRef.current.src = imgSrc;
    }

    const closeModal = () => {
        setModal(false);
    };
   

    return (
        <div className="foto-gallery">
            <div className="grid-container">
                {pictures.map((image, index) => {
                    if (image.format === 'portrait') {
                        return (
                            <div className="grid-item portrait-size" key={index} onClick={openFullscreen}>
                                <img src={image.imagePath} alt={image.category} className='shown_pic' />
                            </div>
                        );
                    }
                    if (image.format === 'landscape') {
                        return (
                            <div className="grid-item landscape-size" key={index} onClick={openFullscreen}>
                                <img src={image.imagePath} alt={image.category} className='shown_pic' />
                            </div>
                        );
                    }
                    return null;
                })}
           </div>
            {loadedImages < 1 && (
                <div className=''>
                    <button onClick={loadMoreImages}>Load More</button>
                </div>
            )}
            {/* Modal-Overlay */}
            <ModalOverlay modal={modal} modalImgRef={modalImgRef} closeModal={closeModal} />
        </div>
    );
}


const ModalOverlay = ({ modal, modalImgRef, closeModal }) => (
    <div className={modal ? "modal" : "modal-hidden"}>
        <span className="close" onClick={closeModal}>&times;</span>
        <img className="modal-content" id="img01" ref={modalImgRef}/>
    </div>
);

export default FotoGallery;
