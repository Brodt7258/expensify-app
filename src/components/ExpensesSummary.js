import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ quantity, total }) => {
  return (
    <div>
      <h1>Viewing {quantity} expense{quantity !== 1 && 's'} totalling {numeral(total / 100).format('$0,0.00')}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visExpenses = selectExpenses(state.expenses, state.filters);
  return {
    quantity: visExpenses.length,
    total: selectExpensesTotal(visExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);