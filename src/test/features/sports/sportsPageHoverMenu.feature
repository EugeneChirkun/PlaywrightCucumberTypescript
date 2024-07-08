@Current
Feature: Sports page menu item hover effect

  Scenario Outline: Hover over Sports page menu items
    Given the user is on the Sports page
    When the user hovers over the <Menu Item> menu item
    #And pause
    Then the <Menu Item> should change its background color to yellow rgb(251, 203, 0)

    Examples:
      | Menu Item   |
      | Sports      |
      | BetBuilder  |
      | In-play     |
      | Virtual     |
      | Casino      |
      | Live casino |
      | LV Bet Pot  |
