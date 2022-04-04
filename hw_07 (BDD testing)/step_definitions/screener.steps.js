import { expect } from 'chai';
import { When, Then } from '@wdio/cucumber-framework';

import PageFactory from '../page_objects/PageFactory';

Then(/^the "([^"]*)" button is displayed$/, async (button) => {
  const page = await PageFactory.getPage('Screener');
  let isButtonDisplayed = null;

  switch (button) {
    case 'Create New Screener':
      isButtonDisplayed = await page.isCreateNewScreenButtonDisplayed();
      expect(isButtonDisplayed).to.be.true;
      break;
    default:
      throw new Error(`Option ${button} is not available`);
  }
});

Then(/^the "([^"]*)" button is clickable$/, async (button) => {
  // TODO: Implement a step that verifies that the Create New Screen button is clickable on the Screener page
});

When(/^the user clicks on the "([^"]*)" button$/, async (button) => {
  // TODO: Implement a step that clicks the button according to the given argument - "button"
});
