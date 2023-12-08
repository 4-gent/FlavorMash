import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// Color and style options for the button
const BNStyle = { 
    backgroundColor: '#228E9F', 
    fontFamily: 'Roboto', 
    fontSize: '18px', 
    color:'#FFFFFF',
    height: '7vh',
    width: '150px',
    marginTop: '3vh'
}

// Code for back and next buttons, first button is back button
function BackNextButton({previous, next}) {
    return (
        <div className="bottom-buttons d-flex justify-content-between p-5">
            <Link to={previous}>
                <Button 
                    display='flex'
                    as="input" 
                    type="button" 
                    value="BACK" 
                    size="lg" 
                    style={BNStyle} 
                    variant="online-*"
                    active
                    />{' '}
            </Link>

            <Link to={next}>
                <Button 
                    display='flex'
                    as="input" 
                    type="button" 
                    value="NEXT" 
                    size="lg" 
                    style={BNStyle} 
                    variant="online-*"
                    active
                />
                {' '}
            </Link>

        </div>
  );
}

export default BackNextButton;