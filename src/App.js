import React from 'react';
import './App.css';
import NavBar from './components/NavBar';

import WeatherCard from './components/WeatherCard';
import MainCard from './components/MainCard';
import Container from './components/Container';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';  
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddButton from './components/AddButton';

const LOCAL_STORAGE_KEY = "locations";

function saveToLocalStorage(locations){
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(locations));
}

function readFromLocalStorage(){
  const storedLocations = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedLocations ? JSON.parse(storedLocations):['Vancouver', 'Toronto', 'New York'];
}


function App() {
  
  const [weatherLocations, setWeatherLocations] = React.useState(readFromLocalStorage);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddClick = () => {
    let location = document.getElementsByName("city")[0].value;
    if(weatherLocations.includes(location)){
      alert("This location already exists.")
    }else{
      setWeatherLocations([...weatherLocations,location]);
      saveToLocalStorage([...weatherLocations,location]);
      setOpen(false);


    }


    
  }

  const updateLocations = (locations) => {

    setWeatherLocations(Array.from(locations));
    
    saveToLocalStorage(locations);
  }

  const removeLocation = (index) => () =>{
    updateLocations(weatherLocations.filter((_, locationIndex)=>locationIndex !== index));
  }
  const moveItemToFront = (index) =>()=>{
    let newarr = Array.from(weatherLocations);
    newarr.unshift(newarr.splice(index,1)[0]);
    setWeatherLocations(newarr);
    saveToLocalStorage(newarr);
  }


  return (
    
    <div key={"2011"}>
      <NavBar key={"2013"}/>
      <Container key={"2012"} weatherLocations={weatherLocations} moveItemToFront={moveItemToFront} removeLocation={removeLocation}/>
      <AddButton
        onClick={handleClickOpen}>
      </AddButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a City Name:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="City"
            name="city"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddClick} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
