Feature: Check filter price is working fine

@regression
Scenario Outline: Filter from High to Low
	Given user is on Singapore Hotel search page
	When user selects the destination
	|Singapore|
	And user selects checkin Date
	|10/01/2019|
	And user selects checkout date
	|12/01/2019|
	And selects "1" Room, "1" Adult, "0" Children and click on Search button
	And select the popular Filters
	|Free Breakfast|Pool|Free wifi|
	And selects price filter <priceFilter>
	Then price will be filtered in <order>
	
Examples:
	|priceFilter|order|
	|low to high|ascending |
	|high to low|descending|

@sanity
Scenario: Verify Login functionality
	Given user is on Singapore Hotel registration page
	When user enters valid inputs
	Then user should be successfully able to register