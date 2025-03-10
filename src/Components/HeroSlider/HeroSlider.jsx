import React, { useState } from 'react'
import './HeroSlider.css'
import './WorkDescription.css'
import { Carousel } from "react-bootstrap";
const HeroSlider = () => {
  const[page, setPage]=useState(false);
    const slides = [
        {
          image: "https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?ga=GA1.1.1263613814.1738574859&semt=ais_hybrid"
         
        },
        {
          image: "https://static.vecteezy.com/system/resources/thumbnails/053/856/736/small/beautiful-blue-sky-with-a-few-red-flowers-in-the-foreground-the-flowers-are-scattered-throughout-the-scene-with-some-in-the-foreground-and-others-in-the-background-free-photo.jpg"
         
        },
        {
            image:"https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg"
        }
        
      ];

     const onsubmitHandler=(e)=>{
     setPage(true);

     }
     if(page){
      return(
        <div className='about-main-container'>
  <div className="about-container">
    <h2>MY WORK</h2>
    <p>
      As a passionate and dedicated web developer, I specialize in building modern, responsive, and high-performance applications. 
      From dynamic front-end experiences using React.js to scalable back-end solutions with Node.js, MySQL, and MongoDBs, 
      my work focuses on delivering seamless and efficient digital experiences.
    </p>
    <p>
      I have worked on school management systems, e-commerce platforms, blog applications. My expertise extends to Spring & Hibernate, ensuring robust and secure enterprise solutions.
    </p>
    <p>
      Whether it's crafting intuitive UI/UX designs, optimizing performance, or developing secure APIs, I am committed to pushing the boundaries 
      of web development. Let's build something amazing together!
    </p>
    <a href="#" className='btn btn-primary btn-lg mt-3' onClick={() => window.location.reload()}>
      Home
    </a>
  </div>
</div>


      )
     }else{
      console.log("not found");
     }
  return (
    <div>
      <div className="hero-main-container">
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero-slide d-flex align-items-center text-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <h1 className="display-4 fw-bold">Hi, I am Ritik Mahakalakr</h1>
                    <h3 className="fw-light"> Web Developer</h3>
                    <p className="lead">As a passionate Web Developer, I aim to create intuitive, dynamic, and user-centric websites and applications. My goal is to leverage my expertise in web technologies and software development to deliver innovative, high-quality solutions that enhance functionality and meet user needs. </p>
                    <button  onClick={onsubmitHandler} className="btn btn-primary btn-lg mt-3">
                      View My Work
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
      
    </div>
  )
}

export default HeroSlider
