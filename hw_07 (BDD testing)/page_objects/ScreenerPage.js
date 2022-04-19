import AbstractPage from './AbstractPage';

class ScreenerPage extends AbstractPage {
  constructor() {
    super('Screener');
  }

  get createNewScreenMenu() {
    return $(`.//div/h3/span[contains(text(),'Create a New Screener')]`);
  }

  async getButton(buttonName) {
    return buttonName === 'Create New Screener'
      ? $('//*[@id="signed-out-msg"]/following-sibling::button')
      : $(`.//a/h4[contains(text(), '${buttonName}')]`);
  }

  async open() {
    await super.open('/screener');
  }

  async isButtonDisplayed(buttonName) {
    const button = await this.getButton(buttonName);
    await this.waitForDisplayed(button);
    return this.isDisplayed(button);
  }

  async isButtonClickable(buttonName) {
    const button = await this.getButton(buttonName);
    await this.waitForClickable(button);
    return this.isClickable(button);
  }

  async clickOnButton(buttonName) {
    const button = await this.getButton(buttonName);
    await this.click(button);
    await browser.pause(2000);
    await this.waitForPageLoading();
  }

  async isCreateNewScreenMenuDisplayed() {
    const createNewScreenMenu = await this.createNewScreenMenu;
    await this.waitForDisplayed(createNewScreenMenu);
    return this.isDisplayed(createNewScreenMenu);
  }
}

module.exports = ScreenerPage;
