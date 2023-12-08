import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/carousel.css';
import CarouselDesc from "./carouselDesc";
import Match from "../routes/match";

class SwipeCarousel extends Component {
    state = {
        match: null,
        selectedItem: null,
        resName: '',
        bio: '',
        address: '',
        price: '',
        menu: '',
        redirect: false,
    }

    pictureNames = ['republique', `l'antica pizzeria da michele`, 'hangari kalguksu', 'granville', 'running goose'];

    handleCarouselItemClick = (index) => {
        const restaurantName = this.pictureNames[index];
        this.setState({ selectedItem: index, resName: restaurantName });
    }

    handleMashButtonClick = () => {
        const { selectedItem } = this.state;
        const selectedName = this.pictureNames[selectedItem];

        console.log('Selected Restaurant Name:', selectedName);

        axios.get(`http://localhost:8080/api/items?name=${selectedName}`)
            .then(response => {
                console.log('API Response:', response.data);

                const selectedItemData = response.data;
                const { name, bio, address, price, menu } = selectedItemData;

                this.setState({ match: selectedItemData, resName: name, bio, address, price, menu, redirect: true });
            })
            .catch(error => {
                console.error('API Error:', error);
            });
    }

    render() {
        const { imgOne, imgTwo, imgThree, imgFour, imgFive } = this.props;
        const { redirect, selectedItem } = this.state;

        if (redirect) {
            return <Match name={this.state.resName} address={this.state.address} price={this.state.price} bio={this.state.bio} menu={this.state.menu} />;
        }

        return (
            <div>
                <p style={{ backgroundColor: '#FFECD1', textAlign: 'center', marginBottom: '0', paddingTop: '40px', fontSize: '40px', fontWeight: 'bold', color: '#FF7D00' }}>Let's Get....</p>
                <h1 style={{ backgroundColor: '#FFECD1', textAlign: 'center', marginBottom: '0', paddingTop: '10px', paddingBottom: '25px', fontSize: '80px', fontWeight: 'bold', color: '#228E9F' }}>MASHING!</h1>
                <div className="carouselPage">
                    <Carousel interval={null} indicators={false} className="carouselContainer" onSelect={(selectedIndex) => this.handleCarouselItemClick(selectedIndex)} prevIcon={<span className="custom-prev-icon">Next</span>} nextIcon={<span className="custom-next-icon" onClick={this.handleMashButtonClick}><a style={{ textDecoration: 'none', color: '#FFECD1' }}>Mash!</a></span>}>
                        {[imgOne, imgTwo, imgThree, imgFour, imgFive].map((img, index) => (
                            <Carousel.Item key={index} onClick={() => this.handleCarouselItemClick(index)}>
                                <img
                                    className="d-block carouselPic"
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                />
                                <br />
                                <h3 className="resName">{this.props[`name${index + 1}`]}</h3>
                                <br />
                                <CarouselDesc price={'$$'} flavor={'Savory'} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default SwipeCarousel;
