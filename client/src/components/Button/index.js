import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
	buttonBlock: {
		margin: 10,
	},
	button: {
		backgroundColor: '#9E9E9E !important',
		fontWeight: '700 !important',
	},
});

const ButtonComponent = (props) => {
	const { handleStart, handleStop, raceOn } = props;
	const classes = useStyles();

	return (
		<div className={classes.buttonBlock}>
			<Button
				data-testid='race-on-btn'
				onClick={raceOn ? handleStop : handleStart}
				variant='contained'
				className={classes.button}
			>
				{raceOn ? 'Stop racing' : 'Start racing'}
			</Button>
		</div>
	);
};

ButtonComponent.propTypes = {
	handleStart: PropTypes.func.isRequired,
	handleStop: PropTypes.func.isRequired,
	raceOn: PropTypes.bool.isRequired,
};

export default ButtonComponent;
