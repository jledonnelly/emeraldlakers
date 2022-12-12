import React from 'react';
import './App.css';
import Header from 
"./Components/Header/Header";
import Navigation from 
"./Components/Navigation/Navigation";
import Main from 
"./Components/Main/Main";
import ImageSlider from 
"./Components/ImageSlider/ImageSlider";
import Footer from 
"./Components/Footer/Footer";
 import Services from 
 "./Components/Services/Services";
import Membership from 
"./Components/Membership/Membership";
import Videos from 
"./Components/Videos/videos"
import Sponsors from 
"./Components/Sponsors/Sponsors";


function App() {
  return (
    
    <div className="App">
      
      <Navigation />
      <Header />
      <Main />
      <Membership />
      <Services />
      <Videos />
      <ImageSlider />
      <Sponsors />
      <Footer />
    </div>
    
  );
};

export default App;