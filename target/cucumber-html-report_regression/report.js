$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("filterPrice.feature");
formatter.feature({
  "line": 1,
  "name": "Check filter price is working fine",
  "description": "",
  "id": "check-filter-price-is-working-fine",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Filter from High to Low",
  "description": "",
  "id": "check-filter-price-is-working-fine;filter-from-high-to-low",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on Singapore Hotel search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user selects the destination",
  "rows": [
    {
      "cells": [
        "Singapore"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user selects checkin Date",
  "rows": [
    {
      "cells": [
        "10/01/2019"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user selects checkout date",
  "rows": [
    {
      "cells": [
        "12/01/2019"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "selects \"1\" Room, \"1\" Adult, \"0\" Children and click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select the popular Filters",
  "rows": [
    {
      "cells": [
        "Free Breakfast",
        "Pool",
        "Free wifi"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "selects price filter \u003cpriceFilter\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "price will be filtered in \u003corder\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "check-filter-price-is-working-fine;filter-from-high-to-low;",
  "rows": [
    {
      "cells": [
        "priceFilter",
        "order"
      ],
      "line": 19,
      "id": "check-filter-price-is-working-fine;filter-from-high-to-low;;1"
    },
    {
      "cells": [
        "low to high",
        "ascending"
      ],
      "line": 20,
      "id": "check-filter-price-is-working-fine;filter-from-high-to-low;;2"
    },
    {
      "cells": [
        "high to low",
        "descending"
      ],
      "line": 21,
      "id": "check-filter-price-is-working-fine;filter-from-high-to-low;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 71761443157,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Filter from High to Low",
  "description": "",
  "id": "check-filter-price-is-working-fine;filter-from-high-to-low;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on Singapore Hotel search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user selects the destination",
  "rows": [
    {
      "cells": [
        "Singapore"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user selects checkin Date",
  "rows": [
    {
      "cells": [
        "10/01/2019"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user selects checkout date",
  "rows": [
    {
      "cells": [
        "12/01/2019"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "selects \"1\" Room, \"1\" Adult, \"0\" Children and click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select the popular Filters",
  "rows": [
    {
      "cells": [
        "Free Breakfast",
        "Pool",
        "Free wifi"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "selects price filter low to high",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "price will be filtered in ascending",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "filterPriceSteps.user_launches_the_website()"
});
formatter.result({
  "duration": 2273310827,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_the_destination(DataTable)"
});
formatter.result({
  "duration": 10966418000,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_checkin_date(DataTable)"
});
formatter.result({
  "duration": 1319643955,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_checkout_date(DataTable)"
});
formatter.result({
  "duration": 1281188287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 19
    },
    {
      "val": "0",
      "offset": 30
    }
  ],
  "location": "filterPriceSteps.selects_Room_Adult_Children_and_click_on_Search_button(String,String,String)"
});
formatter.result({
  "duration": 7483253033,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.select_the_popular_filters(DataTable)"
});
formatter.result({
  "duration": 2767676858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "low to high",
      "offset": 21
    }
  ],
  "location": "filterPriceSteps.selects_price_filter(String)"
});
formatter.result({
  "duration": 2043950092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ascending",
      "offset": 26
    }
  ],
  "location": "filterPriceSteps.price_will_be_filtered_in(String)"
});
formatter.result({
  "duration": 11256871588,
  "error_message": "java.lang.AssertionError: Price is not sorted in ascending oder\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Cucumber.SGhotel.Pages.ChoseHotel.checkAscendingDescendingOrder(ChoseHotel.java:108)\r\n\tat Cucumber.SGhotel.StepDefinition.filterPriceSteps.price_will_be_filtered_in(filterPriceSteps.java:65)\r\n\tat ✽.Then price will be filtered in ascending(filterPrice.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 504536475,
  "status": "passed"
});
formatter.after({
  "duration": 880106617,
  "status": "passed"
});
formatter.before({
  "duration": 12081952196,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Filter from High to Low",
  "description": "",
  "id": "check-filter-price-is-working-fine;filter-from-high-to-low;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on Singapore Hotel search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user selects the destination",
  "rows": [
    {
      "cells": [
        "Singapore"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user selects checkin Date",
  "rows": [
    {
      "cells": [
        "10/01/2019"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user selects checkout date",
  "rows": [
    {
      "cells": [
        "12/01/2019"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "selects \"1\" Room, \"1\" Adult, \"0\" Children and click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select the popular Filters",
  "rows": [
    {
      "cells": [
        "Free Breakfast",
        "Pool",
        "Free wifi"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "selects price filter high to low",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "price will be filtered in descending",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "filterPriceSteps.user_launches_the_website()"
});
formatter.result({
  "duration": 71857235,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_the_destination(DataTable)"
});
formatter.result({
  "duration": 10863108203,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_checkin_date(DataTable)"
});
formatter.result({
  "duration": 1279582933,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_checkout_date(DataTable)"
});
formatter.result({
  "duration": 1256858677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 19
    },
    {
      "val": "0",
      "offset": 30
    }
  ],
  "location": "filterPriceSteps.selects_Room_Adult_Children_and_click_on_Search_button(String,String,String)"
});
formatter.result({
  "duration": 5886430700,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.select_the_popular_filters(DataTable)"
});
formatter.result({
  "duration": 3264937426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "high to low",
      "offset": 21
    }
  ],
  "location": "filterPriceSteps.selects_price_filter(String)"
});
formatter.result({
  "duration": 1231442167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "descending",
      "offset": 26
    }
  ],
  "location": "filterPriceSteps.price_will_be_filtered_in(String)"
});
formatter.result({
  "duration": 11260985454,
  "error_message": "java.lang.AssertionError: Price is not sorted in ascending oder\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Cucumber.SGhotel.Pages.ChoseHotel.checkAscendingDescendingOrder(ChoseHotel.java:108)\r\n\tat Cucumber.SGhotel.StepDefinition.filterPriceSteps.price_will_be_filtered_in(filterPriceSteps.java:65)\r\n\tat ✽.Then price will be filtered in descending(filterPrice.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 417352063,
  "status": "passed"
});
formatter.after({
  "duration": 734826522,
  "status": "passed"
});
});