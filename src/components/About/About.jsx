import React from 'react';
import './About.css';

export default function About() {
  return (
    <>


<div className="container about-section py-5">
      <p className="about-title ">ABOUT ME</p>
      <h2 className="about-heading">WHO AM I?</h2>
      <p className="about-text">
        <strong>Hi, I'm Shrouk raslan .</strong> 
         I’m a Front-End Developer with a good understanding of modern web technologies.<br/> I have experience working with HTML, CSS, JavaScript, and frameworks like React (or Vue/Angular if you prefer).
      </p>
      <p className="about-text">
      I enjoy building responsive, user-friendly websites and I'm always looking to improve my skills and learn new tools in the front-end field.<br/> I'm passionate about creating clean and efficient code, and I love turning designs into real, 
      interactive websites.
  </p>

      <div className="row mt-4  ">
        <div className="col-sm-6 col-lg-3 mb-3 ">
          <div className="services ser1 ">
            <span className="icon2"><i className="fa fa-regular fa fa-lightbulb"></i></span>
            <h3>Graphic Design</h3>
           </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-3 ">
          <div className="services ser2 py-5">
            <span className="icon2"><i class="bi bi-globe-central-south-asia" style={{color: '#ec5453'}}></i></span>
            <h3>Web Design</h3>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-3">
          <div className="services ser3 py-5">
            <span className="icon2"><i className="fa-solid fa fa-database" style={{color: '#f9bf3f'}}></i></span>
            <h3>Software</h3>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-3">
          <div className="services ser4  py-5">
            <span className="icon2"><i class="fa-solid fa fa-mobile" style={{color: '#a84cb8'}}></i></span>
            <h3>Application</h3>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
