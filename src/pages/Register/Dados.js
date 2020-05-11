import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	formControl: {
		fullWidth: true,
		display: 'flex',
    },
    dados: {
        padding: '0 20px',
        marginBottom: 15
    }
}));

export default function Dados({ setForm, formData }) {
	const { nome, email, whatsapp, senha } = formData;
	const classes = useStyles();

	return (
		<React.Fragment>
			<Grid container spacing={1} className={classes.dados}>
				<Grid item xs={12}>
					<TextField
						required
						id="nome"
						name="nome"
						label="Nome da barraca"
						fullWidth
						value={nome}
						onChange={setForm}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
                        type="email" 
                        id="email"
                        name="email"
                        autoComplete="email"
                        label="Email"
                        fullWidth
                        value={email}
						onChange={setForm}
					/>
				</Grid>
				<Grid item xs={12}>
                    <TextField 
                        required
                        id="whatsapp"
						name="whatsapp"
                        label="WhatsApp"
                        fullWidth
                        value={whatsapp}
                        onChange={setForm}
                    />
				</Grid>
				<Grid item xs={12}>
					<TextField
                        required
						id="senha"
						name="senha"
                        label="Senha"
                        type="password"
						fullWidth
						value={senha}
						onChange={setForm}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
