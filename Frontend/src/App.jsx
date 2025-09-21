// Import Header component
import Header from './components/Header';

// Import Footer component
import Footer from './components/Footer';

// Import EmployeeDirectory page component
import EmployeeDirectory from './pages/EmployeeDirectory';

/**
 * App Component
 * Serves as the main entry point of the application.
 * Renders the Header, EmployeeDirectory page, and Footer.
 */
const App = () => {
    return (
        <>
            {/* Main Header */}
            <Header />

            {/* Employee Directory Section */}
            <EmployeeDirectory />

            {/* Main Footer */}
            <Footer />
        </>
    );
};

export default App;