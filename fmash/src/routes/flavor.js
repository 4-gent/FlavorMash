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
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gridTemplateRows: 'repeat(2, 1fr)', 
    gap: '5vh 15vh', 
    marginLeft: '15vh',
    marginRight: '15vh',
    marginTop: '-1.5vh',
};

const Fstyle = {
    padding: '2vh',
    textAlign: 'center',
    borderRadius: '1vh',
    backgroundColor: '#FF7D00',
    fontFamily: 'Signika', 
    color:'#FFECD1',
    fontSize: '4vh', 
    flexDirection: 'column',
    display: 'flex',
    placeItems: 'center',
    height: '26vh'
};

function Flavor(){

    window.addEventListener("load",function() { changeBackground('#FFF8EF') });
    return(
        <div>
            <nav>
                <Navigation />
            </nav>
            
            <Title title='FLAVOR'/>
            
            <div>
                <h1 style={{marginTop:'-5vh', marginBottom:'4vh', fontFamily: 'Signika', fontSize: '4vh' , color: '#228E9F', textAlign: 'center'}}>What flavors are you craving?</h1>
            </div>

            <div style={gridContainerStyle}> 
                <div style={Fstyle}>SAVORY
                    <img src={Flavor1} alt="FLAVORMASH!" style={{width: '40%', height: 'auto'}} />
                    <div style={{marginLeft: '12vw', marginTop: '-7vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>

                <div style={Fstyle}>SALTY
                    <img src={Flavor2} alt="FLAVORMASH!" style={{width: '40%', height: 'auto'}} />
                    <div style={{marginLeft: '13vw', marginTop: '-7vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>

                <div style={Fstyle}>SWEET
                    <img src={Flavor3} alt="FLAVORMASH!" style={{width: '40%', height: 'auto'}} />
                    <div style={{marginLeft: '13vw', marginTop: '-7vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>SOUR
                    <img src={Flavor4} alt="FLAVORMASH!" style={{width: '40%', height: 'auto'}} />
                    <div style={{marginLeft: '13vw', marginTop: '-7vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>SPICY
                    <img src={Flavor5} alt="FLAVORMASH!" style={{width: '40%', height: 'auto'}} />
                    <div style={{marginLeft: '13vw', marginTop: '-7vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
                <div style={Fstyle}>UMAMI
                    <img src={Flavor6} alt="FLAVORMASH!" style={{width: '40%', height: 'auto'}} />
                    <div style={{marginLeft: '13vw', marginTop: '-7vh',height: '2vh', width: '2vh'}}>
                        <YesNoButton/>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '-3vh'}}>
                <BackNextButton previous='http://localhost:3000/preferences/' next='http://localhost:3000/preferences/cuisine'/>
            </div>
            
        </div>
    )
}

export default Flavor;