@NonAuth
Feature: Search Games

  Scenario Outline: Searching for a specific game
    Given the user is on the LVBet home page
    When the user enters the name of a game <Game> in the search bar
    Then the <Game> appeared in the search results
    And the user clicks on the <Game> from search results
    Then the user is on the page of <Game>

    Examples:
      | Game              |
      | "Aviator"         |
      | "Megacity"        |
      | "Horizon Hunters" |
      | "Book of Dead"    |
      | "Lady Wolf Moon"  |
      | "Sweet Reward"    |
      | "Starburst"       |
      | "Money Train 4"   |
