module.exports = class AbstractPage {
  constructor(pageName) {
    this.pageName = pageName;
  };

  async open(pageUrl) {
    await browser.url(pageUrl);
    await this.waitForPageLoading();
  }

  async waitForPageLoading() {
    try {
      await browser.waitUntil(async () => {
        const state = await browser.execute('return document.readyState;');
        return state === 'complete';
      },
      {
        timeout: 10000,
        interval: 1000,
      },);
    } catch (error) {
      if (error.name === 'TimeoutError') {
        throw new Error('Page loading timeout');
      } else {
        throw error;
      }
    }
  }

  async waitForDisplayed(element) {
    try {
      await element.waitForDisplayed({ timeout: 10000 });
    } catch (error) {
      if (error.name === 'TimeoutError') {
        throw new Error('Time for waiting element is out, element still not displayed');
      } else {
        throw error;
      }
    }
  }

  async waitForClickable(element) {
    try {
      await element.waitForClickable({ timeout: 10000 });
    } catch (error) {
      if (error.name === 'TimeoutError') {
        throw new Error(`Time for waiting element is out, element still not clickable`);
      } else {
        throw error;
      }
    }
  }

  async getUrl() {
    return await browser.getUrl();
  }

  async getTitle() {
    return await browser.getTitle();
  }

  async getTextFromElements(elements) {
    return Promise.all(await elements.map(async (item) => {
      return (await item.getText()).trim();
    }),).then((items) => {
      return items.filter(Boolean);
    });
  }

  async isDisplayed(element) {
    return await element.isDisplayed();
  }

  async isClickable(element) {
    return await element.isClickable();
  }

  async click(element) {
    await this.waitForClickable(await element);
    await element.click();
  }

  async close() {
    await browser.closeWindow();
  }
};
