import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import '../public/match.css';
import resImage from '../public/images/resImage.jpg';

function changeBackground(color) {
  document.body.style.background = color;
}

const Match = ({ name }) => {
  const [matchedItem, setMatchedItem] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/api/items';

    axios
      .get(apiUrl, { params: { name } })
      .then((response) => {
        setMatchedItem(response.data[0]); // Assuming the first item is the desired one
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, [name]);

  window.addEventListener('load', function () {
    changeBackground('#FFF8EF');
  });

  if (!matchedItem) {
    return <div>Loading...</div>; // Handle loading state if needed
  }

  return (
    <div>
      <img
        className="d-block resPicture"
        src={resImage}
        alt="Restaurant"
      />
      <h3 className='prompt'>We think you should try....</h3>
      <h1 className="title">{matchedItem.name}</h1>
      <br />
      <br />
      <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-column align-items-center">
          <div className="menu">
            <a className="menuText" href={matchedItem.menu} style={{textDecoration:'none'}}>{matchedItem.menu}</a>
          </div>
          <br />
          <div className="d-flex flex-row justify-content-between">
            <div className="grid-item address">
              <p className='addressText'>{matchedItem.address}</p>
            </div>
            <br />
            <div className="grid-item price">
              <p className='priceText'>{matchedItem.price}</p>
            </div>
          </div>
          <br />
          <div className="bio d-flex flex-row">
            <p>{matchedItem.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
