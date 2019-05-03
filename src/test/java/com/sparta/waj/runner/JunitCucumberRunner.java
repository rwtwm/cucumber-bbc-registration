package com.sparta.waj.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    plugin = {"pretty", "html:reports"},
    features = "src/test/resources/features/",
    glue = "com/sparta/waj"
        )

public class JunitCucumberRunner
{

}
