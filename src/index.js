import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './state/store';

const TypeRacer = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};
ReactDOM.render(<TypeRacer />, document.getElementById('root'));
