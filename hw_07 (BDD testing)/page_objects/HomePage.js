import AbstractPage from './AbstractPage';

class HomePage extends AbstractPage {
  constructor() {
    super('Home');
  }

  async open() {
    await super.open('/');
  }

  get menuNavItems() {
    return $$('li[data-subnav-type] a.nr-applet-nav-item');
  }

  menuItemElement(menuItemName) {
    return $(`.//a[contains(@class, "nr-applet-nav-item")][@title="${menuItemName}"]`);
  }

  async getMenuNavItemsText() {
    // TODO: Implement a method that returns all text labels from the navigation menu
    return await this.getTextFromElements(this.menuNavItems);
  }

  async clickOnMenuItem(menuItemName) {
    await this.click(await this.menuItemElement(menuItemName));
    await this.waitForPageLoading();
  }
}

module.exports = HomePage;
