import React, { useState } from 'react';
import {
	AppBar,
	Box,
	makeStyles,
	Toolbar,
	Typography,
	IconButton,
	Divider,
	TextField,
	Grid,
} from '@material-ui/core';

import CustomList from '../../components/CustomList/CustomList';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import CustomPaper from '../../components/CustomPaper/CustomPaper';
import AddVehicleDialog from '../AddVehicleDialog/AddVehicleDialog';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100vh',
		backgroundColor: '#ccc',
	},
}));

const Main = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<Box className={classes.root}>
			<AppBar position="static" style={{ backgroundColor: 'black' }}>
				<Toolbar>
					<Grid container spacing={3} alignItems="center">
						<Grid item xs={3}></Grid>
						<Grid item xs={3}>
							<Typography variant="h6">Full Stack</Typography>
						</Grid>
						<Grid item xs={6}>
							<Box
								style={{
									backgroundColor: '#ccc',
									padding: '8px',
									height: '75%',
								}}
							>
								<TextField label="BUSCAR por um veículo" fullWidth />
							</Box>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>

			<Box display="flex" flexDirection="column" alignItems="center">
				<Box
					display="flex"
					style={{ width: '1000px', marginTop: '20px' }}
					alignItems="center"
					justifyContent="space-between"
				>
					<Box>
						<Typography variant="h5" style={{ marginLeft: '25px' }}>
							Veículo
						</Typography>
					</Box>
					<Box>
						<IconButton
							onClick={handleOpen}
							color="primary"
							aria-label="add an vehicle"
							style={{ marginRight: '20px' }}
						>
							<AddCircleIcon style={{ color: 'black' }} />
						</IconButton>
						<AddVehicleDialog handleClose={handleClose} open={open} />
					</Box>
				</Box>
				<Box>
					<Divider
						variant="middle"
						style={{ width: '950px', alignSelf: 'center' }}
					/>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Box display="flex" flexDirection="column">
						<Box>
							<Typography variant="h6">Lista de Veículos</Typography>
						</Box>

						<Box marginTop="9px">
							<CustomList />
						</Box>
					</Box>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
					>
						<Box>
							<Typography variant="h6" style={{ marginLeft: '10px' }}>
								Detalhes
							</Typography>
						</Box>

						<Box>
							<CustomPaper />
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Main;
