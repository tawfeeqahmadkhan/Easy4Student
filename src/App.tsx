import React from 'react';
import { Outlet } from 'react-router-dom'; // For handling dynamic page rendering
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/Shared/ScrollButton'; // Make sure this exists in your components

function App() {
  return (
    <div className="scroll-smooth overflow-y-auto overflow-x-hidden">
      {/* Header and Footer are your layout components */}
      <Header />
      
      {/* This is where the dynamic page content will be rendered */}
      <Outlet />
      
      <Footer />

      {/* Scroll button */}
      <ScrollButton />
    </div>
  );
}

export default App;
