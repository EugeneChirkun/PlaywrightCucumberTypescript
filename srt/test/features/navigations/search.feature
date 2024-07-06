Feature: Search Games

  Scenario: Searching for a specific game
    Given the user is on the casino games page
    When the user enters the name of a game in the search bar
    And the user clicks the "Search" button
    Then the search results should display the relevant game(s)