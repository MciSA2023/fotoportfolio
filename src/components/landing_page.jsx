import './landing_page.css';
import Carosell from './undercomponents/carosell';
import slides from './carouselData.json'; // Directly import the array of slides

function Landing_page() {
    return (
        <div className='landing_page_main_container'>
            <div>
                <Carosell data={slides} /> {/* Pass slides directly */}
            </div>
        </div>
    );
}

export default Landing_page;
