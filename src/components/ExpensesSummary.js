import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ quantity, total }) => {
  return (
    !!quantity 
    &&
    <div>
      <p>Viewing {quantity} expense{quantity > 1 && 's'} totaling {numeral(total / 100).format('$0,0.00')}</p>
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