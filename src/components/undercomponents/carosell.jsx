import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './carosell.css';

const Carosell = ({ data }) => {
    const [slide, setslide] = useState(0);

    const nextSlide = () => {
        setslide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setslide(slide === 0 ? data.length - 1 : slide - 1);
    }
    
    // Check if data is not an array
    if (!Array.isArray(data)) {
        console.error('Data is not an array:', data);
        return null; // Or return a message or UI indicating the error
    }

    return (
        <div className='carosell_main'>
            <BsArrowLeftCircleFill className='arrow arrow_left' onClick={prevSlide}/>
            {data.map((item, index) => {
                return (
                <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide": "slide slide-hidden"}/>
                );
            })}
            <BsArrowRightCircleFill className='arrow arrow_right' onClick={nextSlide} />
            <span className='indicators'>
                {data.map((_, index) => {
                    return (
                    <button key={index} onClick={()=>setslide(index)} className={slide === index ? "indicator":"indicator indicator_inactive"}></button>
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
