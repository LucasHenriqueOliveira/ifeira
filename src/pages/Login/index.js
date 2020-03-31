import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
   const [id, setId] = useState('');
   const [password, setPassword] = useState('');
   const history = useHistory();

   const classes = useStyles();

   async function handleLogin(event) {
      event.preventDefault();

      try {
         const response = await api.post('sessions', { id });

         localStorage.setItem('ongId', id);
         localStorage.setItem('ongName', response.data.name);

         history.push('/profile');
      } catch(error) {
         alert(error);
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
                  label="Seu celular ou email"
                  variant="outlined"
                  value={id}
                  onChange={e => setId(e.target.value)}
               />

               <TextField
                  className="password"
                  label="Sua senha"
                  variant="outlined"
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