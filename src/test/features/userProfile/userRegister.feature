Feature: User Registration

  Scenario: Successful registration of a new user
    Given the user is on the LVBet registration page
    When the user enters valid registration details
    And the user accepts the terms and conditions
    And the user clicks the "Register" button
    Then the user should receive a confirmation email
    And the user should be redirected to the dashboard page
    And the user should see a welcome message with their username