import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showFace: true,
            body: <Content />
        };
    }

    hashChangeListener() {
        let hash = window.location.hash.substring(1);
        console.log(hash);
        let state = {};
        if (!hash) {
            state.showFace = true;
            state.body = <Content />;
        } else {
            state.showFace = false;
            state.body = <div>{ hash }</div>;
        }

        this.setState(state);
    }

    componentDidMount() {
        window.addEventListener("hashchange", this.hashChangeListener.bind(this), false);
        this.hashChangeListener();
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.hashChangeListener.bind(this), false);
    }

    render() {
        return (
            <div>
                <Header title="Nak's Page" showFace={ this.state.showFace }/>
                { this.state.body }
            </div>
        );
    }
}

const appElement = document.getElementById('app');
ReactDOM.render(<App />, appElement);