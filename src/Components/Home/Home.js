import { Box, Grid } from '@material-ui/core';
import React from 'react';
import fakeData from '../../FakeData/FakeData';
import RideCard from '../RideCard/RideCard';
import './Home.css'

const Home = () => {
    const allRides= fakeData;
    return (
        <Box width="75%" style={{margin: '0 auto',marginTop: '20vh'}}>
            <Grid
            spacing="3"
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                {
                    allRides.map(ride=> <RideCard ride={ride}></RideCard> )
                }
                
            </Grid>
        </Box>
    );
};

export default Home;