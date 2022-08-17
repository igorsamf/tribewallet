import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, field, currency } = this.props;
    return (
      <div>
        <h2 data-testid="email-field">
          {email}
        </h2>
        <h2 data-testid="total-field">{parseFloat(field).toFixed(2)}</h2>
        <h2 data-testid="header-currency-field">{currency}</h2>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
  field: store.wallet.field,
  currency: store.wallet.currency,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  field: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
