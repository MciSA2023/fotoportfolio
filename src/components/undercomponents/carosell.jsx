import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './carosell.css';

const Carosell = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    // Check if data is not an array
    if (!Array.isArray(data)) {
        console.error('Data is not an array:', data);
        return null; // Or return a message or UI indicating the error
    }

    const imgPath = (index) => require(`../../img/LowRes/DSC${index}.JPG`);

    return (
        <div className='carosell_main'>
            <BsArrowLeftCircleFill className='arrow arrow_left' onClick={prevSlide} />
            {data.map((item, index) => {
                return (
                    <img src={imgPath(item.src)} alt={item.alt} key={index} className={slide === index ? "slide" : "slide slide-hidden"} loading='lazy'/>
                );
            })}
            <BsArrowRightCircleFill className='arrow arrow_right' onClick={nextSlide} />
            <span className='indicators'>
                {data.map((_, index) => {
                    return (
                        <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator_inactive"}></button>
                    );
                })}
            </span>
        </div>
    );
};

Carosell.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ),
};

export default Carosell;
