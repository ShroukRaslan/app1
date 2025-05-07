import React from 'react'

export default function Home() {
  return (
    <>
  
  <>
      <div style={{ opacity: 1 }}>
        <div
          className="carousel slide carousel-fade"
          id="heroCarousel"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="heroSection slider1 vh-100 d-flex align-items-center">
                <div className="container text-center text-md-start">
                  <h1>
                    Hi! <br /> I'm Shrouk Raslan
                  </h1>
                  <p>
                    100% HTML5 Bootstrap templates Made <br />
                    By <a href="https://colorlib.com/">Colorlib.com</a>
                  </p>
                  <button type="button" className="btn btn-outline-dark mt-2">
                    DOWNLOAD CV <i className="fa fa-download"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="heroSection slider2 vh-100 d-flex align-items-center">
                <div className="container text-center text-md-start">
                  <h1>
                    I am <br /> a Front End Developer
                  </h1>
                  <p>
                    100% HTML5 Bootstrap templates Made <br />
                    By <a href="https://colorlib.com/">Colorlib.com</a>
                  </p>
                  <button type="button" className="btn btn-outline-dark mt-2">
                    VIEW PORTFOLIO <i className="fa fa-briefcase"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      
     </> 
  
    </>
  )
}
