import React, { useState } from 'react';

const YesNoButton = () => {
  const [buttonText, setButtonText] = useState('NO');
  const [buttonColor, setButtonColor] = useState('#81B8C1');

  const handleButtonClick = () => {
    // Toggle between "Yes" and "No" on each click
    setButtonText((prevText) => (prevText === 'NO' ? 'YES' : 'NO'));
    setButtonColor((prevColor) => (prevColor === '#81B8C1' ? '#228E9F' : '#81B8C1'));
  };

  const ButtonStyle = {
    backgroundColor: buttonColor,
    fontFamily: 'Roboto', 
    fontSize: '18px', 
    color:'#FFFFFF',
    height: '4vh',
    width: '8vh',
    marginTop: '3vh',
    borderRadius: '4vh',
    outline: 'none',
}

  return (
    <button style={ButtonStyle} onClick={handleButtonClick}>
        {buttonText}
    </button>
  );
};

export default YesNoButton;