import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function NewIncident() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [whatsapp, setWhatsapp] = useState('');
   const [password, setPassword] = useState('');
   const [city, setCity] = useState('');
   const [uf, setUf] = useState('');
   const [neighborhood, setNeighborhood] = useState('');
   const [products, setProducts] = useState('');
   const [type, setType] = useState('');
   const [address, setAddress] = useState('');

   const history = useHistory();

   async function handleRegister(event) {
      event.preventDefault();

      const data = {
         name, 
         email, 
         whatsapp,
         password,
         city,
         uf,
         neighborhood,
         products,
         type,
         address
      };

      try {
         const response = await api.post('ongs', data);

         alert(`Aqui está seu ID de acesso: ${response.data.id} `);
         history.push('/');
      } catch(error) {
         alert('Erro ao cadastrar, tente novamente.');
      }
   }

   return (
      <div className="register-container">
         <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero"/>

               <h1>Cadastro</h1>
               <p>Faça seu cadastro, entre na plataforma e seja visto por milhares de pessoas.</p>

               <Link className="back-link" to="/login">
                  <FiArrowLeft size={16} />
                  Voltar
               </Link>            
            </section>

            <form onSubmit={handleRegister}>
               <input 
                  placeholder="Nome da barraca *" 
                  value={name}
                  onChange={e => setName(e.target.value)}
               />
               <input type="email" 
                  placeholder="E-mail" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <input 
                  placeholder="WhatsApp" 
                  value={whatsapp}
                  onChange={e => setWhatsapp(e.target.value)}
               />
               <input 
                  placeholder="Senha *"
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <div className="input-group">
                  <select 
                     className="uf"
                     value={uf} 
                     onChange={e => setUf(e.target.value)}>
                        <option value="" disabled defaultValue>UF *</option>
                        <option value="MG">MG</option>
                        <option value="RJ">RJ</option>
                        <option value="SP">SP</option>
                  </select>
                  <select 
                     className="city"
                     value={city}
                     onChange={e => setCity(e.target.value)}>
                        <option value="" disabled defaultValue>Cidade *</option>
                  </select>
               </div>
               <select 
                  className="neighborhood"
                  value={neighborhood}
                  onChange={e => setNeighborhood(e.target.value)}>
                     <option value="" disabled defaultValue>Bairro *</option>
               </select>
               <select 
                  className="products"
                  value={products}
                  onChange={e => setProducts(e.target.value)}>
                     <option value="" disabled defaultValue>Produtos *</option>
               </select>
               <select 
                  className="type"
                  value={type}
                  onChange={e => setType(e.target.value)}>
                     <option value="" disabled defaultValue>Tipo *</option>
               </select>
               <input 
                  placeholder="Endereço *" 
                  value={address}
                  onChange={e => setAddress(e.target.value)}
               />
               <button className="button" type="submit">Cadastrar</button>
            </form>
         </div>
      </div>
   )
}