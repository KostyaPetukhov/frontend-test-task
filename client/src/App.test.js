import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import Greet from './components/Greet';
import TableData from './components/Table';
import ButtonComponent from './components/Button';
import reducer, { addData, deleteData } from './redux/reducers/horsesSlice';
import store from './redux/store';

test('render greet element', async () => {
	render(<Greet />);
	const greet = screen.getByText(/Welcome/i);
	expect(greet).toBeInTheDocument();
});

test('renders button element', () => {
	render(<ButtonComponent />);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
});

test('renders table element', () => {
	render(
		<Provider store={store}>
			<TableData />
		</Provider>
	);
	const table = screen.getByRole('table');
	expect(table).toBeInTheDocument();
});

describe('getDataValue', () => {
	test('add data', () => {
		expect(reducer({ name: 'Horse', distance: 0 }, addData())).toEqual({
			name: 'Horse',
			distance: 0,
		});
	});
	test('delete data', () => {
		expect(reducer({}, deleteData())).toEqual({});
	});
	test('with empty state', () => {
		expect(reducer(undefined, addData())).toEqual({ data: undefined });
		expect(reducer(undefined, deleteData())).toEqual({ data: undefined });
	});
});

test('race on', () => {
	render(
		<Provider store={store}>
			<ButtonComponent />
		</Provider>
	);
	const button = screen.getByTestId('race-on-btn');
	userEvent.click(button);
	const start = screen.getByText(/Start/i);
	expect(start).toBeInTheDocument();
});

const handleRaceOver = (arr) => {
	if (arr.some((item) => item.distance === 1000)) {
		const totalDistance = arr.reduce(
			(partialSum, a) => partialSum + a.distance,
			0
		);
		if (totalDistance === 6000) return true;
	}
};

describe('handleRaceOver', () => {
	test('true value', () => {
		expect(
			handleRaceOver([
				{ distance: 1000 },
				{ distance: 1000 },
				{ distance: 1000 },
				{ distance: 1000 },
				{ distance: 1000 },
				{ distance: 1000 },
			])
		).toEqual(true);
	});
	test('false value', () => {
		expect(
			handleRaceOver([
				{ distance: 5000 },
				{ distance: null },
				{ distance: '0' },
			])
		).not.toEqual(true);
	});
	test('empty array', () => {
		expect(handleRaceOver([])).toEqual(undefined);
	});
});
