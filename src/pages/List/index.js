import React, { useState } from 'react';
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
import Footer from '../shared/Footer';
import Header from '../shared/Header';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: 10,
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
  }
}));

const cards = [
    {
        "id": 1,
        "nome": "Barraca do Zé",
        "email": "ze@teste.com.br",
        "telefones": ["11-97023-9342", "11-94234-5342", "11-97567-9088"],
        "produtos": [
            "Legumes",
            "Frutas nacionais",
            "Frutas importadas"
        ],
        "tipos": [
            "Orgânicos",
            "Não orgânicos"
        ],
        "bairrosEntrega": [
            "Jardins",
            "Vila Mariana",
            "Moema"
        ]
    },
    {
        "id": 2,
        "nome": "Barraca do Marcão",
        "email": "marcao@teste.com.br",
        "telefones": ["11-97023-9342", "11-94234-5342", "11-97567-9088"],
        "produtos": [
            "Legumes",
            "Frutas nacionais",
            "Frutas importadas"
        ],
        "tipos": [
          "Orgânicos",
          "Não orgânicos"
        ],
        "bairrosEntrega": [
            "Jardins",
            "Vila Mariana",
            "Moema"
        ]
    },
    {
        "id": 3,
        "nome": "Barraca do Antônio",
        "email": "antonio@teste.com.br",
        "telefones": ["11-97023-9342", "11-94234-5342"],
        "produtos": [
          "Legumes",
          "Frutas nacionais",
          "Frutas importadas"
        ],
        "tipos": [
          "Orgânicos",
          "Não orgânicos"
        ],
        "bairrosEntrega": [
            "Jardins",
            "Vila Mariana",
            "Moema"
        ]
    },
    {
        "id": 4,
        "nome": "Barraca da Ana",
        "email": "ana@teste.com.br",
        "telefones": ["11-97023-9342"],
        "produtos": [
          "Legumes",
          "Frutas nacionais",
          "Frutas importadas"
        ],
        "tipos": [
          "Orgânicos",
          "Não orgânicos"
        ],
        "bairrosEntrega": [
            "Jardins",
            "Vila Mariana",
            "Moema"
        ]
    },
    {
        "id": 5,
        "nome": "Barraca do Chico",
        "email": "chico@teste.com.br",
        "telefones": ["11-97023-9342", "11-94234-5342"],
        "produtos": [
          "Legumes",
          "Frutas nacionais",
          "Frutas importadas"
        ],
        "tipos": [
          "Orgânicos",
          "Não orgânicos"
        ],
        "bairrosEntrega": [
            "Jardins",
            "Vila Mariana",
            "Moema"
        ]
    },
];

export default function List() {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [neighborhood, setNeighborhood] = useState([]);
  const [product, setProduct] = useState([]);
  const [type, setType] = useState([]);

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

  const handleSearch = () => {
    
  };

  async function handleRegister(event) {
    event.preventDefault();
  
    const data = {
       city,
       uf,
       neighborhood,
       product,
       type
    };
  
    /*
    try {
       const response = await api.post('ongs', data);
  
       alert(`Aqui está seu ID de acesso: ${response.data.id} `);
       history.push('/');
    } catch(error) {
       alert('Erro ao cadastrar, tente novamente.');
    }
    */
  }

  return (
    <div>
      <Header />
      <main>
        <Container className={classes.heroContent}>
          <form className={classes.root} onSubmit={handleRegister}>
            <Grid container spacing={1}>
              <Grid item xs={2} sm={2} md={2}>
                <FormControl>
                  <InputLabel id="labelUF">UF</InputLabel>
                  <Select
                      className="uf"
                      labelId="labelUF"
                      value={uf}
                      onChange={e => setUf(e.target.value)}
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
                <FormControl>
                  <InputLabel id="labelCity">Cidade</InputLabel>
                  <Select
                      className="city"
                      labelId="labelCity"
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      input={<Input />}
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
                <FormControl>
                  <InputLabel id="labelNeighborhood">Bairro</InputLabel>
                  <Select
                    className="neighborhood"
                    labelId="labelNeighborhood"
                    multiple
                    value={neighborhood}
                    onChange={e => setNeighborhood(e.target.value)}
                    input={<Input />}
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
                <FormControl>
                  <InputLabel id="labelProducts">Produtos</InputLabel>
                  <Select
                    className="products"
                    labelId="labelProducts"
                    multiple
                    value={product}
                    onChange={e => setProduct(e.target.value)}
                    input={<Input />}
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
                        <MenuItem key={type} value={type}>
                        {type}
                        </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSearch}
                  className={classes.button}
                >
                  Pesquisar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.nome}
                    </Typography>
                    <Typography>
                        {card.email}
                    </Typography>
                    
                    <Typography className={classes.legend}>
                        Telefones
                    </Typography>
                    <div>
                      {(card.telefones).map((telefone, index) => (
                        <Typography key={index} className="text">
                            {telefone}
                            { ((card.telefones.length - 1) !== index) ? ' / ': '' }
                        </Typography>
                      ))}
                    </div>

                    <div>
                        <Typography className={classes.legend}>
                            Produtos
                        </Typography>
                        {(card.produtos).map((produto, index) => (
                            <Typography key={index} className="text">
                                {produto}
                                { ((card.produtos.length - 1) !== index) ? ', ': '' }
                            </Typography>
                        ))}
                    </div>

                    <div>
                        <Typography className={classes.legend}>
                            Tipos
                        </Typography>
                        {(card.tipos).map((tipo, index) => (
                            <Typography key={index} className="text">
                                {tipo}
                                { ((card.tipos.length - 1) !== index) ? ', ': '' }
                            </Typography>
                        ))}
                    </div>

                    <div>
                        <Typography className={classes.legend}>
                            Bairros
                        </Typography>
                        {(card.bairrosEntrega).map((bairro, index) => (
                            <Typography key={index} className="text">
                                {bairro}
                                { ((card.bairrosEntrega.length - 1) !== index) ? ', ': '' }
                            </Typography>
                        ))}
                        
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
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