import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';

import { makeStyles } from '@mui/styles';

import { addData } from './redux/reducers/horsesSlice';
import backgroundImg from './img/background.jpg';
import TableData from './components/Table';
import Greet from './components/Greet';
import ButtonComponent from './components/Button';

const useStyles = makeStyles({
	app: {
		margin: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundImage: `url(${backgroundImg})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
	},
	button: {
		backgroundColor: '#9E9E9E !important',
		fontWeight: '700 !important',
	},
});

function App() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const socket = io('http://localhost:3002/');

	const [raceOn, setRaceOn] = useState(false);

	const handleStart = () => {
		setRaceOn(true);
	};

	const handleStop = () => {
		setRaceOn(false);
		socket.disconnect();
	};

	const handleRaceOver = (arr) => {
		if (arr.some((item) => item.distance === 1000)) {
			const totalDistance = arr.reduce(
				(partialSum, a) => partialSum + a.distance,
				0
			);
			if (totalDistance === 6000) handleStop();
		}
	};

	useEffect(() => {
		if (raceOn) {
			socket.on('connect', () => {
				console.log(socket.connected);
			});
			socket.emit('start', () => console.log(socket));
			socket.on('ticker', function (quotes) {
				handleRaceOver(quotes);
				dispatch(
					addData(quotes.sort((a, b) => b.distance - a.distance))
				);
				console.log(quotes);
			});
		}
	}, [raceOn]);

	return (
		<div className={classes.app}>
			<Greet raceOn={raceOn} />
			<TableData />
			<ButtonComponent
				handleStart={handleStart}
				handleStop={handleStop}
				raceOn={raceOn}
			/>
		</div>
	);
}

export default App;
