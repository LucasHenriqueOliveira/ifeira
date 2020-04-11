import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

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
    select: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginRight: 10,
        marginLeft: 0,
        marginBottom: 0,
        marginTop: 3,
    }
}));

export default function Home() {
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();
    const classes = useStyles();
    const [cities, setCities] = useState([]);
    const [neighborhoods, setNeighborhoods] = useState([]);

    const handleChangeUf = (uf) => {
        setUf(uf);
        
        api.get('cidades/' + uf).then(response => {
            setCities(response);
        });

        //setCities([{'id': 1, 'name': 'Belo Horizonte'}, {'id': 2, 'name': 'São Paulo'}]);
    };

    const handleChangeCity = (city) => {
        setCity(city);
        
        api.get('bairros/' + city).then(response => {
            setNeighborhoods(response);
        });

        //setNeighborhoods([{'id': 1, 'name': 'Centro'}, {'id': 2, 'name': 'Santo Antônio'}]);
    };


    async function handleSearch(event) {
        event.preventDefault();

        try {
            await api.get('feirantes/' + neighborhood).then(response => {
                if(response.length) {
                    // save list on localstorage
                    history.push('/list');
                } else {
                    console.log('Não tem bairro.');
                }
            });
        } catch(error) {
            alert(error);
        }
    }

    const states = [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
        'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
    ];

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
                                <Grid container className={classes.root} spacing={1}>
                                    <Grid item xs={12} sm={2}>
                                        <FormControl variant="outlined" className={classes.select}>
                                            <InputLabel id="labelUF">UF</InputLabel>
                                            <Select
                                                labelId="labelUF"
                                                value={uf}
                                                onChange={e => handleChangeUf(e.target.value)}
                                            >
                                                {states.map((state) => (
                                                <MenuItem key={state} value={state}>
                                                    {state}
                                                </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <FormControl variant="outlined" className={classes.select}>
                                            <InputLabel id="labelCity">Cidade</InputLabel>
                                            <Select
                                                labelId="labelCity"
                                                value={city}
                                                onChange={e => handleChangeCity(e.target.value)}
                                            >
                                                {cities.map((city) => (
                                                <MenuItem key={city.id} value={city.id}>
                                                {city.name}
                                                </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl variant="outlined" className={classes.select}>
                                            <InputLabel id="labelNeighborhood">Bairro</InputLabel>
                                            <Select
                                                labelId="labelNeighborhood"
                                                value={neighborhood}
                                                onChange={e => setNeighborhood(e.target.value)}
                                            >
                                                {neighborhoods.map((neighborhood) => (
                                                <MenuItem key={neighborhood.id} value={neighborhood.id}>
                                                    {neighborhood.name}
                                                </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
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
