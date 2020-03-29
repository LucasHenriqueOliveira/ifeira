import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';
import feiraImg from '../../assets/feira.svg';

export default function Login() {
   const [id, setId] = useState('');
   const history = useHistory();

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

            <form onSubmit={handleLogin}>
               <h1>Faça seu login</h1>

               <input 
                  placeholder="Seu celular ou email" 
                  value={id}
                  onChange={e => setId(e.target.value)}
               />
               <input 
                  placeholder="Sua senha" 
                  value={id}
                  onChange={e => setId(e.target.value)}
               />
               <button className="button" type="submit">Entrar</button>

               <Link className="back-link" to="/register">
                  <FiLogIn size={16} />
                  Não tenho cadastro
               </Link>
            </form>
         </section>

         <img src={feiraImg} alt="Feira" />         
      </div>
   )
}