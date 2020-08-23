Feature: Search for a Star Wars character

  Background: Navigate to site
    Given I navigate to "localhost"
    And I search on "People"

  Scenario Outline: Search person by first name
    When I search for "<search>" and click on the search button
    Then I see the full name "<name>"
    And I see the gender "<gender>"
    And I see the birth year "<birthYear>"
    And I see the eye color "<eyeColor>"
    And I see the skin color "<skinColor>"

    Examples:
      | search  | name            | gender | birthYear | eyeColor | skinColor |
      | Han     | Han Solo        | male   | 29BBY     | brown    | fair      |
      | Darth   | Darth Vader     | male   | 41.9BBY   | yellow   | white     |
      | Mon     | Mon Mothma      | female | 48BBY     | blue     | fair      |
      | Shmi    | Shmi Skywalker  | female | 72BBY     | brown    | fair      |

  Scenario Outline: Search person by last name
    When I search for "<search>" and press enter
    Then I see the full name "<name>"
    And I see the gender "<gender>"
    And I see the birth year "<birthYear>"
    And I see the eye color "<eyeColor>"
    And I see the skin color "<skinColor>"

    Examples:
      | search    | name            | gender | birthYear | eyeColor | skinColor |
      | Solo      | Han Solo        | male   | 29BBY     | brown    | fair      |
      | Vader     | Darth Vader     | male   | 41.9BBY   | yellow   | white     |
      | Mothma    | Mon Mothma      | female | 48BBY     | blue     | fair      |
      | Skywalker | Shmi Skywalker  | female | 72BBY     | brown    | fair      |

  Scenario Outline: Search person by full name
    When I search for "<search>" and click on the search button
    Then I see the full name "<name>"
    And I see the gender "<gender>"
    And I see the birth year "<birthYear>"
    And I see the eye color "<eyeColor>"
    And I see the skin color "<skinColor>"

    Examples:
      | search          | name            | gender | birthYear | eyeColor | skinColor |
      | Han Solo        | Han Solo        | male   | 29BBY     | brown    | fair      |
      | Darth Vader     | Darth Vader     | male   | 41.9BBY   | yellow   | white     |
      | Mon Mothma      | Mon Mothma      | female | 48BBY     | blue     | fair      |
      | Shmi Skywalker  | Shmi Skywalker  | female | 72BBY     | brown    | fair      |

  Scenario Outline: Search person by partial name and clear search results
    When I search for "<search>" and press enter
    Then I see the full name "<name>"
    And I see the gender "<gender>"
    And I see the birth year "<birthYear>"
    And I see the eye color "<eyeColor>"
    And I see the skin color "<skinColor>"
    When I search for " " and click on the search button
#    Then an empty page is returned

    Examples:
      | search  | name            | gender | birthYear | eyeColor | skinColor |
      | Ha      | Han Solo        | male   | 29BBY     | brown    | fair      |
      | Da      | Darth Vader     | male   | 41.9BBY   | yellow   | white     |
      | Mot     | Mon Mothma      | female | 48BBY     | blue     | fair      |
      | Sky     | Shmi Skywalker  | female | 72BBY     | brown    | fair      |

  Scenario: Search for planet returns no results
    When I search for "Han Solo" and click on the search button
    Then I see the full name "Han Solo"
    And I see the gender "male"
    And I see the birth year "29BBY"
    And I see the eye color "brown"
    And I see the skin color "fair"
    When I search on "Planets"
    When I search for "Han Solo" and click on the search button
    Then there are no results found

  Scenario: Search unknown person
    When I search for "Michael Jackson" and click on the search button
    Then there are no results found
