$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/search.feature");
formatter.feature({
  "line": 1,
  "name": "Duck Duck Go Search",
  "description": "",
  "id": "duck-duck-go-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@selenium-docker"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"\u003ckeyword\u003e\" to search",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 10,
      "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;1"
    },
    {
      "cells": [
        "java"
      ],
      "line": 11,
      "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;2"
    },
    {
      "cells": [
        "webdriver"
      ],
      "line": 12,
      "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;3"
    },
    {
      "cells": [
        "docker"
      ],
      "line": 13,
      "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;4"
    },
    {
      "cells": [
        "kubernetes"
      ],
      "line": 14,
      "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2031151400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@selenium-docker"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"java\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 967759100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1724667500,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 263817500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 657773800,
  "status": "passed"
});
formatter.after({
  "duration": 68840900,
  "status": "passed"
});
formatter.before({
  "duration": 558716800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@selenium-docker"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"webdriver\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 670458100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1677166900,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 200818400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 238458300,
  "status": "passed"
});
formatter.after({
  "duration": 63894500,
  "status": "passed"
});
formatter.before({
  "duration": 498791000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@selenium-docker"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"docker\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 730596900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "docker",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1771311300,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 230972500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 241734700,
  "status": "passed"
});
formatter.after({
  "duration": 62199300,
  "status": "passed"
});
formatter.before({
  "duration": 495179800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@selenium-docker"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"kubernetes\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 667226900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kubernetes",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1603299200,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 202778000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 141119200,
  "status": "passed"
});
formatter.after({
  "duration": 67309200,
  "status": "passed"
});
});