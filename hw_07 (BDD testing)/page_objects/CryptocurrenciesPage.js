import AbstractPage from './AbstractPage';

class CryptocurrenciesPage extends AbstractPage {
  constructor() {
    super('Cryptocurrencies');
  };

  async open() {
    await super.open('/cryptocurrencies');
  }
}

module.exports = CryptocurrenciesPage;
