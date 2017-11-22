import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add another expense with correct data', () => {
  const expense = {
    id: '4',
    description: 'test',
    amount: 100,
    note: '',
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const amount = 200;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test('should not edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount: -100
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [
      {
        id: '4',
        description: 'test',
        amount: 100,
        note: '',
        createdAt: 0
      }, {
        id: '5',
        description: 'test2',
        amount: 1200,
        note: '',
        createdAt: 1000
      }, {
        id: '6',
        description: 'test3',
        amount: 12300,
        note: '',
        createdAt: 10001000
      }
    ]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(action.expenses);
});