import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import styles
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import routing components
import App from './App';
import Home from './pages/Main';   // Assuming Main.tsx is your home page
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import './styles/globals.css';  // Import additional global styles
import reportWebVitals from './reportWebVitals';  // This must be imported before usage

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Define routes for your pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Now this import is at the top
reportWebVitals();
