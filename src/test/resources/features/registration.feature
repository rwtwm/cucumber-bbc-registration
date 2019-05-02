Feature: The password box on the registration page detects invalid input

  Scenario Outline: A user inputs strings into the password field that are not valid as passwords
    Given I am on the registration page
    When I input invalid string <word>
    Then I will receive an error message containing <string>

    Examples:
      | word      | string                          |
      | 00000000  | "include a letter"              |
      | aaaaaaaa  | "something that isn't a letter" |
      | a1a1a1    | "eight characters or more"       |
      | password1 | "hard to guess"                  |
