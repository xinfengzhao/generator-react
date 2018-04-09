import React from 'react';
import ReactDOM from 'react-dom';
import './styles/layout.less';
import registerServiceWorker from './registerServiceWorker';
import AppStore from './stores/AppStore';
import App from './components/App';

const store = new AppStore();
ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);

registerServiceWorker();
