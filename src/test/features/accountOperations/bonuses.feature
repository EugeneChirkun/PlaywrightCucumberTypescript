@Ignore
Feature: Bonuses

  Scenario: Claiming a welcome bonus
    Given the user is logged in
    And the user is on the promotions page
    When the user selects the welcome bonus promotion
    And the user clicks the "Claim Bonus" button
    Then the bonus should be added to the user's account
    And the user should see the updated bonus balance
