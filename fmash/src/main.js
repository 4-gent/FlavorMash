import React from "react";
import Navigation from './components/Navigation';

function changeBackground(color) {
    document.body.style.background = color;
}

export default function Main(){
    
    window.addEventListener("load",function() { changeBackground('#FFF8EF') });
    return(
        <div>
            {/* This is the file for the main page */}
            <nav>
                <Navigation />
            </nav>
            
        </div>
    )
}