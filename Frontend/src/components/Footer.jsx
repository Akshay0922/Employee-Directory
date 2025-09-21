// Image Imports
import IconImage from '../assets/images/Icon.png';
import PentharaLogoFooter from '../assets/images/Penthara-Logo.svg';

// Component-specific CSS
import '../assets/styles/footer.css';

/**
 * Footer Component
 * 
 * Renders the main footer of the application.
 * Contains a container with icons and the Penthara logo.
 * Fully responsive and styled using footer.css.
 */
const Footer = () => {
    return (
        <>
            {/* Main Footer Container */}
            <footer className="main-footer">
                {/* Icon and Logo Container */}
                <div className='icon-logo-container'>
                    {/* Footer Icon */}
                    <img 
                        src={IconImage} 
                        alt='Icon' 
                        className='footer-icon' 
                    />
                    {/* Penthara Logo in Footer */}
                    <img 
                        src={PentharaLogoFooter} 
                        alt='Penthara Logo' 
                        className='penthara-logo-footer' 
                    />
                </div>
            </footer>
        </>
    )
}

export default Footer;