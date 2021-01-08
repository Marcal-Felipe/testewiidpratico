import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {
	Box,
	FormControlLabel,
	makeStyles,
	Switch,
	TextField,
} from '@material-ui/core';

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		width: 500,
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const AddVehicleDialog = ({ handleClose, open }) => {
	const classes = useStyles();

	return (
		<Box>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					Novo Veículo
				</DialogTitle>
				<DialogContent>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
					>
						<Box display="flex" justifyContent="space-between">
							<TextField id="standard-basic" label="Veículo" />
							<TextField id="standard-basic" label="Marca" />
						</Box>
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="baseline"
							marginBottom="10px"
							marginRight="70px"
						>
							<TextField id="standard-basic" label="Ano" />
							<FormControlLabel
								control={<Switch />}
								label="Vendido"
								color="primary"
							/>
						</Box>
						<Box>
							<TextField
								id="standard-multiline-static"
								label="Descrição"
								multiline
								rows={7}
								fullWidth
							/>
							{/* <TextField id="standard-basic" label="Descrição" height="200px" /> */}
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button
						autoFocus
						onClick={handleClose}
						variant="contained"
						color="default"
						className={classes.button}
					>
						ADD
					</Button>
					<Button
						autoFocus
						onClick={handleClose}
						variant="contained"
						color="default"
						className={classes.button}
					>
						FECHAR
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default AddVehicleDialog;
