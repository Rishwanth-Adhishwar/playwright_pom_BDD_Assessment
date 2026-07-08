@Login @Rishwanth
Feature: Rishwanth_08_07_2026 Login Feature of Demo WebShop Website
Description:As a new user,I want register an account in Demo Web Shop Website with valid and invalid Credentials

  Background:
    Given The User is in Launch Page Of DemoWebShop Website
    When The User Clicks on Login Link

  Scenario: To Check Login Functionality of Demo Web Shop With valid Credentials
    And The User Enter a valid Email
    And The User Enters a valid Password
    And The User Clicks a Login Button
    Then The User Should Be Successfully logged In

  Scenario Outline: To Check Login Functionality of Demo Web Shop With invalid Credentials
    And The User Enters a Email as "<email>"
    And The User Enters a password as "<password>"
    And The User Clicks a Login Button
    Then The User Should Be displayed With Error Message as "<message>"

    Examples:
      | email            | password   | message                                                          |
      | AdhiR@gmail.com  | RAdhiA     | Login was unsuccessful. Please correct the errors and try again. |
      | kazama@gmail.com | RishwaAdhi | Login was unsuccessful. Please correct the errors and try again. |
