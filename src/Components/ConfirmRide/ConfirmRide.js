import React, { useContext } from 'react';
import { DestinationContext } from '../Ride/Ride';
import './ConfirmRide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown  } from '@fortawesome/free-solid-svg-icons'
import fakeData from '../../FakeData/FakeData';
import RideDescriptionBox from '../RideDescriptionBox/RideDescriptionBox';

const ConfirmRide = (props) => {
    const allData= fakeData;
    const {pickFrom,destination} = props.address;
     
    return (
        <div style={{backgroundColor: '#EFEFEF'}} className="confirm-ride">
            <div style={{backgroundColor: '#FF6E40',color: 'white',padding: '10px',borderRadius: '10px'}}>
            <h2>{pickFrom}</h2>
            <FontAwesomeIcon icon={faArrowDown}/>
            <h2>{destination}</h2>
            </div>
            <div>
                <RideDescriptionBox ride={props.ride}></RideDescriptionBox>
            </div>
            <div>
                <RideDescriptionBox ride={props.ride}></RideDescriptionBox>
            </div>
            <div>
                <RideDescriptionBox ride={props.ride}></RideDescriptionBox>
            </div>
        </div>
    );
};

export default ConfirmRide;