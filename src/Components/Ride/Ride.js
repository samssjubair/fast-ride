import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import fakeData from '../../FakeData/FakeData';
import './Ride.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import Map from '../Map/Map';
import ConfirmRide from '../ConfirmRide/ConfirmRide';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const Ride = () => {
    const classes = useStyles();
    const {type}= useParams();
    const allRide= fakeData;
    const ride= allRide.find(rd=> rd.rideType===type);
    const [address,setAddress]= useState({})

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      setAddress(data);
    };
    return (
          <Grid
          container
          
          direction="row"
          justify="space-around"
          
          alignItems="center"
        >
        {/* // <div style={{display:'flex',justifyContent: 'space-between'}}> */}
          {
            Boolean(address.destination) || 
            <Grid item xs={12} sm={4} >
              <form className="destination-form" onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <label for="pickFrom">Pick From</label> <br/>
              <input name="pickFrom" placeholder="e.g. Mirpur" ref={register({ required: true })} /> <br/>
              {errors.pickFrom && <span>This field is required</span>}<br/>
              <br/>

              <label for="destination">Destination</label> <br/>
              <input name="destination" placeholder="e.g. Uttara" ref={register({ required: true })} /> <br/>
              {errors.destination && <span>This field is required</span>}<br/>
              
              <br/> 
              <TextField
              id="datetime-local"
              label="Pick up at"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
              shrink: true,
              }}
              /> <br/>  <br/> 
              
              <Button type="submit" variant="contained" color="secondary">
              Search
              </Button>

              </form>
              
          </Grid>
          }
          {
            address.destination && 
            <Grid item xs={12} sm={4}><ConfirmRide ride={ride} address={address}></ConfirmRide></Grid>
          }
          <Grid item xs={12} sm={8} >
            <Map></Map>
          </Grid>
        {/* </div> */}
        </Grid>
    );
};

export default Ride;