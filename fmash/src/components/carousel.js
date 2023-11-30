import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/carousel.css';
import CarouselDesc from "./carouselDesc";
import Match from "../routes/match";

class SwipeCarousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            match: null,
            selectedItem: null,
            resName: '',
            bio: '',
            address: '',
            price: '',
            menu: '',
            redirect: false,
        }
    }

    handleCarouselItemClick = (restaurantName) => {
        const selectedItem = this.props.pictures.indexOf(restaurantName);
        this.setState({ selectedItem, resName: restaurantName });
    }

    handleMashButtonClick = () => {
        const { selectedItem } = this.state;
        const pictureNames = ['republique', `l'antica pizzeria da michele`, 'hangari kalguksu', 'granville', 'running goose'];
        const selectedName = pictureNames[selectedItem];

        console.log('Selected Restaurant Name:', selectedName);

        axios.get(`http://localhost:8080/api/items?name=${selectedName}`)
            .then(response => {
                console.log(response.data);

                const selectedItemData = response.data;
                const { resName, bio, address, price, menu } = selectedItemData;

                this.setState({ match: selectedItemData, resName, bio, address, price, menu, redirect: true });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        const { imgOne, imgTwo, imgThree, imgFour, imgFive } = this.props
        const { nameOne, nameTwo, nameThree, nameFour, nameFive } = this.props
        const { match, resName, bio, address, menu, price, redirect } = this.state

        // If redirect is true, render the Match component
        if (redirect) {
            return (
                <Match name={resName} address={address} price={price} bio={bio} menu={menu} />
            );
        }
        // Otherwise, render the SwipeCarousel component
        return (
            <div>
                <p style={{backgroundColor:'#FFECD1', textAlign:'center', marginBottom:'0', paddingTop:'40px', fontSize:'40px', fontWeight:'bold', color:'#FF7D00'}}>Let's Get....</p>
                <h1 style={{backgroundColor:'#FFECD1', textAlign:'center', marginBottom:'0', paddingTop:'10px', paddingBottom:'25px', fontSize:'80px', fontWeight:'bold', color:'#228E9F'}}>MASHING!</h1>
                <div className="carouselPage">
                    <Carousel interval={null} indicators={false} className="carouselContainer" onSelect={(selectedIndex) => this.setState({ selectedItem: selectedIndex, resName: this.props[`name${selectedIndex + 1}`] })} prevIcon={<span className="custom-prev-icon">Next</span>} nextIcon={<span className="custom-next-icon" onClick={this.handleMashButtonClick}><a style={{textDecoration:'none', color:'#FFECD1'}}>Mash!</a></span>}>
                        <Carousel.Item onClick={() => this.handleCarouselItemClick('republique')}>
                            <img
                                className="d-block carouselPic"
                                src={imgOne}
                                alt="First slide"
                            />
                            <br />
                            <h3 className="resName">{nameOne}</h3>
                            <br />
                            <CarouselDesc price={'$$'} flavor={'Savory'} />
                        </Carousel.Item>
                        <Carousel.Item onClick={() => this.handleCarouselItemClick('antica')}>
                            <img
                                className="d-block carouselPic"
                                src={imgTwo}
                                alt="Second slide"
                            />
                            <br />
                            <h3 className="resName">{nameTwo}</h3>
                            <br />
                            <CarouselDesc price={'$$$'} flavor={'Savory'} />
                        </Carousel.Item>
                        <Carousel.Item onClick={() => this.handleCarouselItemClick('hangari')}>
                            <img
                                className="d-block carouselPic"
                                src={imgThree}
                                alt="Third slide"
                            />
                            <br />
                            <h3 className="resName">{nameThree}</h3>
                            <br />
                            <CarouselDesc price={'$$'} flavor={'Salty'} />
                        </Carousel.Item>
                        <Carousel.Item onClick={() => this.handleCarouselItemClick('granville')}>
                            <img
                                className="d-block carouselPic"
                                src={imgFour}
                                alt="Fourth slide"
                            />
                            <br />
                            <h3 className="resName">{nameFour}</h3>
                            <br />
                            <CarouselDesc price={'$$'} flavor={'Salty'} />
                        </Carousel.Item>
                        <Carousel.Item onClick={() => this.handleCarouselItemClick('running')}>
                            <img
                                className="d-block carouselPic"
                                src={imgFive}
                                alt="Fifth slide"
                            />
                            <br />
                            <h3 className="resName">{nameFive}</h3>
                            <br />
                            <CarouselDesc price={'$$'} flavor={'Savory'} />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default SwipeCarousel;
