import IconImage from '../assets/images/Icon.png';
import PentharaLogoFooter from '../assets/images/Penthara-Logo.svg';

import '../assets/styles/footer.css';

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className='icon-logo-container'>
                    <img src={IconImage} alt='Icon' className='footer-icon' />
                    <img src={PentharaLogoFooter} alt='Penthara Logo' className='penthara-logo-footer' />
                </div>
            </footer>
        </>
    )
}

export default Footer;