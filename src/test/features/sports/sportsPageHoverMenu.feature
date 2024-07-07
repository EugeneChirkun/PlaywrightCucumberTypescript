@Ignore
Feature: Sports page menu item hover effect

  Scenario Outline: Hover over Sports page menu items
    Given the user is on the Sports page
    When the user hovers over the "<Menu Item>" menu item
    Then the menu item should change its background color to yellow (#fbcb00 or rgb(251,203,0))

    Examples:
      | Menu Item    |
      | Sports       |
      | Betbuilder   |
      | In-play      |
      | Virtual      |
      | Esport       |
      | Casino       |
      | Live casino  |
      | LV bet pot   |