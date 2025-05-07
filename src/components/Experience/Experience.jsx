import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <div>
      
    <div className="container py-5 my-5">
      <p className="text-uppercase text-muted small">Experience</p>
      <h2 className="fw-bold mb-5">Work Experience</h2>

      <div className="position-relative">
        <div className="timeline-line"></div>
       
        <div className="d-flex mb-5 timeline-item">
          <div className="timeline-icon bg-primary text-white">
            <i className="bi bi-pen-fill"></i>
          </div>
          <div className="ms-4 p-4 bg-light rounded shadow-sm w-100">
            <h5>Web Designer <span className="text-muted fs-6">2020-2022</span></h5>
            <p className="text-muted">
I started my journey in the tech field as a Web Designer, where I gained experience in creating modern and user-friendly website layouts using tools like Figma and Adobe XD. I learned how to focus on visual design, usability, 
and creating designs that match user needs and business goals.</p>
          </div>
        </div>

   
        <div className="d-flex mb-5 timeline-item">
          <div className="timeline-icon bg-danger text-white">
            <i className="bi bi-pen-fill"></i>
          </div>
          <div className="ms-4 p-4 bg-light rounded shadow-sm w-100">
            <h5>Front End Developer <span className="text-muted fs-6">2022-2025</span></h5>
            <p className="text-muted">
Later, I shifted my focus to Front-End Development, where I now have solid hands-on experience in HTML, CSS, JavaScript, and frameworks like React. I enjoy building responsive and interactive web applications, and I pay attention to clean code, accessibility, and performance.</p>
          </div>
        </div>
        <div className="d-flex mb-5 timeline-item">
          <div className="timeline-icon bg-warning text-white">
            <i className="bi bi-pen-fill"></i>
          </div>
          <div className="ms-4 p-4 bg-light rounded shadow-sm w-100">
            <h5>Full Stack Develober  <span className="text-muted fs-6">2022-2025</span></h5>
            <p className="text-muted">
Currently, I’m expanding my skills by studying Full-Stack Development. I’m taking courses in back-end technologies like Node.js, Express, MongoDB, and working to understand how front-end and back-end connect together. I’m very motivated to become a full-stack developer and build complete web applications from start to finish.</p>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}
