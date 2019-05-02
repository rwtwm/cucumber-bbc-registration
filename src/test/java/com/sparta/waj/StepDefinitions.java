package com.sparta.waj;

import com.sparta.waj.bbcwebsite.bbcpageobjects.RegistrationPage;
import com.sparta.waj.bbcwebsite.seleniumconfig.SeleniumConfig;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class StepDefinitions
{
    WebDriver driver;
    RegistrationPage regPage;

    @Given("I am on the registration page")
    public void i_am_on_the_reg_page() {
        driver = new SeleniumConfig("").getDriver();
        regPage = new RegistrationPage(driver);

        regPage.hold().clickOverage().hold()
                .inputDate()
                .inputMonth()
                .inputYear()
                .clickSubmit().hold();
    }

    @When("I input invalid string {word}")
    public void inputString(String password)
    {
        regPage.inputPassword(password);
    }

    @Then("I will receive an error message containing {string}")
    public void compareErrorMessage(String error)
    {
        String errorString = regPage.readPwdError();
        Assert.assertTrue(errorString.contains(error));
    }

    @After
    public void quitDriver()
    {
        driver.quit();
    }



}
