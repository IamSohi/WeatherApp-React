import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { CenterFocusStrong } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        // fontSize: '3em',
    },
}));

export default function ButtonAppBar(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.bar} position = "static">
                <Toolbar>
                    <Typography variant="h2" className = {classes.title}>
                        Weather Today
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}