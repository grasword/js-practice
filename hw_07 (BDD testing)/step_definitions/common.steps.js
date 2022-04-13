import { expect } from 'chai';
import { Given, Then } from '@wdio/cucumber-framework';

import PageFactory from '../page_objects/PageFactory';
import config from '../configs/AppConfig';

Given(/^the user is on the (\w+) page$/, async (pageName) => {
  const page = await PageFactory.getPage(pageName);
  await page.open();
});

Then(/^the browser URL contains "([^"]*)" on the (\w+) page$/, async (path, pageName) => {
  // TODO: Implement a step that checks the browser url according to the given arguments - "path" and "pageName"
  const page = await PageFactory.getPage(pageName);
  const expectedUrl = new URL(path, config.baseUrl).href;
  const actualUrl = await page.getUrl();
  expect(expectedUrl).to.eql(actualUrl);
});

Then(/^the page title is "([^"]*)" on the (\w+) page$/, async (title, pageName) => {
  const page = await PageFactory.getPage(pageName);
  const expectedTitle = title;
  const actualTitle = await page.getTitle();
  expect(actualTitle).to.eql(expectedTitle);
  // The test for the "Screener" page is always skipped for some reason
});
