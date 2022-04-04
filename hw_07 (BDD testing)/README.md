# Cucumber with WebdriverIO

### Description

For this task you have to create BDD tests to check 
[Finance Yahoo](https://finance.yahoo.com/). You have to practice writing test cases using Cucumber BDD approach and  WebdriverIO framework.

---

### Preparation

1. Clone the template project https://git.epam.com/yevhen_petryk/30-days-of-javascript.git

2. Open `27_Day_BDD_Testing` directory

  ```sh
  cd 27_Day_BDD_Testing
  ```

3. Install dependencies

  ```sh
  npm install
  ```

### Project stuff

##### Configs:

The [configs](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/tree/master/27_Day_BDD_Testing/configs) directory contains different configurations of WebdriverIO framework.

##### Features:

The [features](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/tree/master/27_Day_BDD_Testing/features) directory contains feature files using Gherkin syntax.

##### Page Objects:

The [page_objects](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/tree/master/27_Day_BDD_Testing/page_objects) directory contains page objects.

##### Step Definitions:

The [step_definitions](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/tree/master/27_Day_BDD_Testing/step_definitions) directory contains step definitions.

---

### Test run

  Run tests:

  ```sh
  npm test
  ```

### Expected result

```
The Yahoo Finance Website

    As a the Yahoo Finance user
    I want to navigate through the Yahoo Finance website using the navigation menu
    So that the navigation menu is displayed

    The user creates a new Screener
        Given the user is on the Home page
        When the user clicks on the Screeners navigation menu item
        Then the "Create New Screener" button is displayed
        And the "Create New Screener" button is clickable
        When the user clicks on the "Create New Screener" button
        Then the browser URL contains "/screener/new" on the Screener page
        And the page title is "Free Stock Screener - Yahoo Finance" on the Screener page

    The user sees navigation menu items
        Given the user is on the Home page
        Then the following navigation menu items are visible
            │ Nav Menu Items   │
            │ Watchlists       │
            │ My Portfolio     │
            │ Screeners        │
            │ Markets          │
            │ News             │
            │ Personal Finance │
            │ Cryptocurrencies │
            │ Videos           │
            │ Industries       │

    The user navigates through the navigation menu items
        Given the user is on the Home page
        Then the page title is "Yahoo Finance - Stock Market Live, Quotes, Business & Finance News" on the Home page

    The user navigates through the navigation menu items
        Given the user is on the Watchlists page
        Then the page title is "Curated Stock Watch Lists & Categories - Yahoo Finance" on the Watchlists page

    The user navigates through the navigation menu items
        Given the user is on the Portfolios page
        Then the page title is "Stock Portfolio & Tracker - Yahoo Finance" on the Portfolios page

    The user navigates through the navigation menu items
        Given the user is on the Screener page
        Then the page title is "Stock Screeners - Yahoo Finance" on the Screener page

    The user navigates through the navigation menu items
        Given the user is on the Cryptocurrencies page
        Then the page title is "All Cryptocurrencies Screener - Yahoo Finance" on the Cryptocurrencies page
```
