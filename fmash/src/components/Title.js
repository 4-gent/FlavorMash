import React from 'react'
import './Title.css';

function Title({title}) {
    return (
      <div className="Title">
        <h1 style={{marginTop:'1vh', fontFamily: 'Signika', fontSize: '7vh' , color: '#228E9F', textAlign: 'center'}}>{title}</h1>
      </div>
    )
  }

export default Title