import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
	dialogContent: {
		width: 300,
		height: 120,
	},
	dialogTitle: {
		textAlign: 'center',
		fontSize: '24px !important',
		marginTop: '10px !important',
	},
	closeIcon: {
		position: 'absolute',
		left: '88%',
		top: '2%',
		color: 'inherit',
	},
});

const RaceResults = (props) => {
	const { open, setOpen } = props;
	const classes = useStyles();

	const horses = useSelector((state) => state.horses.data);
	const winners = horses.slice(0, 3);

	const handleCloseModal = () => setOpen(false);

	return (
		<div>
			<Dialog open={open} onClose={handleCloseModal}>
				<Box className={classes.closeIcon}>
					<IconButton onClick={handleCloseModal}>
						<CloseIcon />
					</IconButton>
				</Box>
				<DialogTitle>
					<Typography className={classes.dialogTitle}>
						Race results
					</Typography>
				</DialogTitle>
				<DialogContent className={classes.dialogContent}>
					{winners.map((item, index) => (
						<Typography
							fontSize={20}
							textAlign='center'
							padding={0.5}
							key={item.name}
						>
							{index + 1}. {item.name}
						</Typography>
					))}
				</DialogContent>
			</Dialog>
		</div>
	);
};

RaceResults.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
};

export default RaceResults;
