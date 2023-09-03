import React from 'react';
import './App.css';
import { Logo } from './components/Logo'; // Import the Logo component as a named import
import DevProfile from "./images/DevProfile.svg";
import Danejw_Signature from "./images/Danejw_Signature.svg";

import Footer from './components/Footer';

import { ThemeProvider } from '@mui/material';
import theme from './theme';

import ChatInput from './components/ChatInput';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpeedDial from './components/SpeedDial';
import SwipeableTemporaryDrawer from './components/SwipeableDrawer';

import ImageMasonry from './components/Masonry';
import CustomizedTimeline from './components/Timeline';

function App() {
  return (
    <ThemeProvider theme={theme}>


      <SwipeableTemporaryDrawer/>
      

      <div className="App">

        <header className="App-header">

          <Logo src={DevProfile} alt="My Logo" className="logo-medium" />
          <Logo src={Danejw_Signature} alt="My Signature" className="logo-large" />

          <p>
            Welcome to my very first react app with typescript. I am so excited to learn this new technology!
          </p>

          <a
            className="App-link"
            href="https://danejw.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.Danejw.com
          </a>
          
          <ChatInput/>

          <ImageMasonry/>

          <CustomizedTimeline/>


        </header>

       
      </div>


      



      <Footer />

    </ThemeProvider>
  );
}

export default App;
