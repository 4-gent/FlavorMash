import React from 'react'
import './Title.css';

function Title({title, fs}) {
    return (
        <div className="Title">
            <h1 style={{
                marginTop:'1vh', 
                fontFamily: 'Signika', 
                fontSize: fs, 
                color: '#FFECD1', 
                textAlign: 'center'}}>
                {title}
            </h1>
        </div>
    )
  }

export default Title