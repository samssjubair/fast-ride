import { Button, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
    const linkStyle={
         textDecoration: 'none',
         color: 'black'
    }
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
  return (
    <div>
      <ul>
        <h2>Fast-Ride</h2>
        <li  className="ms-auto"> <Link style={linkStyle} to="/home">Home</Link> </li>
        <li> <Link style={linkStyle}  to="/ride/Bike">Destination</Link></li>
        <li> <Link style={linkStyle}  to="/blog">Blog</Link></li>
        <li> <Link style={linkStyle} to="/contacts">Contacts</Link></li>
        
        {
          loggedInUser.email?
          <> <li style={{color: 'white'}}>{loggedInUser.displayName}</li><Button style={{marginLeft: '10px'}} onClick={()=>setLoggedInUser({})} variant="contained" color="default">
          Log Out
        </Button> </> :
          <Link style={linkStyle} to="/login">
          <Button style={{marginLeft: '10px'}} variant="contained" color="secondary">
          Log In
        </Button>
        </Link>
        }
      </ul>
    </div>
  );
};

export default Header;
