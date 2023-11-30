import React from "react";
import SwipeCarousel from '../components/carousel';
import Navigation from '../components/Navigation';
import ham from '../public/images/ham.jpg';
import marg from '../public/images/marg.jpg';
import chick from '../public/images/chick.jpg';
import pork from '../public/images/pork.jpg';
import fett from '../public/images/fett.jpg';


function changeBackground(color) {
    document.body.style.background = color;
}

function Swipe(){

    window.addEventListener("load",function() { changeBackground('#FFF8EF') });
    return(
        <div>
            {/* This is the file for the swiping */}
            <nav>
                <Navigation />
            </nav>
            <SwipeCarousel 
                imgOne={ham} 
                imgTwo={marg} 
                imgThree={chick} 
                imgFour={pork} 
                imgFive={fett} 

                nameOne={'Ham and Cheese Croquette'}
                nameTwo={'Margherita Pizza'}
                nameThree={'Chicken Kalguksu'}
                nameFour={'Pork Chop'}
                nameFive={'Fettucine'}
            />
        </div>
    )
}

export default Swipe;
