Feature: Transaction History

  Scenario: Viewing transaction history
    Given the user is logged in
    And the user is on the account page
    When the user navigates to the transaction history section
    Then the user should see a list of all transactions (deposits, withdrawals, bets)
    And the list should include details such as date, type, and amount