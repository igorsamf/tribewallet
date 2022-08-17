import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
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
                        <button type="button">
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

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Table);
