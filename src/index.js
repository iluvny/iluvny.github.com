import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

class App extends React.Component {
    render() {
        return (
            <Header title="Nak's Page"/>
        );
    }
}

const appElement = document.getElementById('app');
ReactDOM.render(<App />, appElement);