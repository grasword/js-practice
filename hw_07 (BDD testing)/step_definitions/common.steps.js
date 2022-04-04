import { expect } from 'chai';
import { Given, Then } from '@wdio/cucumber-framework';

import PageFactory from '../page_objects/PageFactory';

Given(/^the user is on the (\w+) page$/, async (pageName) => {
  const page = await PageFactory.getPage(pageName);
  await page.open();
});

Then(/^the browser URL contains "([^"]*)" on the (\w+) page$/, async (url, pageName) => {
  // TODO: Implement a step that checks the browser url according to the given arguments - "url" and "pageName"
});
