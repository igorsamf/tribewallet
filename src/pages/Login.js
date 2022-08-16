import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../redux/actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };
  }

validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

handleChange = ({ target }) => {
  const { email, password } = this.state;
  const { name, value } = target;
  const minCaracter = 5;
  this.setState({ [name]: value }, () => {
    if (this.validateEmail(email) && password.length >= minCaracter) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  });
}

render() {
  const { email, password, buttonDisabled } = this.state;
  const { newUser, history } = this.props;
  return (
    <div>
      <label htmlFor="email">
        Email
        <input
          type="email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          placeholder="Digite seu e-mail"
        />
      </label>
      Senha
      <label htmlFor="password">
        <input
          type="password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          placeholder="Digite sua senha"
        />
      </label>
      <button
        type="button"
        onClick={ () => {
          newUser(email);
          history.push('/carteira');
        } }
        disabled={ buttonDisabled }
      >
        Entrar
      </button>
    </div>
  );
}
}
const mapDispatchToProps = (dispatch) => ({
  newUser: (email) => dispatch(addUser(email)),
});

Login.propTypes = {
  newUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.string,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
