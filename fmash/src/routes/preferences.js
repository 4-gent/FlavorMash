import React from "react";
import Navigation from '../components/Navigation';
import BackNextButton from "../components/BackNextButton";
import Title from "../components/Title";
import '../components/Title.css';
import PrefMiniButton from "../components/PrefMiniButton";
import ColumnInfo from "../components/ColumnInfo";

function changeBackground(color) {
    document.body.style.background = color;
}

function Preferences(){

    window.addEventListener("load",function() { changeBackground('#FFF8EF') });
    return(
        <div>
            {/* This is the file for the swiping */}
            <Navigation />
            <Title title='PREFERENCES' />
            <div className="d-flex p-3" style={{marginLeft: '50px', display: 'grid', gridTemplateColumns: '1fr auto 4fr', marginTop: '-70px'}}>
                <div>
                    <ColumnInfo />
                </div>
                <div style={{marginTop: '90px', marginLeft: '60px'}}>
                    <PrefMiniButton prefType="FLAVOR" prefPage="http://localhost:3000/preferences/flavor" />
                    <PrefMiniButton prefType="CUISINE" prefPage="http://localhost:3000/preferences/cuisine" />
                    <PrefMiniButton prefType="PORTION SIZE" prefPage="http://localhost:3000/preferences/portion-size" />
                    <PrefMiniButton prefType="DISTANCE" prefPage="http://localhost:3000/preferences/distance" />
                    <PrefMiniButton prefType="PRICE" prefPage="http://localhost:3000/preferences/price" />
                </div>
                </div>
            <div style={{marginTop: '-45px'}}>
                <BackNextButton previous="http://localhost:3000/" next="http://localhost:3000/preferences/flavor"/>
            </div>
            
        </div>
    )
}

export default Preferences;
