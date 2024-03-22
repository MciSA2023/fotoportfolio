import React, { useState } from 'react';
import './foto_styles.css';
import pictures from '../../services/getpictures';
import FotoGallery from './foto_gallery';

const categories = pictures.map((picture) => picture.category);
const uniqueCategories = [...new Set(categories)];

function FotoStyles() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleFotoStyleClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='foto_styles_main_container'>
            <div className='foto_styles_container'>
                {uniqueCategories.map((category) => {
                    const picture = pictures.find((picture) => picture.category === category);
                    const backgroundImageStyle = {
                        backgroundImage: `url(${picture.imagePath})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    };
                    return (
                        <div key={picture.id} className={`foto_styles_grid_item ${picture.format}-size`} style={backgroundImageStyle} onClick={() => handleFotoStyleClick(category)}>
                            <div className='Category_container'>
                                <h2 className='category'>{category}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
            {selectedCategory && (
                <div className='landing_page_überschrift'>
                    <h1 className='überschrift'>{selectedCategory} Foto Gallery</h1>
                </div>
            )}
            {selectedCategory && (
                <FotoGallery category={selectedCategory} />
            )}
        </div>
    );
}

export default FotoStyles;
