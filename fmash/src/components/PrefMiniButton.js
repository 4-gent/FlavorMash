import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NPfontStyle = {
    backgroundColor: '#FF7D00', 
    color:'#FFFFFF',
    fontFamily: 'Roboto', 
    fontSize: '2vh', 
    height: '7vh',
    width: '12vw', 
    marginRight: '3vw',
}

const PrettoSlider = styled(Slider)({
    color: '#FF7D00',
    height: 8,
    width: '15vw',
    marginLeft: '2vw',
    marginRight: '2vw',
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 10,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#FF7D00',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

function PrefMiniButton({prefType, prefPage}) {

    return(
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2vh'}}>
            <Link to={prefPage}>
                <Button 
                    style={NPfontStyle}
                    as="input" 
                    type="button" 
                    value={prefType} 
                    size="lg" 
                    variant="online-*"
                    active>
                </Button>
            </Link>
            <FavoriteBorderIcon style={{ color: "228E9F"}}/>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={3}
                min={1}
                max={5}
            />
            <FavoriteIcon style={{ color: "228E9F"}}/>
        </div>
    

    )
}

export default PrefMiniButton;