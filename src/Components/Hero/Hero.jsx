import React from 'react'

import './Hero.css'
const Hero = () => {
  return (
    <div>
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
             
            <div className="carousel-item active  img1" ></div>
            
            <div className="carousel-item img2 "></div>
            
            <div className="carousel-item  img3" ></div> 
        </div>
    </div>

    
    <div className="hero-content">
        <h1 className="display-4 fw-bold">Hi, I am Ritik Mahakalkar,<br/> a Web Developer</h1>
        <p className="lead">As a passionate Web Developer, I aim to create intuitive, dynamic, and user-centric websites and
 applications. My goal is to leverage my expertise in web technologies and software development to
 deliver innovative, high-quality solutions that enhance functionality and meet user needs. </p>
        <a href="#work" className="btn work btn-lg mt-3">View My Work</a>
    </div>
      
    </div>
  )
}

export default Hero
