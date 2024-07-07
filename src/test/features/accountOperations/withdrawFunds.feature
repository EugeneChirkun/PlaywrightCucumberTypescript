@Ignore
Feature: Withdraw Funds

  Scenario: Successful withdrawal of funds
    Given the user is logged in
    And the user is on the withdrawal page
    When the user selects a withdrawal method
    And the user enters a valid amount to withdraw
    And the user clicks the "Withdraw" button
    Then the withdrawal request should be processed successfully
    And the user should receive a confirmation message
    And the user's account balance should be updated accordingly
