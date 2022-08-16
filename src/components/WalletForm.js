import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    getCurrencies();
  }

 getCurrencies = async () => {
   const result = await fetch('https://economia.awesomeapi.com.br/json/all')
     .then((resolve) => resolve.json())
     .catch((error) => error);

 };

   handleChange = ({ target }) => {
     const { name, value } = target;
     this.setState({ [name]: value });
   };

   render() {
     const { value, description, currency, method, tag } = this.state;
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
             name="currency"
             id="currency"
             data-testid="currency-input"
             value={ currency }
             onChange={ this.handleChange }
           />
         </label>
         <label htmlFor="method">
           <select
             name="method"
             data-testid="method-input"
             value={ method }
             type="checkbox"
             onChange={ this.handleChange }
           />
         </label>
         <label htmlFor="tag">
           <select
             name="tag"
             id="tag"
             value={ tag }
             onChange={ this.handleChange }
             data-testid="tag-input"
           />
         </label>
       </div>
     );
   }
}

const mapDispatchToProps = (dispatch) => {
  getCurrencies: (currencies) => dispatch(action(currencies))
};

export default connect(null, mapDispatchToProps)(WalletForm);
