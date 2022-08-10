import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const useStyles = makeStyles({
	table: {
		width: '480px',
	},
	appBar: {
		backgroundColor: '#9E9E9E !important',
	},
	tableTitle: {
		fontWeight: '700 !important',
		cursor: 'pointer',
	},
	tableHead: {
		background: 'white',
		color: '#9fa0a1 !important',
		fontWeight: '700 !important',
	},
});

const TableData = () => {
	const classes = useStyles();

	const tableHead = [
		{ title: '№', align: 'left' },
		{ title: 'Horse', align: 'left' },
		{ title: 'Distance', align: 'center' },
	];

	const horses = useSelector((state) => state.horses.data);

	return (
		<div className={classes.table}>
			<AppBar position='static' className={classes.appBar}>
				<Tabs
					value='horses'
					indicatorColor='#A1887F !important'
					textColor='inherit'
					variant='fullWidth'
				>
					<Tab
						className={classes.tableTitle}
						label='Horses racing'
						value='horses'
					/>
				</Tabs>
			</AppBar>
			<TableContainer component={Paper}>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							{tableHead.map((cell) => (
								<TableCell
									key={cell.title}
									align={cell.align}
									className={classes.tableHead}
								>
									{cell.title}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{horses.map((horse, index) => (
							<TableRow key={horse.name}>
								<TableCell className={classes.cell}>
									{index + 1}
								</TableCell>
								<TableCell>{horse.name}</TableCell>
								<TableCell align='center'>
									{horse.distance}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TableData;
