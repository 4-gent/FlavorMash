import React from 'react'
import './Title.css';

function Title({title}) {
  return (
    <div className="Title">
      <h1 style={{ fontFamily: 'Signika', fontSize: '60px', color: '#228E9F', marginTop: '20px' }}>{title}</h1>
    </div>
  )
}

export default Title