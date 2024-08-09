import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Cards from './Cards';
import Footer from './Footer';
import SubscriptionPage from './SubscriptionPage';

const Home = ({ isLoggedIn, onLogout }) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Hero />
      <Cards />
      <SubscriptionPage/>
      <Footer />
    </>
  );
};

export default Home;
