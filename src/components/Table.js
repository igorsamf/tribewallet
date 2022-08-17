import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpensesAction } from '../redux/actions';

class Table extends Component {
  removeExpenses = ({ target: { name } }) => {
    const { expenses, removeExpenses, change } = this.props;
    const objeto = expenses.filter((e) => e.id !== parseFloat(name));
    const field = objeto.reduce((acc, e) => {
      const { value, exchangeRates, currency } = e;
      return (acc + (
        parseFloat(value)
        * parseFloat(exchangeRates[currency].ask)
      )).toFixed(2);
    }, 0);
    removeExpenses(objeto, field);
    change();
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            <tbody>
              {
                expenses.map((expense) => {
                  const {
                    id,
                    description,
                    method,
                    value,
                    tag,
                    exchangeRates,
                    currency,
                  } = expense;
                  return (
                    <tr key={ id }>
                      <td>{description}</td>
                      <td>{tag}</td>
                      <td>{method}</td>
                      <td>{parseFloat(value).toFixed(2)}</td>
                      <td>{exchangeRates[currency].name}</td>
                      <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
                      <td>{(exchangeRates[currency].ask * value).toFixed(2)}</td>
                      <td>BRL</td>
                      <td>
                        <button
                          type="button"
                          onClick={ this.removeExpenses }
                          data-testid="delete-btn"
                          name={ id }
                        >
                          REMOVER DESPESA
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </thead>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeExpenses: (objeto, field) => dispatch(removeExpensesAction(objeto, field)),
});

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeExpenses: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
