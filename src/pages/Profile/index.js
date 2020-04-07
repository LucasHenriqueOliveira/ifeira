import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logoImg from '../../assets/logo.png'; 
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './styles.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: 10,
    paddingBottom: 10
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  title: {
    marginTop: 20,
    textDecoration: 'underline'
  },
  cidade: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: 5,
  },
  list: {
    marginTop: 3,
    marginBottom: 3
  }
}));


export default function Profile() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            <Link className="logo" to="/">
                <img src={logoImg} alt="Feira" />  
            </Link>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
                Barra do Zé
            </Typography>
            <Container className={classes.heroContent}>
                <Typography variant="h6" className={classes.title}>
                    Email
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        ze@teste.com.br
                    </Grid>
                </Grid>
                <Typography variant="h6" className={classes.title}>
                    Telefone(s)
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <ul className={classes.list}>
                            <li>11-97023-9342</li>
                            <li>11-94234-5342</li>
                            <li>11-97567-9088</li>
                        </ul>
                    </Grid>
                </Grid>
                <Typography variant="h6" className={classes.title}>
                    Produto(s)
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <ul className={classes.list}>
                            <li>Legumes</li>
                            <li>Frutas nacionais</li>
                            <li>Frutas importadas</li>
                        </ul>
                    </Grid>
                </Grid>
                <Typography variant="h6" className={classes.title}>
                    Tipo(s)
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <ul className={classes.list}>
                            <li>Orgânicos</li>
                            <li>Não orgânicos</li>
                        </ul>
                    </Grid>
                </Grid>
                <Typography variant="h6" className={classes.title}>
                    Entregas
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography className={classes.cidade}>
                            São Paulo/SP
                        </Typography>
                        <ul className={classes.list}>
                            <li>Moeda</li>
                            <li>Vila Madalena</li>
                            <li>Vila Matilde</li>
                        </ul>
                        <Typography className={classes.cidade}>
                            Santo André/SP
                        </Typography>
                        <ul className={classes.list}>
                            <li>Centro</li>
                        </ul>
                    </Grid>
                </Grid>
                <Typography variant="h6" className={classes.title}>
                    Atendimento
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        Rua 9 de julho, Moema, São Paulo/SP
                    </Grid>
                </Grid>
            </Container>
        </Paper>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          iFeira
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          A sua feira em casa!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </div>
  );
}