import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './App.container';
import { Provider } from 'react-redux';
import store from './state/store';

const TypeRacer = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
};
ReactDOM.render(<TypeRacer />, document.getElementById('root'));
