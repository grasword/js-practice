import AbstractPage from './AbstractPage';

class ScreenerPage extends AbstractPage {
  constructor() {
    super('Screener');
  }

  get createNewScreenButton() {
    return $('div#signed-out-msg + a[href="/screener/new"]');
  }

  async open() {
    await super.open('/screener');
  }

  async isCreateNewScreenButtonDisplayed() {
    return await this.isDisplayed(this.createNewScreenButton);
  }

  async isCreateNewScreenButtonClickable() {
    // TODO: Implement a method that verifies that the Create New Screen button is interactive.
  }

  async clickOnCreateNewScreenButton() {
    await this.click(this.createNewScreenButton);
    await browser.pause(2000);
    await this.waitForPageLoading();
  }
}

module.exports = ScreenerPage;
