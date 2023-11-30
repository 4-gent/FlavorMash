import React from 'react';
import FMLogo from './images/FMLogo.png'

const fontStyle1 = {
    backgroundColor: '#228E9F', 
    color:'#FFECD1',
    fontFamily: 'Signika', 
    fontSize: '3vh', 
    width: '18vw',
    textAlign: 'center',
}

const FMfontStyle = {
    backgroundColor: '#228E9F', 
    color:'#FFECD1',
    fontFamily: 'Signika', 
    fontSize: '5vh', 
    width: '22vw',
    height: '5vh',
    textAlign: 'center',
}

const columnStyle = { 
    flex: '1', 
    backgroundColor: '#228E9F', 
    color: '#FFECD1', 
    borderRadius: "1.5vh",
    width: '24vw',
    height: '63vh',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

}

function ColumnLeft() {
    return(
        <div style={columnStyle}>
            <img src={FMLogo} alt="FLAVORMASH!" style={{ display: 'flex', width: '55%', borderRadius: '40px', alignItems: 'center' }} />
            <p style={FMfontStyle}>
                FLAVOR MASH!
            </p>
            <p style={fontStyle1}>
                Do you ever struggle with picking a place to eat?
            </p>
            <p style={fontStyle1}>
                Don't worry, FlavorMash can help you pick your next favorite dish!
            </p>
        </div>
    )
}

export default ColumnLeft;