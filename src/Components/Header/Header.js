import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const linkStyle={
         textDecoration: 'none',
         color: 'black'
    }
  return (
    <div>
      <ul>
        <h1>Fast-Ride</h1>
        <li  className="ms-auto"> <Link style={linkStyle} to="/home">Home</Link> </li>
        <li> <Link style={linkStyle}  to="/destination">Destination</Link></li>
        <li> <Link style={linkStyle}  to="/blog">Blog</Link></li>
        <li> <Link style={linkStyle} to="/contacts">Contacts</Link></li>
        <Link style={linkStyle} to="/login">
        <Button style={{marginLeft: '10px'}} variant="contained" color="secondary">
          Log In
        </Button>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
