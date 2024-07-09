Feature: Bet Builder functionality

  Scenario: Access Bet Builder and select a sport
    Given the user is on the Sports page
    When the user clicks on the "Bet Builder" button
    Then the user should see at least one sport to select
    When the user clicks on the "Football" dashboard option
    Then the user should see at least one region to select
    And each region should display a match counter next to its name

  Scenario: Select Brazil in Football Bet Builder
    Given the user is in the Football section of Bet Builder
    When the user clicks on the "Brazil" region
    Then the user should see options to select
      | Brazilian Serie A |
      | Serie B           |
    When the user clicks on the "Brazilian Serie A" dashboard option
    Then the user should see a list of upcoming matches
    And the user should see the dashboard headline "Brazilian Serie A"
    When the user goes back
    And the user clicks on the "Serie B" dashboard option
    Then the user should see a list of upcoming matches
    And the user should see the dashboard headline "Serie B"
