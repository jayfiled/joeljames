import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Hello from './components/Hello';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Hello/>, document.getElementById('root'));

serviceWorker.unregister();
