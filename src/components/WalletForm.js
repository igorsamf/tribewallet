import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    this.fetchCurrencie();
  }

 fetchCurrencie = async () => {
   const { dispatchCurrencies } = this.props;
   const result = await fetch('https://economia.awesomeapi.com.br/json/all')
     .then((resolve) => resolve.json())
     .catch((error) => error);
   dispatchCurrencies(result);
 };

   handleChange = ({ target }) => {
     const { name, value } = target;
     this.setState({ [name]: value });
   };

   render() {
     const { value, description, currency, method, tag } = this.state;
     const { currencies } = this.props;
     return (
       <div>
         <label htmlFor="value">
           <input
             name="value"
             id="value"
             type="number"
             data-testid="value-input"
             value={ value }
             onChange={ this.handleChange }
           />
         </label>
         <label htmlFor="description">
           <input
             name="description"
             id="description"
             type="text"
             data-testid="description-input"
             value={ description }
             onChange={ this.handleChange }
           />
         </label>
         <label htmlFor="currency">
           <select
             aria-label="currency"
             name="currency"
             id="currency"
             data-testid="currency-input"
             value={ currency }
             onChange={ this.handleChange }
           >
             {
               currencies.map((currecie, index) => (
                 <option key={ index }>{currecie}</option>
               ))
             }
           </select>
         </label>
         <label htmlFor="method">
           <select
             aria-label="method"
             name="method"
             data-testid="method-input"
             value={ method }
             type="checkbox"
             onChange={ this.handleChange }
           >
             <option>Dinheiro</option>
             <option>Cartão de crédito</option>
             <option>Cartão de débito</option>
           </select>
         </label>
         <label htmlFor="tag">
           <select
             aria-label="tag"
             name="tag"
             id="tag"
             value={ tag }
             onChange={ this.handleChange }
             data-testid="tag-input"
           >
             <option>Alimentação</option>
             <option>Lazer</option>
             <option>Trabalho</option>
             <option>Transporte</option>
             <option>Saúde</option>
           </select>
         </label>
         <div>
           <button
             type="button"
             name="button"
             onClick={ () => {} }
           >
             Adicionar despesa
           </button>
         </div>
       </div>
     );
   }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: (currencies) => dispatch(getCurrencies(currencies)),
});

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

WalletForm.propTypes = {
  dispatchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
