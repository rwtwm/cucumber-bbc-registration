package com.sparta.waj;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions
{
    @Given("I am on the registration page")
    public void i_am_on_the_reg_page() {
        //this is the navigation to the registration page
        // with the password entry box present
    }

    @When("I input invalid string {word}")
    public void inputString(String password)
    {
        //This is where I call selenium 'get keys on the
        // password input box
        //remember to tab out of the box
    }

    @Then("I will receive an error message containing {string}")
    public void compareErrorMessage(String error)
    {
        //Get error message from the pop-up
        //assert true on string contains
    }



}
