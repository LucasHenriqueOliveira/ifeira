
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import logoImg from '../assets/logo.png'; 
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    logo: {
        width: 120,
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Link to="/">
                        <img src={logoImg} className={classes.logo} alt="Feira" />  
                    </Link>
                </Toolbar>
            </AppBar>
        </React.Fragment>
  );
}