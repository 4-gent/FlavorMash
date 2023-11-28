import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

const NPfontStyle = {
    backgroundColor: '#FF7D00', 
    color:'#FFFFFF',
    fontFamily: 'Roboto', 
    fontSize: '18px', 
    height: '60px',
    width: '250px', 
    marginBottom: '50px',
}

function PrefMiniButton({prefType, prefPage}) {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return(
        <div>
            <Link to={prefPage}>
                <Button 
                    as="input" 
                    type="button" 
                    value={prefType} 
                    size="lg" 
                    style={NPfontStyle} 
                    variant="online-*"
                    active>
                </Button>{' '}
            </Link>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
            
        </div>
    )
}

export default PrefMiniButton;