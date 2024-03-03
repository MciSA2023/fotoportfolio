import React from 'react';
import './foto_styles.css';
import pictures from '../../services/getpictures';

// Getting Categories from pictures

const categories = pictures.map((picture) => picture.category);
const uniqueCategories = [...new Set(categories)];

// Function to get one random picture from each category and display every category in a grid-item 

function FotoStyles() {
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
                    if (picture.format === 'portrait') {
                        return (
                            <div key={picture.id} className='foto_styles_grid_item portrait_size' style={backgroundImageStyle}>
                                <div className='Category_container'>
                                    <h2 className='category'>{category}</h2>
                                </div>
                            </div>
                        );
                    }
                    if (picture.format === 'landscape') {
                        return (
                            <div key={picture.id} className='foto_styles_grid_item landscape_size' style={backgroundImageStyle}>
                                 <div className='Category_container'>
                                    <h2 className='category'>{category}</h2>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default FotoStyles;
