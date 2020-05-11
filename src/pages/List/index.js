import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import { useSnackbar } from 'notistack';
import api from '../../services/api';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

const useStyles = makeStyles((theme) => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		paddingTop: 0,
		paddingBottom: 10
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: 40,
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	buttons: {
		textAlign: 'center',
	},
	button: {
		marginTop: 10,
		marginLeft: theme.spacing(1),
	},
	legend: {
		fontSize: 12,
		fontWeight: 700,
		marginTop: 10,
	},
	pesquisa: {
		paddingTop: 0
	},
	filter: {
		color: 'rgba(0, 0, 0, 0.5)'
	},
	iconFilter: {
		width: 18,
		marginRight: 2
	},
	heading: {
		fontSize: 15
	}
}));

export default function List() {
	const classes = useStyles();
	const { enqueueSnackbar } = useSnackbar();
	const location = useLocation();
	const [city, setCity] = useState('');
	const [uf, setUf] = useState('');
	const [neighborhood, setNeighborhood] = useState('');
	const [product, setProduct] = useState([]);
	const [type, setType] = useState([]);
	const [cities, setCities] = useState([]);
	const [neighborhoods, setNeighborhoods] = useState([]);
	const [products, setProducts] = useState([]);
	const [types, setTypes] = useState([]);
	const [feirantes, setFeirantes] = useState(location.state.detail);

	const states = [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
        'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
	];
	
	useEffect(() => {
        api.get('produtos').then(response => {
            setProducts(response.data);
		});
		
		api.get('tiposProdutos').then(response => {
            setTypes(response.data);
		});
    }, []);

	const handleChangeUf = (uf) => {
		let ufLowerCase = uf.toLowerCase();
		setUf(uf);
		
        api.get('regioes/municipios/' + ufLowerCase).then(response => {
            let municipios = [];
            response.data.forEach(element => {
                municipios.push({ id: element._id, name: capitalize(element.nome_municipio)});
            });
            setCities(municipios);
        });
	};
	
	function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleChangeCity = (city) => {
        if (city) {
            setCity(city);
        
            api.get('regioes/bairros/' + city.id).then(response => {
                let bairros = [];
                response.data.forEach(element => {
                    bairros.push({ id: element._id, name: capitalize(element.nome)});
                });
                setNeighborhoods(bairros);
            });
        }
	};
	
	const handleChangeNeighborhood = (neighborhood) => {
		console.log(neighborhood);
		//setNeighborhood(neighborhood);
	};

	async function handleSearch(event) {
		event.preventDefault();

		const data = {
			city,
			uf,
			neighborhood,
			product,
			type
		};

		try {
			const response = await api.post('feirantes', data);

			if(response.length) {
				setFeirantes(response);
			} else {
				enqueueSnackbar('Não foi encontrado feirante para este bairro!', { 
					variant: 'info',
				});
			}

		} catch(error) {
			enqueueSnackbar('Erro ao retornar os feirantes!', { 
                variant: 'error',
            });
		}
	}

	const handleMessage = (tel) => {
		window.open('https://api.whatsapp.com/send?phone=55'+tel+'&text=Olá!%20Gostaria%20de%20informações%20dos%20produtos.&source=&data=', '_blank');
	}

	return (
		<div>
		<Header />
		<main>
			<ExpansionPanel>
				<ExpansionPanelSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				className={classes.filter}
				>
					<SearchIcon className={classes.iconFilter} />
					<Typography className={classes.heading}>Pesquisa detalhada</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.pesquisa}>
					<Container className={classes.heroContent}>
						<form className={classes.root} onSubmit={handleSearch}>
							<Grid container spacing={1}>
							<Grid item xs={2} sm={2} md={2}>
								<FormControl>
								<InputLabel id="labelUF">UF</InputLabel>
								<Select
									className="uf"
									labelId="labelUF"
									value={uf}
									onChange={e => handleChangeUf(e.target.value)}
									input={<Input />}
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
								<FormControl className={classes.select}>
									<Autocomplete
										id="city"
										options={cities}
										getOptionLabel={(option) => option.name}
										style={{ width: '100%' }}
										value={city}
										onChange={(event, newValue) => {
											handleChangeCity(newValue);
										}}
										renderInput={(params) => <TextField {...params} label="Cidade" />}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={5} md={5}>
								<FormControl className={classes.select}>
									<Autocomplete
										id="bairros"
										options={neighborhoods}
										getOptionLabel={(option) => option.name}
										style={{ width: '100%' }}
										value={neighborhood}
										onChange={(event, newValue) => {
											setNeighborhood(newValue);
										}}
										renderInput={(params) => <TextField {...params} label="Bairro" />}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
								<FormControl>
								<InputLabel id="labelProducts">Produto</InputLabel>
								<Select
									className="products"
									labelId="labelProducts"
									multiple
									value={product}
									onChange={e => setProduct(e.target.value)}
									input={<Input />}
								>
									{products.map((product) => (
										<MenuItem key={product._id} value={product._id}>
										{product.descricao}
										</MenuItem>
									))}
								</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
								<FormControl>
								<InputLabel id="labelType">Tipo</InputLabel>
								<Select
									className="type"
									labelId="labelType"
									multiple
									value={type}
									onChange={e => setType(e.target.value)}
									input={<Input />}
								>
									{types.map((type) => (
										<MenuItem key={type._id} value={type._id}>
										{type.descricao}
										</MenuItem>
									))}
								</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={12} md={12} className={classes.buttons}>
								<Button
									variant="contained"
									color="primary"
									type="submit"
									className={classes.button}
								>
								Pesquisar
								</Button>
							</Grid>
							</Grid>
						</form>
						</Container>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			
			<Container className={classes.cardGrid} maxWidth="lg">
			<Grid container spacing={2}>
				{feirantes.map((feirante) => (
				<Grid item key={feirante._id} xs={12} sm={6} md={4}>
					<Card className={classes.card}>
					<CardContent className={classes.cardContent}>
						<Typography gutterBottom variant="h5" component="h2">
						{feirante.nomeDaBarraca}
						</Typography>
						<Typography>
							{feirante.email}
						</Typography>
						
						<Typography className={classes.legend}>
							Telefones
						</Typography>
						<div>
						{(feirante.telefonesWhatsapp).map((telefone, index) => (
							<Typography key={index} className="text">
								{telefone}
								{ ((feirante.telefonesWhatsapp.length - 1) !== index) ? ' / ': '' }
							</Typography>
						))}
						</div>

						<div>
							<Typography className={classes.legend}>
								Produtos
							</Typography>
							{(feirante.produtos).map((produto, index) => (
								<Typography key={index} className="text">
									{produto.descricao}
									{ ((feirante.produtos.length - 1) !== index) ? ', ': '' }
								</Typography>
							))}
						</div>

						<div>
							<Typography className={classes.legend}>
								Tipos
							</Typography>
							{(feirante.tiposDeProdutos).map((tipo, index) => (
								<Typography key={index} className="text">
									{tipo.descricao}
									{ ((feirante.tiposDeProdutos.length - 1) !== index) ? ', ': '' }
								</Typography>
							))}
						</div>

						<div>
							<Typography className={classes.legend}>
								Bairros
							</Typography>
							{(feirante.bairrosDeEntrega).map((bairro, index) => (
								<Typography key={index} className="text">
									{bairro.nome}
									{ ((feirante.bairrosDeEntrega.length - 1) !== index) ? ', ': '' }
								</Typography>
							))}
							
						</div>

						{ feirante.enderecoLocalDeAtendimento && (
							<div>
								<Typography className={classes.legend}>
									Atendimento Local
								</Typography>
								<Typography className="text">
									{feirante.enderecoLocalDeAtendimento}
								</Typography>
								
							</div>
						)}
					</CardContent>
					<CardActions>
						<Button size="small" onClick={() => handleMessage(feirante.telefonePrincipal)} color="primary">
							Envie uma mensagem
						</Button>
					</CardActions>
					</Card>
				</Grid>
				))}
			</Grid>
			</Container>
		</main>
		<Footer />
		</div>
	);
}