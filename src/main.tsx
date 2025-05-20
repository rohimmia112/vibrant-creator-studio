
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure the DOM is fully loaded before mounting the React application
document.addEventListener('DOMContentLoaded', () => {
  // Find the root element
  const rootElement = document.getElementById("root");
  
  // Make sure it exists before mounting
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  } else {
    console.error("Root element not found. Make sure there's a div with id 'root' in your index.html");
  }
});

