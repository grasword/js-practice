import AbstractPage from './AbstractPage';

class ScreenerPage extends AbstractPage {
  constructor() {
    super('Screener');
  }

  get createNewScreenMenu() {
    return $(`.//div/h3/span[contains(text(),'Create a New Screener')]`);
  }

  async open() {
    await super.open('/screener');
  }

  async isCreateNewScreenButtonDisplayed() {
    return await this.isDisplayed(this.createNewScreenButton);
  }

  async isCreateNewScreenButtonClickable() {
    // TODO: Implement a method that verifies that the Create New Screen button is interactive.
    return await this.isClickable(this.createNewScreenButton);
  }

  async clickOnCreateNewScreenButton() {
    await this.click(this.createNewScreenButton);
    await browser.pause(2000);
    await this.waitForPageLoading();
  }
}

module.exports = ScreenerPage;
