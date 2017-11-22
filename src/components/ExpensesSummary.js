import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ quantity, total }) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{quantity}</span> expense{quantity !== 1 && 's'} totalling <span>{numeral(total / 100).format('$0,0.00')}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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