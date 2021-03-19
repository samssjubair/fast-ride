import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: '20px',
    boxShadow: '5px 5px 40px black'
  },
  media: {
    height: 150,
    margin: 'auto'
  },
});

const RideCard = (props) => {
  const linkStyle={
    textDecoration: 'none',
    color: 'black'
}
  const {rideType,image}=props.ride;
  const classes = useStyles();
  return (
    
      <Grid item xs={12} sm={6} md={3}>
        <Link style={linkStyle} to={`/ride/${rideType}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title={rideType}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {rideType}
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
        </Link>
      </Grid>
    
  );
};

export default RideCard;
