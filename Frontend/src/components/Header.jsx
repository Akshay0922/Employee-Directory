// Image Imports
import PentharaLogo from '../assets/images/Penthara-Logo.svg';

// Component-specific CSS
import '../assets/styles/header.css';

/**
 * Header Component
 * 
 * Renders the main header of the application.
 * Includes the Penthara logo on the left and the page title.
 * Fully responsive and styled using header.css.
 */
const Header = () => {
    return (
        <>
            {/* Main Header Container */}
            <header className="main-header">
                {/* Logo Container */}
                <div className='logo-container'>
                    {/* Penthara Logo */}
                    <img 
                        src={PentharaLogo} 
                        alt='Penthara Logo' 
                        className='penthara-logo' 
                    />
                </div>

                {/* Header Title */}
                <span className='header-content'>EMPLOYEE DIRECTORY</span>
            </header>
        </>
    )
}

export default Header;