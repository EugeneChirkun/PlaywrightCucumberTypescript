Feature: Slot Games

  Scenario: Playing a slot game successfully
    Given the user is logged in
    And the user is on the casino games page
    When the user selects a slot game
    And the user clicks the "Play" button
    Then the slot game should load successfully
    And the user should be able to place a bet and spin the reels