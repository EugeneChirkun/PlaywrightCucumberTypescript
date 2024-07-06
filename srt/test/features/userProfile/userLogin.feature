Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user is on the LVBet login page
    When the user enters a valid username and password
    And the user clicks the "Login" button
    Then the user should be redirected to the dashboard page
    And the user should see a welcome message with their username

  Scenario: Unsuccessful login with invalid credentials
    Given the user is on the LVBet login page
    When the user enters an invalid username and password
    And the user clicks the "Login" button
    Then the user should see an error message indicating invalid login credentials