import React from 'react';
// import {GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={14}
//     defaultCenter={{ lat: 23.81, lng: 90.41 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: 23.81, lng: 90.41 }} />}
//   </GoogleMap>
// ))


// export default function Map(){
//   return (
//     <MyMapComponent
//       isMarkerShown
//       googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD2gDapL6PDIX7hiuCHGjgKaTYYrGJUpIM`}
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: `500px` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//     />
//   )
// }
     
// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 23.81,
//   lng: 90.41
// };

// function Map() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyCXQwKzrgo0pbEwnjDaA_etrXXyONaaoAg"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={14}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default Map;

// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: -1.2884,
//             lng: 36.8233
//           }
//         }
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyD2gDapL6PDIX7hiuCHGjgKaTYYrGJUpIM'
// })(MapContainer);

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../App.css'


const Map=()=>{
  return (
  <MapContainer center={[23.8103,90.4125]} zoom={14}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
  );
}

export default Map;