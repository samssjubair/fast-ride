import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 23.81, lng: 90.41 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 23.81, lng: 90.41 }} />}
  </GoogleMap>
))


export default function Map(){
  return (
    <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCXQwKzrgo0pbEwnjDaA_etrXXyONaaoAg"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `500px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}
     
  