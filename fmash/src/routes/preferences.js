import React from "react";
import Navigation from '../components/Navigation';
import BackNextButton from "../components/BackNextButton";
import Title from "../components/Title";
import '../components/Title.css';
import PrefMiniButton from "../components/PrefMiniButton";
import ColumnLeft from "../components/ColumnLeft";
import ColumnRight from "../components/ColumnRight";

function changeBackground(color) {
    document.body.style.background = color;
}
//Displays Preferences screen

function Preferences(){

    window.addEventListener("load",function() { changeBackground('#FFF8EF') });
    return(
        <div style={{backgroundColor: '#FFF8EF', height: '100vh'}}>
            {/* This is the file for the swiping */}
            <Navigation />
            <Title title='PREFERENCES'/>
            <div className="d-flex p-3" style={{marginLeft: '3vw', display: 'grid', gridTemplateColumns: 'auto auto auto', marginTop: '-4vh'}}>
                <div style={{marginRight: '5vh'}}>
                    <ColumnLeft />
                </div>
                <div style={{alignItems: 'center', marginRight: '6vw', height: '65vh'}}>
                    <div style={{display: 'flex', marginTop: '2vh', marginBottom: '3vh', fontSize: '1.75vh', justifyContent: 'center'}}>
                        <h1 style={{ 
                            fontFamily: 'Signika', 
                            fontSize: '3vh',
                            color: '#228E9F',
                            backgroundColor: '43FFFF',
                            height: '4vh',
                            width: '35vw',
                            textAlign: 'center'}}>
                            Rank how much you care about each trait! If you have no preference leave them at neutral!
                        </h1>
                    </div>
                    <div>
                        <PrefMiniButton prefType="FLAVOR" prefPage="http://localhost:3000/preferences/flavor" />
                        <PrefMiniButton prefType="CUISINE" prefPage="http://localhost:3000/preferences/cuisine" />
                        <PrefMiniButton prefType="PORTION SIZE"/>
                        <PrefMiniButton prefType="DISTANCE"/>
                        <PrefMiniButton prefType="PRICE"/>
                    </div>
                </div>
                <div>
                    <ColumnRight />
                </div>
            </div>
            <div style={{marginTop: '-8vh'}}>
                <BackNextButton previous="http://localhost:3000/" next="http://localhost:3000/preferences/flavor"/>
            </div>

        </div>
    )
}

export default Preferences;
