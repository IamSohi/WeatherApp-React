import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import getWeatherData from '../getWeatherData.js';
import WeatherDisplay from './WeatherDisplay';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    locationText:{
        textAlign:"center",
    }
   
  });
  

function capitalizeString(string){
        let words = string.split(' ');
        words = words.map((element)=>(element.charAt(0).toUpperCase()+element.slice(1)))
        return words.join(' ');
    }
function LocationWeather({location,onSuccess}){
    const classes=useStyles();

    const [weatherData, setWeatherData]=React.useState({});
    const [apiError, setApiError]=React.useState("");
    // const [isLoading, ]

    React.useEffect(()=>{
        const getWeather = async ()=>{
            const result = await getWeatherData(location);
            setWeatherData(result.success ? result.data : onSuccess(false));
            setApiError(result.success ? "":result.error);
        };
        getWeather();
        
    },[location]);

    // const {flagIcon}
    
    return(
        <>
            <div className='fullWidth'>
                <Typography variant="h4" className={classes.locationText}>
                    {capitalizeString(location)}
                </Typography>
                <WeatherDisplay weatherData={weatherData}/>

            </div>
        </>
    )


}

LocationWeather.propTypes={
    location:PropTypes.string.isRequired,
};

export default LocationWeather;