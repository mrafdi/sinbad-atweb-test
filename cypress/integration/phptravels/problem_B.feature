@problemB
Feature: Problem B - Sign In User actions in PHPtravel website

Steps for Problem B for Sinbad Test

  @signInUser @useCase1 @submitVisa
  Scenario: As a Sign In User, I should be able to submit Visa
    Given I go to PHPtravel homepage
    When I go to PHPtravel website login page
    And I login to PHPtravel website
    Then I can see that I logged in as "Demo User" in PHPtravel web
    When I click Visa menu on profile
    And I input "Indonesia" in From Country field
    And I input "Australia" in To Country field
    And I input "01/06/2020" in Visa Date field
    And I click the Submit button
    Then I can see that I am in Visa form page
    When I input the First Name field with "Tester"
    And I input the Last Name field with "Sinbad"
    And I input the Email field with "test@sinbad.com"
    And I input the Email Confirmation field with "test@sinbad.com"
    And I input the Phone field with "081234567890"
    And I click the Booking button
    Then I can see that my Visa is already submitted

  @signInUser @useCase1 @verifyVisa
  Scenario Outline: As a Sign In User, I should be able to submit Visa and the invoice is the same as inputted
    Given I go to PHPtravel homepage
    When I go to PHPtravel website login page
    And I login to PHPtravel website
    Then I can see that I logged in as "Demo User" in PHPtravel web
    When I click Visa menu on profile
    And I input "<fromCty>" in From Country field
    And I input "<toCty>" in To Country field
    And I input "<date>" in Visa Date field
    And I click the Submit button
    Then I can see that I am in Visa form page
    When I input the First Name field with "<firstName>"
    And I input the Last Name field with "<lastName>"
    And I input the Email field with "test@sinbad.com"
    And I input the Email Confirmation field with "test@sinbad.com"
    And I input the Phone field with "<phoneNo>"
    And I click the Booking button
    Then I can see that my Visa is already submitted
    When I click view Invoice button
    Then I can see that I am in Visa Booking Detail page
    And I can see my Invoice data First Name is "firstName"
    And I can see my Invoice data Last Name is "lastName"
    And I can see my Invoice data Phone Number is "<phoneNo>"
    And I can see my Invoice data From Country is "<fromCty>"
    And I can see my Invoice data To Country is "<toCty>"
    And I can see my Invoice data Date is "<date>"

    Examples:
    |firstName  |lastName   |phoneNo        |fromCty    |toCty      |date       |
    |Tester     |Sinbad     |081234567890   |Indonesia  |Australia  |01-06-2020 |