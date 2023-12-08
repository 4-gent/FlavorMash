import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Title from "../components/Title";
import FM from '../components/images/FM.png'
import BackNextButton from "../components/BackNextButton";
import YesNoButton from '../components/YesNoButton';

import Flavor1 from '../components/images/flavors/f5.png'
import Flavor2 from '../components/images/flavors/f6.png'
import Flavor3 from '../components/images/flavors/f7.png'
import Flavor4 from '../components/images/flavors/f8.png'
import Flavor5 from '../components/images/flavors/f9.png'
import Flavor6 from '../components/images/flavors/f10.png'

function changeBackground(color) {
    document.body.style.background = color;
}

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', 
    gridTemplateRows: 'repeat(6, 1fr)', 
    gap: '1.5vw 1vw', 
    marginLeft: '15vh',
    marginRight: '15vh',
    marginTop: '-1.5vh',
};

const Fstyle = {
    padding: '2vh',
    borderRadius: '1vh',
    backgroundColor: '#FF7D00',
    fontFamily: 'Signika', 
    color:'#FFECD1',
    fontSize: '2vh', 
    flexDirection: 'column',
    display: 'flex',
    height: '7vh',
};

function Cuisine(){

    window.addEventListener("load",function() { changeBackground('#FFF8EF') });
    return(
        <div style={{backgroundColor: '#FFF8EF', height: '100vh'}}>
            <nav>
                <Navigation />
            </nav>
            
            <Title title='FLAVOR'/>
            
            <div>
                <h1 style={{marginTop:'-5vh', marginBottom:'4vh', fontFamily: 'Signika', fontSize: '4vh' , color: '#228E9F', textAlign: 'center'}}>What food genre are you craving?</h1>
            </div>

            <div style={gridContainerStyle}> 
                <div style={Fstyle}>MEXICAN
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>FAST FOOD
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>SANDWICHES
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>ASIAN FUSION
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>BABEQUE
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>DIM SUM
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>ICE CREAM
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>SUSHI
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>VEGETARIAN
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>VEGAN
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>TAIWANESE
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>VIETNAMESE
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>POKE
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>KOREAN
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>CHINESE
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>ITALIAN
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>STEAKHOUSE
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>INDIAN
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>RAMEN
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>BAKERY
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>DESSERT
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>BURGER
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>MEDITERRANEAN
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>HALAL
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>AMERICAN
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>SEAFOOD
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>THAI
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>GREEK
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>HOT POT
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>FRENCH
                    <div style={{marginLeft: '10vw', marginTop: '-6.5vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                


                
            </div>
            <div style={{marginTop: '-3vh'}}>
                <BackNextButton previous='http://localhost:3000/preferences/flavor' next='http://localhost:3000/swipes'/>
            </div>
            
        </div>
    )
}

export default Cuisine;