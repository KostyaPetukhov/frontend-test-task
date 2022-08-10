import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

import horsesImg from '../../img/horses.gif';

const useStyles = makeStyles({
	greet: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
		minHeight: 360,
	},
	racingGif: {
		heigth: 360,
		width: 480,
	},
	banner: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	text: {
		fontSize: 28,
		color: '#fff',
		padding: 5,
	},
});

const Greet = (props) => {
	const { raceOn } = props;
	const classes = useStyles();

	return (
		<div className={classes.greet}>
			{raceOn ? (
				<div>
					<img
						src={horsesImg}
						alt='horses run'
						className={classes.racingGif}
					/>
				</div>
			) : (
				<div className={classes.banner}>
					<Typography variant='h3' className={classes.text}>
						Welcome to horse race!
					</Typography>
					<Typography variant='h4' className={classes.text}>
						In order to start race click on start button!
					</Typography>
				</div>
			)}
		</div>
	);
};

Greet.propTypes = {
	raceOn: PropTypes.bool.isRequired,
};

export default Greet;
