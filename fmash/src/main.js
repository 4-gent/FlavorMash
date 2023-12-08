import React from "react";
import Navigation from './components/Navigation';
import FM from './components/images/FM.png'
import Title from "./components/Title";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function changeBackground(color) {
    document.body.style.background = color;
}

const BNStyle = {
    backgroundColor: '#FF7D00', 
    fontFamily: 'Roboto', 
    fontSize: '18px', 
    color:'#FFFFFF',
    height: '7vh',
    width: '20vw',
    marginTop: '3vh',
}

export default function Main(){
    
    window.addEventListener("load",function() { changeBackground('#FFF8EF') });
    return(
        <div style={{backgroundColor: '#FFF8EF', height: '100vh'}}>
            {/* This is the file for the main page */}
            <nav>
                <Navigation />
            </nav>
            <div style={{ display: 'grid', placeItems: 'center', height: '65vh'}}>
                <img src={FM} alt="FLAVORMASH!" style={{width: '25%', height: 'auto'}} />
            </div>
            <div style={{ marginTop:'-5vh' }}>
                <Title title="LET'S GET MASHING :)" fs='7vh'/>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-5vh'}}>
                <Link to='http://localhost:3000/preferences/'>
                    <Button 
                        display='flex'
                        as="input" 
                        type="button" 
                        value="FLAVOR MASH!" 
                        size="lg" 
                        style={BNStyle} 
                        variant="online-*"
                        active
                    />
                    {' '}
                </Link>
            </div>
        </div>
    )
}
