import React from "react";
import '../public/carouselDesc.css';
//Information below the slideshow in the MATCH screen that shows price and flavor
class CarouselDesc extends React.Component{
    render(){
        return(
            <div className="CarouselDesc">
                <div className="d-flex flex-row justify-content-around">
                    <div className="d-flex flex-column DescPrice">
                        <h1 className="priceTitle">Price</h1>
                        <p className="priceTag">{this.props.price}</p>
                    </div>
                    <div className="d-flex flex-column DescFlavor">
                        <h1 className="flavorTitle">Flavor</h1>
                        <p className="flavorTag">{this.props.flavor}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselDesc