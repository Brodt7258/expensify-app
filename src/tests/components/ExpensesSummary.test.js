import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should correctly render ExpensesSummary with a single expense', () => {
  const quantity = 1;
  const total = 100;
  const wrapper = shallow(<ExpensesSummary quantity={quantity} total={total}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const quantity = 3;
  const total = 415300;
  const wrapper = shallow(<ExpensesSummary quantity={quantity} total={total}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render nothing with no expenses', () => {
  const quantity = 0;
  const total = 0;
  const wrapper = shallow(<ExpensesSummary quantity={quantity} total={total}/>);
  expect(wrapper).toMatchSnapshot();
});