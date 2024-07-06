Feature: Navigation to Sports page via hamburger menu

  Scenario: Access Sports page through hamburger menu
    Given the user is on the LVBet home page
    When the user clicks on the hamburger menu icon in the top left corner
    And the user selects the "Sporty" option from the menu
    Then the user should be redirected to the Sports page
    And the user should see the menu items "Sports", "Betbuilder", "In-play", "Virtual", "Esport", "Casino", "Live casino", "LV bet pot"
    And "Esport" should be highlighted in green
    And "new" next to "LV bet pot" should be highlighted in red

  Scenario: Access Sports page through header menu
    Given the user is on the LVBet home page
    When the user clicks on the "Sporty" option in the header menu
    Then the user should be redirected to the Sports page
    And the user should see the menu items "Sports", "Betbuilder", "In-play", "Virtual", "Esport", "Casino", "Live casino", "LV bet pot"
    And "Esport" should be highlighted in green
    And "new" next to "LV bet pot" should be highlighted in red
