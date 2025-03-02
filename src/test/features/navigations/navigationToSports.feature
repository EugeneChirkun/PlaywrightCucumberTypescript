@Sports @NonAuth
Feature: Navigation

  Scenario: Access Sports page through hamburger menu
    Given the user is on the LVBet home page
    When the user clicks on the hamburger menu icon in the top left corner
    And the user selects the "Sports" option from the menu
    Then the user should be redirected to the Sports page
    And the user should see the menu items
      | Sports      |
      | BetBuilder  |
      | In-play     |
      | Virtual     |
      | E-Sport     |
      | Casino      |
      | Live casino |
      | LV Bet Pot  |

  Scenario: Access Sports page through header menu
    Given the user is on the LVBet home page
    When the user clicks on the "Sports" option in the header menu
    Then the user should be redirected to the Sports page
    And the user should see the menu items
      | Sports      |
      | BetBuilder  |
      | In-play     |
      | Virtual     |
      | E-Sport     |
      | Casino      |
      | Live casino |
      | LV Bet Pot  |
