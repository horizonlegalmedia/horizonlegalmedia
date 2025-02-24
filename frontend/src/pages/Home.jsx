import React from 'react';
import Services from '../components/home/Services';
import Articles from '../components/home/Articles';
import Main from '../components/home/Main';
import OurClients from '../components/home/OurClients';

const Home = () => {
 
  return (
    <>
    {/* Main Section */}
      <Main />

    {/* Services Section */}
      <Services />

    {/* Articles Section */}
      <Articles />

    {/* Our Clients Section */}
    <OurClients />
    
    </>
  );
};

export default Home;