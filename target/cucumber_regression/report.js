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
  "duration": 29316750128,
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
