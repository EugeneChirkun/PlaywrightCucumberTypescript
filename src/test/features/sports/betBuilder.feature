@Ignore
Feature: Bet Builder functionality

  Scenario: Access Bet Builder and select a sport
    Given the user is on the Sports page
    When the user clicks on the "Bet Builder" button
    Then the user should see options to select "Football", "Tennis", "Basketball", "Baseball"
    When the user clicks on the "Football" option
    Then the user should see regions to select: "Europe", "Brazil", "China", "USA", "South America", "Mexico", "Japan", "Norway", "Sweden"
    And each region should display a match counter next to its name

  Scenario: Select Brazil in Football Bet Builder
    Given the user is in the Football section of Bet Builder
    When the user clicks on the "Brazil" region
    Then the user should see options to select "Serie A" or "Serie B"
    When the user clicks on "Serie A"
    Then the user should see a list of upcoming matches
    And the user should see the series title "BRAZILIAN SERIE A"
    When the user clicks on "Serie B"
    Then the user should see a list of upcoming matches
    And the user should see the series title "BRAZILIAN SERIE B"


  Scenario Outline: Select region in Football Bet Builder
    Given the user is in the Football section of Bet Builder
    When the user clicks on the "<Region>" region
    Then the user should see a list of upcoming matches
    And the user should see the series title "<Series Title>"
    And each region should display a match counter next to its name
    And if there are live matches, they should be indicated as live

    Examples:
      | Region        | Series Title          |
      | Europe        | EURO                  |
      | China         | SUPER LEAGUE (CHINA)  |
      | USA           | MLS                   |
      | South America | COPA AMERICA          |
      | Mexico        | LIGA MX               |
      | Japan         | J1 LEAGUE             |
      | Norway        | ELITESERIEN           |
      | Sweden        | ALLSVENSKAN           |


  Scenario: Verify presence of the table with headers and rows of games and odds
    Given the user is in the Football section of Bet Builder
    And the user has selected a region "<Region>"
    Then the user should see a table with the following headers:
      | 1    |
      | X    |
      | 2    |
      | 1X   |
      | 12   |
      | X2   |
      | LINE |
      | OVER |
      | UNDER|
    And the table should have rows corresponding to games with the following information:
      | Time and date of the game |
      | Teams                     |
      | Odds under each header    |


  Scenario Outline: Verify single bet displays mini-card and correct Possible winning
    Given the user is in the Football section of Bet Builder
    And the user has selected a region "<Region>"
    When the user selects a game and places a bet on odds from column "<Column>"
    Then a mini-card should appear in the Betslip section with:
      | Date and time of the game |
      | Teams                     |
      | Selected bet type         |
      | Odds                      |
    When the user selects a stake of "<Stake>" euros
    Then the Possible winning should be the product of the selected stake and the odds
	
	Examples:
  | Region        | Column    | Stake |
  | Europe        | 1         | 10    |
  | Europe        | X         | 25    |
  | Europe        | 2         | 50    |
  | China         | 1X        | 100   |
  | USA           | 12        | 5     |
  | South America | X2        | 10    |
  | Mexico        | LINE      | 25    |
  | Japan         | OVER      | 50    |
  | Norway        | UNDER     | 100   |



  Scenario Outline: Place multiple bets on different games with random column selection unlogged
    Given the user is in the Football section of Bet Builder
    And the user has selected a region "<Region>"
    When the user selects a game from row 1 and places a bet on odds from column "<Column1>"
    And the user selects a game from row 2 and places a bet on odds from column "<Column2>"
    And the user selects a game from row 3 and places a bet on odds from column "<Column3>"
    And the user selects a game from row 4 and places a bet on odds from column "<Column4>"
    Then mini-cards for each selected game should appear in the Betslip section with:
      | Date and time of the game |
      | Teams                     |
      | Selected bet type         |
      | Odds                      |
    And the Combi option should be active
    And the Number of odds should be the product of the selected odds rounded up to two decimal places
    And a Boost percentage should be applied if applicable
    When the user selects a stake of "<Stake>" euros from the dropdown
    Then the Possible winning should be the product of the stake and the total odds
    When the user clicks on the E-BETSLIP button
    Then a dialog box should appear with the E-BETSLIP number
    Then the "log in and place bet" button should be displayed next to the E-BETSLIP button



Examples:
  | Region        | Column1 | Column2 | Column3 | Column4 | Stake |
  | Europe        | 1       | X       | 2       | 1X      | 10    |
  | China         | 1X      | 12      | X2      | LINE    | 25    |
  | USA           | OVER    | UNDER   | 1       | X       | 50    |
  | South America | 2       | 1X      | 12      | X2      | 100   |
  | Mexico        | LINE    | OVER    | UNDER   | 1       | 5     |
  | Japan         | X       | 2       | 1X      | 12      | 10    |
  | Norway        | X2      | LINE    | OVER    | UNDER   | 25    |
