import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: -21000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 400, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1000 }));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));