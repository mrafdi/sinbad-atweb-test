@problemA
Feature: Problem A - Guest User actions in PHPtravel website

Steps for Problem A for Sinbad Test

  @guestUser @useCase1 @searchName
  Scenario Outline: As a Guest User, I should be able to search Hotels in a City
    Given I go to PHPtravel homepage
    When I input "<city>" in search destination field
    And I click the add Child button once
    And I click the Search button
    Then I can see the result of Hotels list in "<city>"

    Examples:
    |city       |
    |surabaya   |
    |bandung    |

  @guestUser @useCase2 @searchDate
  Scenario Outline: As a Guest User, I should be able to search Hotels in a City within a date range
    Given I go to PHPtravel homepage
    When I input "surabaya" in search destination field
    And I input the Checkin date with "02/05/2020"
    And I input the Checkout date with "05/05/2020"
    And I click the Search button
    Then I can see the result of Hotels list in "surabaya"

  @guestUser @useCase3 @expHotelRoom
  Scenario Outline: As a Guest User, I want to stay in the Most Expensive Hotel and Most Expensive Room
    Given I go to PHPtravel homepage
    When I input "surabaya" in search destination field
    And I input the Checkin date with "02/05/2020"
    And I input the Checkout date with "05/05/2020"
    And I click the add Child button once
    And I click the Search button
    Then I can see the result of Hotels list in "surabaya"
    When I choose the filter High to Low price
    And I click the top hotel detail button in the list
    And I click the top room book button in the list
    Then I can see "Booking Information" in Booking page
