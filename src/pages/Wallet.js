import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  change = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <WalletForm />
        <Table change={ this.change } />
      </div>
    );
  }
}

export default Wallet;
