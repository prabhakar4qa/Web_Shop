Feature: Customer Online Shopping Cart Journey

  Background:
    Given User navigates to the Tricentis application
    And User clicks on the login link

  @order
  Scenario Outline: Customer online shopping cart journey
    And User enters the email as "prabhakar.12@gmail.com"
    And User enters the password as "Prab123#"
    When User clicks on the login button
    Then User navigates to the Web Shop home page
    When user select the item category "<category>"
    And user add the items to the cart "<book>"
    Then the cart badge should get updated
    When Accept the TermsAndConditions before proceeding
    And Enter all the checkout details before submitting the order
    Then Verify the order submitted successfully 

    # Examples:
    #   | category  | book                            |
    #   | Book      | Fiction                         |
      
