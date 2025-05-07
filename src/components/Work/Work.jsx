import React from 'react';
import  { useState } from 'react';
import './Work.css';

export default function Work() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      
    <div className="container py-5">
      <h2 className="text-center mb-5">My Work</h2>
      <div className="row g-4">

        
        <div className="col-md-6">
          <div className="project-card position-relative">
            <img
              src="/assets/photo1.jpeg"
              alt="Project 1"
              className="img-fluid rounded"
            />
            <div className="overlay d-flex justify-content-center align-items-center">
              <i className="bi bi-hand-thumbs-up-fill fs-3 text-white me-3"></i>
              <i className="bi bi-heart-fill fs-3 text-white"></i>
            </div>
          </div>
        </div>

       
        <div className="col-md-6">
          <div className="project-card position-relative">
            <img
              src="/assets/photo2.webp"
              alt="Project 2"
              className="img-fluid rounded"
            />
            <div className="overlay d-flex justify-content-center align-items-center">
              <i className="bi bi-hand-thumbs-up-fill fs-3 text-white me-3"></i>
              <i className="bi bi-heart-fill fs-3 text-white"></i>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="project-card position-relative">
            <img
              src="/assets/photo3.jpeg"
              alt="Project 2"
              className="img-fluid rounded"
            />
            <div className="overlay d-flex justify-content-center align-items-center">
              <i className="bi bi-hand-thumbs-up-fill fs-3 text-white me-3"></i>
              <i className="bi bi-heart-fill fs-3 text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="project-card position-relative">
            <img
              src="/assets/pexels-photo-6.webp"
              alt="Project 2"
              className="img-fluid rounded"
            />
            <div className="overlay d-flex justify-content-center align-items-center">
              <i className="bi bi-hand-thumbs-up-fill fs-3 text-white me-3"></i>
              <i className="bi bi-heart-fill fs-3 text-white"></i>
            </div>
          </div>
        </div>
        
    
        {showMore && (
          <>
            <div className="col-md-6">
          <div className="project-card position-relative">
            <img
              src="/assets/photo2.webp"
              alt="Project 2"
              className="img-fluid rounded"
            />
            <div className="overlay d-flex justify-content-center align-items-center">
              <i className="bi bi-hand-thumbs-up-fill fs-3 text-white me-3"></i>
              <i className="bi bi-heart-fill fs-3 text-white"></i>
            </div>
          </div>
        </div>

            <div className="col-md-6">
              <div className="project-card position-relative">
                <img
                  src="/assets/pexels-photo5.webp"
                  alt="Project 4"
                  className="img-fluid rounded"
                />
                <div className="overlay d-flex justify-content-center align-items-center">
                  <i className="bi bi-hand-thumbs-up-fill fs-3 text-white me-3"></i>
                  <i className="bi bi-heart-fill fs-3 text-white"></i>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
      </div>
   
  )
}
