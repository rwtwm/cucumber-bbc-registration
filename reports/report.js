$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/registration.feature");
formatter.feature({
  "name": "The password box on the registration page detects invalid input",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "A user inputs strings into the password field that are not valid as passwords",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the registration page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input invalid string \u003cword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I will receive an error message containing \u003cstring\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "word",
        "string"
      ]
    },
    {
      "cells": [
        "00000000",
        "\"include a letter\""
      ]
    },
    {
      "cells": [
        "aaaaaaaa",
        "\"something that isn\u0027t a letter\""
      ]
    },
    {
      "cells": [
        "a1a1a1",
        "\"eight characters or more\""
      ]
    },
    {
      "cells": [
        "password1",
        "\"hard to guess\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "A user inputs strings into the password field that are not valid as passwords",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_am_on_the_reg_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input invalid string 00000000",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.inputString(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will receive an error message containing \"include a letter\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.compareErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A user inputs strings into the password field that are not valid as passwords",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_am_on_the_reg_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input invalid string aaaaaaaa",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.inputString(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will receive an error message containing \"something that isn\u0027t a letter\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.compareErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A user inputs strings into the password field that are not valid as passwords",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_am_on_the_reg_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input invalid string a1a1a1",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.inputString(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will receive an error message containing \"eight characters or more\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.compareErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A user inputs strings into the password field that are not valid as passwords",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_am_on_the_reg_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input invalid string password1",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.inputString(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will receive an error message containing \"hard to guess\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.compareErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});