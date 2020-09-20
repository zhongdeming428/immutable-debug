import React from 'react';

const ChildB = ({ text }) => {
	console.log(`updated: B ===> ${text}`);
	return <span>{text}</span>;
}

const ChildC = ({ text }) => {
	console.log(`updated: C ===> ${text}`);
	return <span>{text}</span>;
}

export class TestRender extends React.Component {
	state = {
		childA: {
			childB: {
				text: 'B'
			},
			childC: {
				text: 'C'
			}
		}
	}
	updateB = () => {
		this.setState({
			childA: {
				...this.state.childA,
				childB: {
					text: Math.random().toString()
				}
			}
		});
	}
	updateC = () => {
		this.setState({
			childA: {
				...this.state.childA,
				childC: {
					text: Math.random().toString()
				}
			}
		});
	}
	render() {
		return (
			<div>
				<p>
					<ChildB text={this.state.childA.childB.text} />
					<button onClick={this.updateB}>updateB</button>
				</p>
				<p>
					<ChildC text={this.state.childA.childC.text} />
					<button onClick={this.updateC}>updateC</button>
				</p>
			</div>
		)
	}
}