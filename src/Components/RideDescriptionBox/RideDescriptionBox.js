import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

const RideDescriptionBox = (props) => {
    const {rideType,fare, maxPeople,image} =props.ride;
    return (
        <div style={{padding:'10px',margin: '10px 0',borderRadius: '10px',display: 'flex', justifyContent: 'space-between',backgroundColor: 'white'}}>
            <img style={{width: '50px'}} src={image} alt=""/>
            <p>{rideType}</p>
            <p><FontAwesomeIcon icon={faUserFriends} /> {maxPeople}</p>
            <p>${fare}</p>
        </div>
    );
};

export default RideDescriptionBox;