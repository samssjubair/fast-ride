import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../FakeData/FakeData';

const Ride = () => {
    const {type}= useParams();
    const allRide= fakeData;
    const ride= allRide.find(rd=> rd.rideType===type);
    console.log(ride);
    return (
        <div>
            
        </div>
    );
};

export default Ride;