import React from 'react';
import FMLogo from './images/FMLogo.png'

const NPfontStyle = {
    backgroundColor: '#228E9F', 
    color:'#FFECD1',
    fontFamily: 'Signika', 
    fontSize: '18px', 
    width: '360px',
    textAlign: 'center',
}
const FMfontStyle = {
    backgroundColor: '#228E9F', 
    color:'#FFECD1',
    fontFamily: 'Signika', 
    fontSize: '40px', 
    width: '360px',
    textAlign: 'center',
}

const columnStyle = { 
    flex: '1', 
    backgroundColor: '#228E9F', 
    padding: '20px', 
    color: '#FFECD1', 
    margin: '20px',
    borderRadius: "10px",
    width: '400px'
}

function ColumnInfo() {
    return(
        <div style={columnStyle}>
            <img src={FMLogo} alt="FLAVORMASH!" style={{ width: '100%', borderRadius: '40px' }} />
            <p style={FMfontStyle}>
                FLAVOR MASH!
            </p>
            <p style={NPfontStyle}>
                Ever struggle with picking a place to eat?
            </p>
            <p style={NPfontStyle}>
                Don't worry, FlavorMash can help you pick your next favorite dish!
            </p>
            <p style={NPfontStyle}>
                Enter which traits you care about the most and hit the next button when you're done! 
            </p>
        </div>
    )
}

export default ColumnInfo;