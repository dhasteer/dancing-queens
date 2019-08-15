import { createForms } from 'react-redux-form';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { contactUs } from './forms';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			...createForms({
				contact: contactUs
			})
		}),
		applyMiddleware(thunk, logger)
	);

	return store;
}