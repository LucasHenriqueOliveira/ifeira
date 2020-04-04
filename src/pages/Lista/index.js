import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './styles.css';
import logoImg from '../../assets/logo.png'; 
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
    {
        "id": 1,
        "nome": "Barraca do Zé",
        "email": "ze@teste.com.br",
        "telefones": ["11-97023-9342", "11-94234-5342", "11-97567-9088"],
        "produtos": [
            "legumes",
            "frutas nacionais",
            "frutas importadas"
        ],
        "tipos": [
            "orgânicos",
            "não orgânicos"
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
            "legumes",
            "frutas nacionais",
            "frutas importadas"
        ],
        "tipos": [
            "orgânicos",
            "não orgânicos"
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
            "legumes",
            "frutas nacionais",
            "frutas importadas"
        ],
        "tipos": [
            "orgânicos",
            "não orgânicos"
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
            "legumes",
            "frutas nacionais",
            "frutas importadas"
        ],
        "tipos": [
            "orgânicos",
            "não orgânicos"
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
            "legumes",
            "frutas nacionais",
            "frutas importadas"
        ],
        "tipos": [
            "orgânicos",
            "não orgânicos"
        ],
        "bairrosEntrega": [
            "Jardins",
            "Vila Mariana",
            "Moema"
        ]
    },
];

export default function Album() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            <Link className="logo" to="/">
                <img src={logoImg} alt="Feira" />  
            </Link>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <FormControl>

                </FormControl>
            </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.nome}
                    </Typography>
                    <Typography>
                        Email: {card.email}
                    </Typography>
                    <div>
                        <Typography>
                            Telefones
                        </Typography>
                        {(card.telefones).map((telefone, index) => (
                            <Typography key={index} className="telefones">
                                {telefone}
                                { ((card.telefones.length - 1) !== index) ? ' / ': '' }
                            </Typography>
                        ))}
                    </div>

                    <div>
                        <Typography>
                            Produtos
                        </Typography>
                        {(card.produtos).map((produto, index) => (
                            <Typography key={index} className="telefones">
                                {produto}
                                { ((card.produtos.length - 1) !== index) ? ', ': '' }
                            </Typography>
                        ))}
                    </div>

                    <div>
                        <Typography>
                            Tipos
                        </Typography>
                        {(card.tipos).map((tipo, index) => (
                            <Typography key={index} className="telefones">
                                {tipo}
                                { ((card.tipos.length - 1) !== index) ? ', ': '' }
                            </Typography>
                        ))}
                    </div>

                    <div>
                        <Typography>
                            Bairros
                        </Typography>
                        {(card.bairrosEntrega).map((bairro, index) => (
                            <Typography key={index} className="telefones">
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
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          iFeira
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          A sua feira em casa!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </div>
  );
}