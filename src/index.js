import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './comps/App';
import registerServiceWorker from './uts/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
