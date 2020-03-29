import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Select from 'react-select';

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

   const optionsUF = [
      { value: 'RJ', label: 'RJ' },
      { value: 'MG', label: 'MG' },
      { value: 'SP', label: 'SP' }
   ];

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
                  <input 
                     placeholder="UF *" 
                     style={{ width: 80 }} 
                     value={uf}
                     onChange={e => setUf(e.target.value)}   
                  />
                  <input 
                     placeholder="Cidade *" 
                     value={city}
                     onChange={e => setCity(e.target.value)}   
                  />
               </div>
               <input 
                  placeholder="Bairro *" 
                  value={neighborhood}
                  onChange={e => setNeighborhood(e.target.value)}   
               />
               <input 
                  placeholder="Produtos *" 
                  value={products}
                  onChange={e => setProducts(e.target.value)}
               />
               <input 
                  placeholder="Tipo *" 
                  value={type}
                  onChange={e => setType(e.target.value)}
               />
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