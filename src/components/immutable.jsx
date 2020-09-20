import React from 'react';
import { Map, List, is, fromJS } from 'immutable';
import { ErrorBoundary } from './errorBoundary';

class ErrorMaker extends React.PureComponent {
	async componentDidMount() {
		try {
			await this.init();
		} catch {
			console.log('error ..')
		}
	}

	syncInit = () => {
		const a = undefined;
		return a.b;
	}

	init = async () => {
		throw new Error('async error');
	}

	render() {
		return <div>error maker</div>;
	}
}

const tmp = []
for (let i = 0; i < 1500; i++) {
	tmp.push(i);
}
export const Imm = () => {
	let map = new Map().withMutations(map => {
		for (let i = 0; i < 28; i++) {
			i % 2 === 0 && map.set(i, Math.random());
		}
	})
	map.get(6)
	// let map1 = map.set(1, 1);
	// console.log(map1)

	// let list = new List(Array(35).fill(Math.random()).map(() => Math.random()))
	// console.log(list)
	// console.log(map1.equals(map), is(map, map1))

	// console.log(map);
	let list = new List([1, 2, 3, 4]);
	// list.push(1, 2, 3)
	list = list.unshift(1, 2, 3)
	list = list.shift()
	list = list.shift()
	list = list.shift()

	return (
		<ErrorBoundary>
			<ErrorMaker />
		</ErrorBoundary>
	);
}