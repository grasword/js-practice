import HomePage from './HomePage';
import CryptocurrenciesPage from './CryptocurrenciesPage';
import WatchlistsPage from './WatchlistsPage';
import PortfoliosPage from './PortfoliosPage';
import ScreenerPage from './ScreenerPage';

class PageFactory {
  constructor() {
    this.listOfPages = [
      new HomePage(),
      new CryptocurrenciesPage(),
      new WatchlistsPage(),
      new PortfoliosPage(),
      new ScreenerPage(),
    ];
  }

  async getPage(pageName) {
    const targetPage = this.listOfPages.find((page) => {
      return page.pageName === pageName; 
    });
    
    if (targetPage) {
      return targetPage;
    } else {
      const arrayOfPages = this.listOfPages.map((page) => {
        return page.pageName; 
      });
      
      throw new Error(`No page with [${pageName}] found in pages array [${arrayOfPages}]`);
    }
  }
}

module.exports = new PageFactory();
