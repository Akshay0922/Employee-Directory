// Import React StrictMode for highlighting potential problems in the application
import { StrictMode } from 'react';

// Import createRoot from react-dom/client to enable React 18 root API
import { createRoot } from 'react-dom/client';

// Import the main App component
import App from './App.jsx';

/**
 * Initialize and render the React application
 * The App component is wrapped in StrictMode for highlighting potential issues
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Main App Component */}
    <App />
  </StrictMode>
);