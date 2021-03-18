import { Button } from "@material-ui/core";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <ul>
        <h1>Fast-Ride</h1>
        <li className="ms-auto">Home</li>
        <li>Destination</li>
        <li>Blog</li>
        <li>Contacts</li>
        <Button style={{marginLeft: '10px'}} variant="contained" color="secondary">
          Log In
        </Button>
      </ul>
    </div>
  );
};

export default Header;
