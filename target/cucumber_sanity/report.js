$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("filterPrice.feature");
formatter.feature({
  "line": 1,
  "name": "Check filter price is working fine",
  "description": "",
  "id": "check-filter-price-is-working-fine",
  "keyword": "Feature"
});
formatter.before({
  "duration": 24568482008,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify Login functionality",
  "description": "",
  "id": "check-filter-price-is-working-fine;verify-login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user is on Singapore Hotel registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user enters valid inputs",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user should be successfully able to register",
  "keyword": "Then "
});
formatter.match({
  "location": "filterPriceSteps.user_is_on_singapore_hotel_registration_page()"
});
formatter.result({
  "duration": 13294042330,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_enters_valid_inputs()"
});
formatter.result({
  "duration": 6838343561,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_should_be_successfully_able_to_register()"
});
formatter.result({
  "duration": 5597799256,
  "status": "passed"
});
formatter.after({
  "duration": 237605,
  "status": "passed"
});
formatter.after({
  "duration": 986515031,
  "status": "passed"
});
});