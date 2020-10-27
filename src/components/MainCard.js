import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CardContent from '@material-ui/core/CardActions';
import CardActions from '@material-ui/core/CardActions';
import LocationWeather from './LocationWeather';


const useStyles = makeStyles({

  bgcolor1:{
    backgroundColor: '#DAD870',
  },
  bgcolor2:{
    backgroundColor: '#FFCD58',
  },
  bgcolor3:{
    backgroundColor: '#FF9636',
  },
  bgcolor4:{
    backgroundColor: '#FF5C4D',
  }
});

function WeatherCard({location, onDelete, color}){
    const classes=useStyles();
    const dbStyle = {
        position:'absolute',
      };
    return(
        <div className='relativePos' >

        
        <Card  className={classes[color]}>
            <IconButton className='delButton' style={dbStyle} onClick={onDelete}>
                    <DeleteIcon/>
                </IconButton>
            <CardContent>
                
                {location && <LocationWeather location={location}/>}
            </CardContent> 
        </Card>
        </div>
    )
}

WeatherCard.propTypes={
    location:PropTypes.string.isRequired,
    onDelete:PropTypes.func.isRequired,
};

export default WeatherCard;