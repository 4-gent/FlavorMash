import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import '../public/match.css';
import resImage from '../public/images/resImage.jpg';

const Match = ({ name, address, price, bio, menu }) => {
  return (
    <div style={{ backgroundColor: '#FFF8EF', height: '100vh' }}>
      <img className="d-block resPicture" src={resImage} alt="Restaurant" />
      <h3 className="prompt">We think you should try....</h3>
      <h1 className="title">{name}</h1>
      <br />
      <br />
      <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-column align-items-center">
          <div className="menu">
            <a
              className="menuText"
              href={menu}
              style={{ textDecoration: 'none' }}
            >
              {menu}
            </a>
          </div>
          <br />
          <div className="d-flex flex-row justify-content-between">
            <div className="grid-item address">
              <p className="addressText">{address}</p>
            </div>
            <br />
            <div className="grid-item price">
              <p className="priceText">{price}</p>
            </div>
          </div>
          <br />
          <div className="bio d-flex flex-row">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
