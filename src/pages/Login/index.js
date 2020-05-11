import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSnackbar } from 'notistack';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';
import feiraImg from '../../assets/feira.svg';


const useStyles = makeStyles((theme) => ({
   root: {
      '& .MuiOutlinedInput-root': {
         '& fieldset': {
           border: 'none'
         }
      }
   },
}));

export default function Login() {
   const { enqueueSnackbar } = useSnackbar();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const history = useHistory();

   const classes = useStyles();

   async function handleLogin(event) {
      event.preventDefault();

      let data = {
         email: email,
         senha: password
      }

      try {
         await api.post('sessions', data).then(response => {
            if(response.data.hasOwnProperty('token')) {
               localStorage.setItem('dados', response.data.dados);
               localStorage.setItem('token', response.data.token);
               history.push('/profile');
            } else {
               enqueueSnackbar('Feirante não encontrado!', { 
                  variant: 'error',
                  anchorOrigin: {
                     vertical: 'top',
                     horizontal: 'center',
                 }
               });
            }
         });

      } catch(error) {
         enqueueSnackbar('Email ou senha inválidos!', { 
            variant: 'error',
            anchorOrigin: {
               vertical: 'top',
               horizontal: 'center',
            }
         });
      }
   }

   return (
      <div className="login-container">
         <section className="form">
            <img src={logoImg} alt="Be The Hero"/>

            <form className={classes.root} onSubmit={handleLogin}>
               <h1>Faça seu login</h1>

               <TextField
                  className="id"
                  label="Seu email"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />

               <TextField
                  className="password"
                  label="Sua senha"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <button className="button" type="submit">Entrar</button>

               <Link className="back-link" to="/register">
                  <FiLogIn size={16} />
                  Não tenho cadastro
               </Link>
            </form>
         </section>

         <img src={feiraImg} alt="Feira" className="imgFeira" />         
      </div>
   )
}