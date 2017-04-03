import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App'

const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(<App />, rootElement);
