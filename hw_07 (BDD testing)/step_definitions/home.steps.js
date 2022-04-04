import { expect } from 'chai';
import { When, Then } from '@wdio/cucumber-framework';

import PageFactory from '../page_objects/PageFactory';

When(/^the user clicks on the (\w+) navigation menu item$/, async (menuItem) => {
  const page = await PageFactory.getPage('Home');
  await page.clickOnMenuItem(menuItem);
});

Then(/^the following navigation menu items are visible$/, async (table) => {
  const page = await PageFactory.getPage('Home');
  const actualMenuItems = await page.getMenuNavItemsText();
  const expectedMenuItems = table.rows().flat();
  expect(expectedMenuItems).to.eql(actualMenuItems);
});
