import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const BNStyle = {
    backgroundColor: '#228E9F', 
    fontFamily: 'Roboto', 
    fontSize: '18px', 
    color:'#FFFFFF',
    height: '60px',
    width: '150px'
}

const NPfontStyle = {
    backgroundColor: '#FF7D00', 
    fontFamily: 'Roboto', 
    fontSize: '18px', 
    color:'#FFFFFF',
    height: '60px',
    width: '250px'
}

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
            
            {/* I need to make preferences click and unclick */}
            <Button 
                href="/" 
                as="input" 
                type="button" 
                value="No Preference" 
                size="lg" 
                style={NPfontStyle} 
                variant="online-*"
                active>
            </Button>{' '}

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