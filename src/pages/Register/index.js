import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
   root: {
      '& .MuiOutlinedInput-root': {
         '& fieldset': {
           border: 'none'
         }
      }
   },
   selectUF: {
      '& .MuiSelect-select': {
         backgroundColor: '#fff',
         paddingRight: 10,
         marginLeft: 20,
         marginTop: 5
      },
      '& .MuiFormLabel-root': {
         marginLeft: 25,
      },
      width: '20%',
   },
   selectCity: {
      '& .MuiSelect-select': {
         backgroundColor: '#fff',
         paddingRight: 10,
         marginLeft: 20,
         marginTop: 5
      },
      '& .MuiFormLabel-root': {
         marginLeft: 35,
      },
      width: '80%',
      marginRight: 10
   },
   selectNeighborhood: {
      '& .MuiSelect-select': {
         backgroundColor: '#fff',
         paddingRight: 10,
         marginLeft: 20,
         marginTop: 5
      },
      '& .MuiFormLabel-root': {
         marginTop: 7,
         zIndex: 1,
         marginLeft: 28,
      },
      width: '100%',
      marginRight: 10
   },
   selectProducts: {
      '& .MuiSelect-select': {
         backgroundColor: '#fff',
         paddingRight: 10,
         marginLeft: 20,
         marginTop: 5
      },
      '& .MuiFormLabel-root': {
         marginTop: 7,
         zIndex: 1,
         marginLeft: 28,
      },
      width: '100%',
      marginRight: 10
   },
   selectType: {
      '& .MuiSelect-select': {
         backgroundColor: '#fff',
         paddingRight: 10,
         marginLeft: 20,
         marginTop: 5
      },
      '& .MuiFormLabel-root': {
         marginTop: 7,
         zIndex: 1,
         marginLeft: 28,
      },
      width: '100%',
      marginRight: 10
   },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
      },
   },
};

function getStyles(name, personName, theme) {
   return {
     fontWeight:
       personName.indexOf(name) === -1
         ? theme.typography.fontWeightRegular
         : theme.typography.fontWeightMedium,
   };
 }

export default function Register() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [whatsapp, setWhatsapp] = useState('');
   const [password, setPassword] = useState('');
   const [city, setCity] = useState('');
   const [uf, setUf] = useState('');
   const [neighborhood, setNeighborhood] = useState([]);
   const [product, setProduct] = useState([]);
   const [type, setType] = useState([]);
   const [address, setAddress] = useState('');

   const history = useHistory();

   const states = [
      'MG',
      'RJ',
      'SP',
   ];

   const cities = ['Rio de Janeiro'];

   const neighborhoods = [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
   ];

   const products = [
      'Hortifruti',
      'Verduras',
      'Frutas'
   ];

   const types = [
      'Orgânicos',
      'Não Orgânicos'
   ];

   const classes = useStyles();
   const theme = useTheme();

   /*
   const handleChangeMultiple = (event) => {
      const { options } = event.target;
      const value = [];
      for (let i = 0, l = options.length; i < l; i += 1) {
         if (options[i].selected) {
         value.push(options[i].value);
         }
      }
      setPersonName(value);
   };
   */

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
         product,
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
               <img src={logoImg} alt="Register"/>

               <h1>Cadastro</h1>
               <p>Faça seu cadastro, entre na plataforma e seja visto por milhares de pessoas.</p>

               <Link className="back-link" to="/login">
                  <FiArrowLeft size={16} />
                  Voltar
               </Link>            
            </section>

            <form className={classes.root} onSubmit={handleRegister}>
               <TextField
                  className="name"
                  label="Nome da barraca *"
                  variant="outlined"
                  value={name}
                  onChange={e => setName(e.target.value)}
               />
               <TextField 
                  type="email" 
                  className="name"
                  label="E-mail"
                  variant="outlined"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <TextField 
                  className="whatsapp"
                  label="WhatsApp"
                  variant="outlined"
                  value={whatsapp}
                  onChange={e => setWhatsapp(e.target.value)}
               />
               <TextField 
                  className="password"
                  label="Senha *"
                  type="password" 
                  variant="outlined"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <div className="input-group">
                  <FormControl className={classes.selectUF}>
                     <InputLabel id="labelUF">UF</InputLabel>
                     <Select
                        className="uf"
                        labelId="labelUF"
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        input={<Input />}
                        MenuProps={MenuProps}
                        disableUnderline={true}
                     >
                        {states.map((state) => (
                           <MenuItem key={state} value={state} style={getStyles(state, uf, theme)}>
                           {state}
                           </MenuItem>
                        ))}
                     </Select>
                  </FormControl>
                  <FormControl className={classes.selectCity}>
                     <InputLabel id="labelCity">Cidade</InputLabel>
                     <Select
                        className="city"
                        labelId="labelCity"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        input={<Input />}
                        MenuProps={MenuProps}
                        disableUnderline={true}
                     >
                        {cities.map((city) => (
                           <MenuItem key={city} value={city} style={getStyles(city, uf, theme)}>
                           {city}
                           </MenuItem>
                        ))}
                     </Select>
                  </FormControl>
               </div>
               <FormControl className={classes.selectNeighborhood}>
                  <InputLabel id="labelNeighborhood">Bairro</InputLabel>
                  <Select
                     className="neighborhood"
                     labelId="labelNeighborhood"
                     multiple
                     value={neighborhood}
                     onChange={e => setNeighborhood(e.target.value)}
                     input={<Input />}
                     MenuProps={MenuProps}
                     disableUnderline={true}
                  >
                     {neighborhoods.map((neighborhood) => (
                        <MenuItem key={neighborhood} value={neighborhood} style={getStyles(neighborhood, neighborhood, theme)}>
                        {neighborhood}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
               <FormControl className={classes.selectProducts}>
                  <InputLabel id="labelProducts">Produtos</InputLabel>
                  <Select
                     className="products"
                     labelId="labelProducts"
                     multiple
                     value={product}
                     onChange={e => setProduct(e.target.value)}
                     input={<Input />}
                     MenuProps={MenuProps}
                     disableUnderline={true}
                  >
                     {products.map((product) => (
                        <MenuItem key={product} value={product} style={getStyles(product, product, theme)}>
                        {product}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
               <FormControl className={classes.selectType}>
                  <InputLabel id="labelType">Tipo</InputLabel>
                  <Select
                     className="type"
                     labelId="labelType"
                     multiple
                     value={type}
                     onChange={e => setType(e.target.value)}
                     input={<Input />}
                     MenuProps={MenuProps}
                     disableUnderline={true}
                  >
                     {types.map((type) => (
                        <MenuItem key={type} value={type} style={getStyles(type, type, theme)}>
                        {type}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
               <TextField 
                  className="address"
                  variant="outlined"
                  label="Endereço *" 
                  value={address}
                  onChange={e => setAddress(e.target.value)}
               />
               <button className="button" type="submit">Cadastrar</button>
            </form>
         </div>
      </div>
   )
}