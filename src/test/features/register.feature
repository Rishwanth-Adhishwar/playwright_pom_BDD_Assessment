@Register @Rishwanth
Feature: Rishwanth_08_07_2026 Register Feature Of DemoWebShop Website
Description: As a new user,I want register an account in Demo Web Shop Website with valid Credentials

  Background:
    Given The User is in Launch Page Of DemoWebShop Website
    When The User Clicks on Register Link

  Scenario: To Check the Register Functionality with valid Credentials
    And The User Mark The Gender Radio Button
    And The User Enter the valid Credentials
    And The USer Clicks on Register Button
    Then The User Should displayed With Register Success Text
