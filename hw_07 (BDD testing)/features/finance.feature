Feature: The Yahoo Finance Website

  As a the Yahoo Finance user
  I want to navigate through the Yahoo Finance website using the navigation menu
  So that the navigation menu is displayed

  Scenario: The user creates a new Screener
    Given the user is on the Home page
    When the user clicks on the Screeners navigation menu item
    Then the "Create New Screener" button is displayed
    And the "Create New Screener" button is clickable
    When the user clicks on the "Create New Screener" button
    Then the browser URL contains "/screener/new" on the Screener page
    # Implement the following step in common.steps.js file
    And the page title is "Free Stock Screener - Yahoo Finance" on the Screener page

  Scenario: The user sees navigation menu items
    Given the user is on the Home page
    Then the following navigation menu items are visible
    
      | Nav Menu Items    |
      | Watchlists        |
      | My Portfolio      |
      | Screeners         |
      | Markets           |
      | News              |
      | Personal Finance  |
      | Cryptocurrencies  |
      | Videos            |
      | Industries        |

  Scenario Outline: The user navigates through the navigation menu items
    Given the user is on the <page> page
    # Implement the following step in common.steps.js file
    Then the page title is "<title>" on the <page> page

      Examples:
        | page              | title                                                               |
        | Home              | Yahoo Finance - Stock Market Live, Quotes, Business & Finance News  |
        | Watchlists        | Curated Stock Watch Lists & Categories - Yahoo Finance              |
        | Portfolios        | Stock Portfolio & Tracker - Yahoo Finance                           |
        | Screener          | Stock Screeners - Yahoo Finance                                     |
        | Cryptocurrencies  | All Cryptocurrencies Screener - Yahoo Finance                       |
