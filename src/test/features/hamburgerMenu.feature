Feature: Hamburger menu functionality

  Scenario: Close hamburger menu by clicking the close icon
    Given the user has opened the hamburger menu
    When the user clicks on the close icon (X) on the side panel
    Then the hamburger menu should close
    And the user should see the home page content without the menu

  Scenario: Close hamburger menu by clicking outside the menu
    Given the user has opened the hamburger menu
    When the user clicks outside the hamburger menu area
    Then the hamburger menu should close
    And the user should see the home page content without the menu