import './landing_page.css';
import Carosell from './undercomponents/carosell';
import slides from './carouselData.json'; // Directly import the array of slides

function Landing_page() {
    return (
        <div className='landing_page_main_container'>
            <div>
                <div className='landing_page_navbar'>
                    <div className='landing_page_navbar_links'>
                        <ul className='nav_items'>
                            <li className='nav_item_container' ><a href='#' className='nav_item'>Home</a></li>
                            <li className='nav_item_container'><a href='#' className='nav_item'>Photos</a></li>
                            <li className='nav_item_container'><a href='#' className='nav_item'>Gear</a></li>
                            <li className='nav_item_container'><a href='#' className='nav_item'>Contact</a></li>
                        </ul>
                    </div>
                <div>
            </div>
        </div>
            <Carosell data={slides} />
            </div>     
        </div>
    );
}

export default Landing_page;
