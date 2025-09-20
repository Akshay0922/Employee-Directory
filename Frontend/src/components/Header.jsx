import PentharaLogo from '../assets/Penthara-Logo.svg';

import '../assets/styles.css';

const Header = () => {
    return (
        <>
            <header className="main-header">
                <div className='logo-container'>
                    <img src={PentharaLogo} alt='Penthara Logo' className='penthara-logo' />
                </div>
                <span className='header-content'>EMPLOYEE DIRECTORY</span>
            </header>
        </>
    )
}

export default Header;