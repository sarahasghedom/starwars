Feature: Search for a Star Wars planet

  Background: Navigate to site
    Given I navigate to "localhost"
    And I search on "Planets"

  Scenario Outline: Search planet by full name
    When I search for "<search>" and click on the search button
    Then I see the full planet name "<planet>"
    And I see the population "<population>"
    And I see the climate "<climate>"
    And I see the gravity "<gravity>"

    Examples:
      | search    | planet    | population  | climate    | gravity    |
      | Nal Hutta | Nal Hutta | 7000000000  | temperate  | 1 standard |
      | Dagobah   | Dagobah   | unknown     | murky      | N/A        |
      | Chandrila | Chandrila | 1200000000  | temperate  | 1          |
      | Tholoth   | Tholoth   | unknown     | unknown    | unknown    |

  Scenario Outline: Search planet by partial name and clear search results
    When I search for "<search>" and click on the search button
    Then I see the full planet name "<planet>"
    And I see the population "<population>"
    And I see the climate "<climate>"
    And I see the gravity "<gravity>"
    When I search for " " and click on the search button
#    Then an empty page is returned

    Examples:
      | search | planet    | population  | climate    | gravity    |
      | Nal    | Nal Hutta | 7000000000  | temperate  | 1 standard |

  Scenario: Search for planet returns no results
    When I search for "Dagobah" and click on the search button
    Then I see the full planet name "Dagobah"
    And I see the population "unknown"
    And I see the climate "murky"
    And I see the gravity "N/A"
    When I search on "People"
    When I search for "Dagobah" and click on the search button
    Then there are no results found

  Scenario: Search unknown person
    When I search for "Earth" and click on the search button
    Then there are no results found
