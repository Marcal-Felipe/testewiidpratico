import React from 'react';
import {
	Box,
	Button,
	Divider,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(60),
			height: theme.spacing(50),
		},
	},

	button: {
		margin: theme.spacing(1),
	},
}));

const CustomPaper = () => {
	const classes = useStyles();

	return (
		<Box className={classes.root} display="flex" flexDirection="column">
			<Paper elevation={0} variant="outlined" square>
				<Box style={{ padding: '20px' }} display="flex" flexDirection="column">
					<Box>
						<Typography variant="h5">Integra GS 1.8</Typography>
					</Box>

					<Box
						display="flex"
						justifyContent="space-between"
						style={{ marginTop: '20px', marginRight: '200px' }}
					>
						<Box display="flex" flexDirection="column">
							<Typography variant="subtitle1" color="textPrimary">
								Marca
							</Typography>
							<Typography variant="subtitle2" style={{ color: '#ccc' }}>
								Acura
							</Typography>
						</Box>

						<Box display="flex" flexDirection="column">
							<Typography variant="subtitle1" color="textPrimary">
								Ano
							</Typography>
							<Typography variant="subtitle2" style={{ color: '#ccc' }}>
								{' '}
								2015
							</Typography>
						</Box>
					</Box>

					<Box style={{ marginTop: '30px' }}>
						<Typography
							variant="body2"
							style={{ wordWrap: 'break-word', height: '175px' }}
						>
							Integra GS está equipado com um motor Em linha de 4 cilindros
							atmosférico, a Gasolina. Este motor produz uma potência máxima de
							172 CV às 7600 rotações e um torque máximo de 174.0 Nm às 7600
							rotações. A potência é transmitida à estrada através de um câmbio
							Manual de 5 marchas, e o tipo de tração é dianteira (FWD).
						</Typography>
					</Box>
				</Box>
				<Box>
					<Divider variant="fullWidth" />
				</Box>

				<Box
					style={{ marginLeft: '10px', marginRight: '20px' }}
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					<Button
						variant="contained"
						color="default"
						className={classes.button}
						startIcon={<EditIcon />}
					>
						EDITAR
					</Button>
					<LocalOfferIcon />
				</Box>
			</Paper>
		</Box>
	);
};

export default CustomPaper;
