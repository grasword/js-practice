import { expect } from 'chai';
import { When, Then } from '@wdio/cucumber-framework';

import PageFactory from '../page_objects/PageFactory';

Then(/^the "([^"]*)" button is displayed$/, async (button) => {
  const page = await PageFactory.getPage('Screener');
  const isButtonDisplayed = await page.isButtonDisplayed(button);
  expect(isButtonDisplayed).to.be.true;
});

Then(/^the "([^"]*)" button is clickable$/, async (button) => {
  // TODO: Implement a step that verifies that the Create New Screen button is clickable on the Screener page
  const page = await PageFactory.getPage('Screener');
  const isButtonClickable = await page.isButtonDisplayed(button);
  expect(isButtonClickable).to.be.true;
});

When(/^the user clicks on the "([^"]*)" button$/, async (button) => {
  // TODO: Implement a step that clicks the button according to the given argument - "button"
  const page = await PageFactory.getPage('Screener');
  await page.clickOnButton(button);
});

Then(/^the "Create a New Screener" menu is displayed$/, async () => {
  const page = await PageFactory.getPage('Screener');
  const isCreateNewScreenMenuDisplayed = await page.isCreateNewScreenMenuDisplayed();
  expect(isCreateNewScreenMenuDisplayed).to.be.true;
});

Then(/^the page title is "([^"]*)" on the Screener page$/, async (title) => {
  const page = await PageFactory.getPage('Screener');
  const expectedTitle = title;
  const actualTitle = await page.getTitle();
  expect(actualTitle).to.eql(expectedTitle);
});
