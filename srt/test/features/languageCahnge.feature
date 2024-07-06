Feature: Language change functionality

  Scenario: Change language from Polish to English
    Given the user is on the LVBet home page in Polish
    When the user clicks on the hamburger menu icon in the top left corner
    And the user clicks on the language dropdown menu
    And the user selects "English" from the dropdown options
    Then the website language should change to English
    And the user should see all text content on the page in English

  Scenario: Change language from English to Polish
    Given the user is on the LVBet home page in English
    When the user clicks on the hamburger menu icon in the top left corner
    And the user clicks on the language dropdown menu
    And the user selects "Polski" from the dropdown options
    Then the website language should change to Polish
    And the user should see all text content on the page in Polish
