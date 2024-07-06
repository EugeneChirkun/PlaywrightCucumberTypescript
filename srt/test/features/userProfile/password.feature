Feature: Change Password

  Scenario: Successful password change
    Given the user is logged in
    And the user is on the account settings page
    When the user enters the current password
    And the user enters a new valid password
    And the user confirms the new password
    And the user clicks the "Change Password" button
    Then the password should be updated successfully
    And the user should receive a confirmation message
