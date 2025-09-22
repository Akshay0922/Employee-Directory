// Import React StrictMode
import { StrictMode } from 'react';

// Import createRoot from react-dom/client
import { createRoot } from 'react-dom/client';

// Import main App component
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