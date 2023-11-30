import SubTitle from "../components/SubTitle";
import { Slider } from "@mui/material";
import { styled } from '@mui/material/styles';
import Wifi1BarIcon from '@mui/icons-material/Wifi1Bar';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

const PortionMarks = [
    {
      value: 1,
      label: 'Small',
    },
    {
      value: 2,
      label: 'Medium',
    },
    {
      value: 3,
      label: 'Large',
    },
];

const DistanceMarks = [
    {
      value: 0,
      label: '0 miles',
    },
    {
      value: 15,
      label: '15 miles',
    },
];

const PriceMarks = [
    {
        value: 1,
        label: '$',
    },
    {
        value: 2,
        label: '$$',
    },
    {
        value: 3,
        label: '$$$',
    },
    {
        value: 4,
        label: '$$$$',
    },
];
  

const PrettoSlider = styled(Slider)({
    color: '#FF7D00',
    height: 8,
    width: '14vw',
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

function ColumnRight() {
    return(
        <div>
            <div style={{
                        width: '24vw', 
                        marginLeft: '-3vw', 
                        display: 'flex', 
                        flexDirection: 'column'}}>
                <div style={{display: 'flex', flexDirection: 'column', marginBottom: '4vh', width: '24vw', backgroundColor: '#228E9F', height: '18vh', borderRadius: '1.5vh'}}>
                    
                    <div style={{height: '9vh', marginTop: '-.5vh'}}>
                        <SubTitle title="PORTION SIZE" fs='4vh'/>
                    </div>

                    <div style={{height: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <SubTitle title="How much food do you want to eat?" fs='2.5vh'/>
                    </div>

                    <div style={{height: '6vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-2vh'}}>
                        <Wifi1BarIcon style={{ color: "FFECD1", marginTop: '-3vh'}}/>
                        <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={2}
                        min={1}
                        max={3}
                        step={1}
                        marks={PortionMarks}
                        />
                        <SignalWifiStatusbar4BarIcon style={{ color: "FFECD1", marginTop: '-3vh'}}/>
                    </div>

                </div>

                <div style={{display: 'flex', flexDirection: 'column', marginBottom: '4vh', width: '24vw', backgroundColor: '#228E9F', height: '18vh', borderRadius: '1.5vh'}}>
                    
                    <div style={{height: '9vh', marginTop: '-1vh'}}>
                        <SubTitle title="DISTANCE" fs='4vh'/>
                    </div>
                    <div style={{height: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <SubTitle title="How far can you go in miles?" fs='2.5vh'/>
                    </div>
                    <div style={{height: '6vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-2vh'}}>
                        <ZoomInMapIcon style={{ color: "FFECD1", marginRight: '-.5vw', marginTop: '-3vh' }}/>
                        <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={3}
                        min={0}
                        max={15}
                        step={5}
                        marks={DistanceMarks}
                        />
                        <ZoomOutMapIcon style={{ color: "FFECD1", marginLeft: '-.5vw', marginTop: '-3vh' }}/>
                    </div>
                        
                </div>
                <div style={{display: 'flex', flexDirection: 'column', width: '24vw', backgroundColor: '#228E9F', height: '18vh', borderRadius: '1.5vh'}}>
                    
                    <div style={{height: '9vh', marginTop: '-1vh'}}>
                        <SubTitle title="PRICE" fs='4vh'/>
                    </div>
                    <div style={{height: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <SubTitle title="What is your price range?" fs='2.5vh'/>
                    </div>
                    <div style={{height: '6vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-2vh'}}>
                        <AttachMoneyIcon style={{ color: "FFECD1", marginRight: '-.5vw', marginTop: '-3vh' }}/>
                        <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={3}
                        min={1}
                        max={4}
                        step={1}
                        marks={PriceMarks}
                        />
                        <MoneyOffIcon style={{ color: "FFECD1", marginLeft: '-.5vw', marginTop: '-3vh' }}/>
                    </div>
                        
                        
                </div>
                
            </div>
        </div>
    )
}

export default ColumnRight;