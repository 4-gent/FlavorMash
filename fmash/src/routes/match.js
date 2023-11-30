import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';

function changeBackground(color) {
  document.body.style.background = color;
}

const Match = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    // Define the URL of your Spring Boot backend
    const apiUrl = 'http://localhost:8080/api/items'; // Replace with your actual URL

    // Make a GET request to fetch items from the backend
    axios.get(apiUrl)
      .then(response => {
        // Handle the successful response
        setItems(response.data);
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching items:', error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once on component mount

  window.addEventListener("load",function() { changeBackground('#FFF8EF') });
  
    return (
      
        <div>
            <nav>
                <Navigation />
            </nav>
            <h2>Item List</h2>
            <ul style={{color:'black'}}>
                {items.map(item => (
                    <li key={item.id}>{item.name}, {item.bio}, {item.address}, {item.dish}</li>
                ))}
            </ul>
            
        </div>
    );
};

export default Match;
