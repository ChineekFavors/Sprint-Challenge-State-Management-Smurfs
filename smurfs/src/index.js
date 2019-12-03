import React,{useEffect} from "react";
import ReactDOM from "react-dom";

import logger from 'redux-logger';
import thunk from 'redux-thunk';


import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import "./index.css";

import {smurfReducer} from './reducers/smurfReducer.js';
import App from "./components/App";



const store = createStore(smurfReducer,applyMiddleware(thunk, logger));


//http://localhost:3333/smurfs
const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	rootElement
);	
