import './landing_page.css';
import FotoStyles from './undercomponents/foto_styles';
import Carosell from './undercomponents/carosell';
import slides from './carouselData.json';
import FotoGallery from './undercomponents/foto_gallery';

function Landing_page() {
    return (
        <div className='landing_page_main_container fade-in-bottom'>
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
            <div className='landing_page_überschrift'>
                <h1 className='überschrift'>Photograpy Categories</h1>
            </div>
        <div className='landing_page_foto_styles'>
            <div>
                <FotoStyles />
            </div>
            <div className='landing_page_überschrift'>
                <h1 className='überschrift'>Full Foto Gallery</h1>
            </div>
            <div>
                <FotoGallery />
            </div>
        </div>
        </div>
    );
}

export default Landing_page;
