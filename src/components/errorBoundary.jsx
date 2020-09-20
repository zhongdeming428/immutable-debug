import React from 'react';

export class ErrorBoundary extends React.PureComponent {
    state = { err: null };

    componentDidCatch(err, errInfo) {
        this.setState({ err });
        debugger
        console.log('error');
    }

    render() {
        if (this.state.err) {
            return <div>{this.state.err.message}</div>;
        } else {
            return this.props.children;
        }
    }
}