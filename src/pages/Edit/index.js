import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
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
  buttons: {
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    marginLeft: theme.spacing(1),
  },
}));

async function handleRegister(event) {
    event.preventDefault();
  
    /*
    const data = {
       city,
       uf,
       neighborhood,
       product,
       type
    };
  
    try {
       const response = await api.post('ongs', data);
  
       alert(`Aqui está seu ID de acesso: ${response.data.id} `);
       history.push('/');
    } catch(error) {
       alert('Erro ao cadastrar, tente novamente.');
    }
    */
}

export default function Profile() {
    const classes = useStyles();
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

	const handleEdit = () => {
    
	};

  return (
    <div>
        <Header />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Alterar o perfil
                </Typography>
                <Container className={classes.heroContent}>
                    <form className={classes.root} onSubmit={handleRegister}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    className="name"
                                    label="Nome da barraca"
                                    variant="outlined"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Grid>
							<Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    type="email" 
									className="name"
									label="E-mail"
									variant="outlined"
									value={email}
									onChange={e => setEmail(e.target.value)}
                                />
                            </Grid>
							<Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    className="whatsapp"
									label="WhatsApp"
									variant="outlined"
									value={whatsapp}
									onChange={e => setWhatsapp(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2} sm={2} md={2}>
                                <FormControl variant="outlined">
                                    <InputLabel id="labelUF">UF</InputLabel>
                                    <Select
                                        className="uf"
                                        labelId="labelUF"
                                        value={uf}
										onChange={e => setUf(e.target.value)}
                                    >
                                        {states.map((state) => (
                                            <MenuItem key={state} value={state}>
                                            {state}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
							<Grid item xs={10} sm={5} md={5}>
								<FormControl variant="outlined">
									<InputLabel id="labelCity">Cidade</InputLabel>
									<Select
										className="city"
										labelId="labelCity"
										value={city}
										onChange={e => setCity(e.target.value)}
										disableUnderline={true}
									>
										{cities.map((city) => (
										<MenuItem key={city} value={city}>
										{city}
										</MenuItem>
										))}
									</Select>
								</FormControl>
                            </Grid>
							<Grid item xs={12} sm={5} md={5}>
								<FormControl variant="outlined">
									<InputLabel id="labelNeighborhood">Bairro</InputLabel>
									<Select
										className="neighborhood"
										labelId="labelNeighborhood"
										multiple
										value={neighborhood}
										onChange={e => setNeighborhood(e.target.value)}
									>
										{neighborhoods.map((neighborhood) => (
											<MenuItem key={neighborhood} value={neighborhood}>
											{neighborhood}
											</MenuItem>
										))}
									</Select>
								</FormControl>
                            </Grid>
							<Grid item xs={12} sm={6} md={6}>
								<FormControl variant="outlined">
									<InputLabel id="labelProducts">Produtos</InputLabel>
									<Select
										className="products"
										labelId="labelProducts"
										multiple
										value={product}
										onChange={e => setProduct(e.target.value)}
									>
										{products.map((product) => (
											<MenuItem key={product} value={product}>
											{product}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
								<FormControl variant="outlined">
									<InputLabel id="labelType">Tipo</InputLabel>
									<Select
										className="type"
										labelId="labelType"
										multiple
										value={type}
										onChange={e => setType(e.target.value)}
									>
										{types.map((type) => (
											<MenuItem key={type} value={type}>
											{type}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={12} md={12}>
								<TextField 
									className="address"
									variant="outlined"
									label="Endereço" 
									value={address}
									onChange={e => setAddress(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={12} md={12} className={classes.buttons}>
								<Button
									variant="contained"
									color="primary"
									onClick={handleEdit}
									className={classes.button}
									>
									Alterar
								</Button>
							</Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        </main>
        <Footer />
    </div>
  );
}