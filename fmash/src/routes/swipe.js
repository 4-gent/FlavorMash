import React from "react";
import SwipeCarousel from '../components/carousel';
import Navigation from '../components/Navigation';

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
            <SwipeCarousel />
            
        </div>
    )
}

export default Swipe;
