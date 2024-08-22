import React from 'react';
import Header from './components/common/Header';
import Services from './components/services/Services';
import Artists from './components/artists/Artists';
import MapContainer from './components/location/Map';
import Footer from './components/common/Footer';
import NavigationBar from './components/common/NavigationBar';
import LandingPage from './components/common/LandingPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css"


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center flex-grow w-full max-w-screen-lg px-4 md:pl-10">
          <NavigationBar />


          <Routes>
            <Route path="/" element={<LandingPage />} /> {/* Home page */}
            <Route path="/services" element={<Services />} />  {/* Services page */}
            <Route path="/artists" element={<Artists />} />    {/* Artists page */}
            <Route path="/location" element={<MapContainer />} />  {/* Portfolio page */}

            {/* Other routes as needed */}
          </Routes>


        {/* Footer Component */}
        <Footer />
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
