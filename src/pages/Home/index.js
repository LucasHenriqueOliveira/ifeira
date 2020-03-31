import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';
import feiraImg from '../../assets/feira2.svg';

const useStyles = makeStyles((theme) => ({
    root: {
       '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none'
          }
       },
       '& .MuiFormLabel-root.Mui-focused': {
            color: 'transparent'
       }
    },
}));

export default function Home() {
   const [id, setId] = useState('');
   const history = useHistory();
   const classes = useStyles();

   async function handleSearch(event) {
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
        <div className="top_container">
            <section className="hero_section">
                <div className="hero-container container">
                    <div className="hero_detail-box">
                        <Link className="logo" to="/">
                            <img src={logoImg} alt="Feira" />  
                        </Link>
                        <h3> Bem-vindo!</h3>
                        <p>
                            Descubra os feirantes disponíveis para você...
                        </p>
                        <div className="hero_btn-container">
                            <form className={classes.root} onSubmit={handleSearch}>
                                <TextField
                                    className="neighborhood"
                                    label="Digite o seu bairro"
                                    variant="outlined"
                                    value={id}
                                    onChange={e => setId(e.target.value)}
                                />
                                <Link className="call_to-btn btn_white-border" to="/">
                                    <span>Pesquisar</span>
                                </Link>
                            </form>

                            <Link className="back-link" to="/login">
                                <FiCornerDownRight size={16} />
                                Eu sou feirante
                            </Link>
                        </div>
                    </div>
                    <div className="hero_img-container">
                        <img src={feiraImg} alt="Feira" />
                    </div>
                </div>
            </section>
        </div>  
    )
}
