import AbstractPage from './AbstractPage';

class WatchlistsPage extends AbstractPage {
  constructor() {
    super('Watchlists');
  };

  async open() {
    await super.open('/watchlists');
  }
}

module.exports = WatchlistsPage;
