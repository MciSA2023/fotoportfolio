import React from 'react';

const FotoStyles = () => {
    // Array of categories
    const categories = ['Nature', 'Travel', 'Food', 'Animals', 'Architecture'];

    // Generate a random number of categories
    const numCategories = Math.floor(Math.random() * categories.length) + 1;

    // Select random categories
    const selectedCategories = categories.slice(0, numCategories);

    return (
        <div>
            {selectedCategories.map((category, index) => (
                <div key={index} className="grid-item">
                    {/* Render grid item for each category */}
                    <h2>{category}</h2>
                    {/* Add more content here */}
                </div>
            ))}
        </div>
    );
};

export default FotoStyles;