import AbstractPage from './AbstractPage';

class PortfoliosPage extends AbstractPage {
  constructor() {
    super('Portfolios');
  };

  async open() {
    await super.open('/portfolios');
  }
}

module.exports = PortfoliosPage;
