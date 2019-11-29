import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import "./index.css";

import {smurfReducer} from './reducers/smurfReducer.js';
import App from "./components/App";

const store = createStore(smurfReducer);

//http://localhost:3333/smurfs
const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	rootElement
);	
