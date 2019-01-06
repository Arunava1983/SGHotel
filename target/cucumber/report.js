$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("filterPrice.feature");
formatter.feature({
  "line": 1,
  "name": "Check filter price is working fine",
  "description": "",
  "id": "check-filter-price-is-working-fine",
  "keyword": "Feature"
});
formatter.before({
  "duration": 51185354308,
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
  "duration": 17016133006,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_enters_valid_inputs()"
});
formatter.result({
  "duration": 7040154695,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_should_be_successfully_able_to_register()"
});
formatter.result({
  "duration": 5856773583,
  "status": "passed"
});
formatter.after({
  "duration": 159600,
  "status": "passed"
});
formatter.after({
  "duration": 984744028,
  "status": "passed"
});
});  }
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
  "duration": 47427665510,
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
  "duration": 17613920971,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_the_destination(DataTable)"
});
formatter.result({
  "duration": 13432168197,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_checkin_date(DataTable)"
});
formatter.result({
  "duration": 2019521055,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_checkout_date(DataTable)"
});
formatter.result({
  "duration": 1456434676,
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
  "duration": 9960435982,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.select_the_popular_filters(DataTable)"
});
formatter.result({
  "duration": 3522793637,
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
  "duration": 1428156628,
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
  "duration": 11389884297,
  "status": "passed"
});
formatter.after({
  "duration": 253514,
  "status": "passed"
});
formatter.after({
  "duration": 811576844,
  "status": "passed"
});
formatter.before({
  "duration": 14243501279,
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
  "duration": 82018810,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_the_destination(DataTable)"
});
formatter.result({
  "duration": 11215299695,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_checkin_date(DataTable)"
});
formatter.result({
  "duration": 1392163866,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.user_selects_checkout_date(DataTable)"
});
formatter.result({
  "duration": 1371620033,
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
  "duration": 7563815614,
  "status": "passed"
});
formatter.match({
  "location": "filterPriceSteps.select_the_popular_filters(DataTable)"
});
formatter.result({
  "duration": 3555456340,
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
  "duration": 1401545919,
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
  "duration": 11392506161,
  "status": "passed"
});
formatter.after({
  "duration": 128296,
  "status": "passed"
});
formatter.after({
  "duration": 804959833,
  "status": "passed"
});
});