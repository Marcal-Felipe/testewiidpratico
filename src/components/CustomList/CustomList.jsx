import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '10px',
		width: '450px',
		maxWidth: '700px',
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingRight: theme.spacing(4),
	},
}));

const CustomList = () => {
	const classes = useStyles();

	return (
		<Box>
			<ListItem className={classes.root} button>
				<ListItemText primary="FIAT" secondary="Palio G5 SP.1.6 Flex, 2016" />
				<ListItemIcon>
					<LocalOfferIcon style={{ marginLeft: '60px' }} />
				</ListItemIcon>
			</ListItem>
			<ListItem className={classes.root} button>
				<ListItemText primary="FIAT" secondary="Palio G5 SP.1.6 Flex, 2016" />
				<ListItemIcon>
					<LocalOfferIcon style={{ marginLeft: '60px' }} />
				</ListItemIcon>
			</ListItem>
			<ListItem className={classes.root} button>
				<ListItemText primary="FIAT" secondary="Palio G5 SP.1.6 Flex, 2016" />
				<ListItemIcon>
					<LocalOfferIcon style={{ marginLeft: '60px' }} />
				</ListItemIcon>
			</ListItem>
		</Box>
	);
};

export default CustomList;
