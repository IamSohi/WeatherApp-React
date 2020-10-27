import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CardContent from '@material-ui/core/CardActions';
import CardActions from '@material-ui/core/CardActions';
import LocationWeather from './LocationWeather';
import ButtonBase from '@material-ui/core/ButtonBase';

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
  },
  bgcolor5:{
    backgroundColor: '#F51663',
  },
  bgcolor6:{
    backgroundColor: '#DEB3AD',
  },
  bgcolor7:{
    backgroundColor: '#FAC218',
  },
  bgcolor8:{
    backgroundColor: '#ADE292',
  },    
  relativePos:{
      position:'relative',
  },
  delButton:{
      position:'absolute',
      bottom:'0.5em',
      right:'0.5em',
      
  }


});

const isSuccess = (onDelete)=>(status)=>{
  if(!status){
    alert("This City does not exist.")
  }
  return onDelete;
  
}

function WeatherCard({location, onDelete, move, color}){
    const classes=useStyles();
    const dbStyle = {
        position:'absolute',
        zIndex:'1'
      };
    return(

        <div className='relativePos' >

        
        <Card className={classes[color]}>
            <IconButton onClick={onDelete} className='delButton' style={dbStyle}>
                <DeleteIcon />
            </IconButton>
            <ButtonBase onClick={move} className="fullWidth">


                <CardContent>

                    {location && <LocationWeather location={location} onSuccess={isSuccess(onDelete)} />}
                </CardContent>
            </ButtonBase>
        </Card>
        </div>
        
    )
}

WeatherCard.propTypes={
    location:PropTypes.string.isRequired,
    onDelete:PropTypes.func.isRequired,
    // onClick:PropTypes.func.isRequired,
};

export default WeatherCard;