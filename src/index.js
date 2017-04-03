import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="Nak's Page"/>
                <Content />
            </div>
        );
    }
}

const appElement = document.getElementById('app');
ReactDOM.render(<App />, appElement);