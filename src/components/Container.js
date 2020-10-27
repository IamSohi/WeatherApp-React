import React from 'react';
import { Grid } from '@material-ui/core';
import WeatherCard from './WeatherCard';
import MainCard from './MainCard';
import { makeStyles } from '@material-ui/core/styles';

var previousColor=1;

const useStyles = makeStyles({
  container:{
    marginTop:'2em'
  }
});

function generateRandomColor(){
  var color = Math.floor((Math.random()*8)+2);
  while(color===previousColor){
    color = Math.floor((Math.random()*8)+2);
  }
  previousColor=color;
  return color;
}


function Container({weatherLocations, removeLocation,moveItemToFront}){

    var location = weatherLocations[0];
    const classes=useStyles();
    

    return(
        <Grid key={"2010"} container className={classes.container}>
      <Grid key={"2014"} item  xs={false} sm={2}/>
      <Grid key={"2015"} item  container sm={8} spacing={3}>

      
        <Grid item key={location} xs={12}
>
          <MainCard className='relativePos' key={"2009"}
            location={location}
            color={'bgcolor1'}
            onDelete={removeLocation(0)}
          />
        </Grid>
        
          {weatherLocations.map((location, index) => {
            previousColor=generateRandomColor();
            if(index===0){
              return (
                <>
                </>
              );
            }else{
              return (
                  <Grid item key={location} xs={12} sm={6}>
                    <WeatherCard key={"2008"}
                      location={location}
                      color={'bgcolor'+previousColor}
                      onDelete={removeLocation(index)}
                      move={moveItemToFront(index)}
                    />
                  </Grid>
              );
            }
          })
        }
        </Grid>
        <Grid key={"2016"} item xs={false} sm={2}/>
      </Grid>
    )


}
export default Container;