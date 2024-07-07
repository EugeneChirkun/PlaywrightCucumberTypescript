@Ignore
Feature: Account Funding

  Scenario: Successful deposit into the user account
    Given the user is logged in
    And the user is on the deposit page
    When the user selects a deposit method
    And the user enters valid payment details
    And the user clicks the "Deposit" button
    Then the deposit should be processed successfully
    And the user's account balance should be updated accordingly
