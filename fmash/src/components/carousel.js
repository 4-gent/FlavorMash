import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

class SwipeCarousel extends React.Component {
    handleCarouselSelect = (selectedIndex, e) =>{
        if(selectedIndex === 2)
            window.location.href = 'localhost:3000/match'
    }
    
    render() {
        return (
            <Carousel interval={null} onSelect={this.handleCarouselSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First Image</h3>
                        <p>Some description for the first image.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second Image</h3>
                        <p>Some description for the second image.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third Image</h3>
                        <p>Some description for the third image.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default SwipeCarousel;
