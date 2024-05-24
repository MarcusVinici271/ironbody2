import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import Carousel  from 'react-bootstrap/Carousel';
import image1 from '../image/image1.png';
import image2 from '../image/image2.png'; 
import image3 from '../image/image3.png';
import image4 from '../image/image4.png';
// import teste5 from '../image/image5.png';

export default function CarouselFadeExample() {
    return (
      <div className='Slider'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="Image One"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={image2}
            alt="Image One"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Image One"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image4}
            alt="Image One"
          />
          <Carousel.Caption>
            
          {/* </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={teste5}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
  }
   
