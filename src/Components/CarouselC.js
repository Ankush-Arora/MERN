import React from 'react'
import '../Styles/style.css'
const CarouselC = () => {
  return (
    <div >

      <div id="carouselExampleInterval" className="carousel h-20  slide " data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id='carousel'>
          <div className="carousel-item active" data-bs-interval="2000"  style={{objectFit:"fill !important"}}>
            <img src={'images/logo5.png'} className="d-block w-100" alt="logo1" style={{filter:"brightness(40%)"}}   />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={'images/logo2.jpg'} className="d-block w-100" alt="logo2" style={{filter:"brightness(40%)"}} />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={'images/logo4.jpg'} className="d-block w-100" alt="logo3" style={{filter:"brightness(40%)"}}/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default CarouselC
