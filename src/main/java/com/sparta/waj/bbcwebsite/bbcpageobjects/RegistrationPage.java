package com.sparta.waj.bbcwebsite.bbcpageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class RegistrationPage
{
    private WebDriver driver;

    private final String pageUrl = "https://account.bbc.com/register";
    private final By overThirteen = By.linkText("13 or over");
    private final By dateInput = By.id("day-input");
    private final By monthInput = By.id("month-input");
    private final By yearInput = By.id("year-input");
    private final By submit = By.id("submit-button");
    private final By pwdInput = By.id("password-input");
    private final By pwdError = By.id("form-message-password");

    public RegistrationPage(WebDriver driver)
    {
        this.driver = driver;
        driver.navigate().to(pageUrl);
    }

    public RegistrationPage hold()
    {
        try
        {
            Thread.sleep(2000);
        } catch (InterruptedException e)
        {
            e.printStackTrace();
        }
        return this;
    }

    public RegistrationPage clickOverage()
    {
        List<WebElement> buttons = driver.findElements(By.className("button"));

        for (WebElement button : buttons)
        {
            if (button.getText().contains("over"))
            {
                button.click();
            }
        }
        return this;
    }

    public RegistrationPage inputDate()
    {
        driver.findElement(dateInput).sendKeys("17\t");
        return this;
    }

    public RegistrationPage inputMonth()
    {
        driver.findElement(monthInput).sendKeys("12\t");
        return this;
    }

    public RegistrationPage inputYear()
    {
        driver.findElement(yearInput).sendKeys("1984\t");
        return this;
    }

    public RegistrationPage clickSubmit()
    {
        driver.findElement(submit).click();
        return this;
    }

    public void inputPassword(String password)
    {
        driver.findElement(pwdInput).sendKeys(password);
        driver.findElement(pwdInput).sendKeys("\t");
    }

    public String readPwdError()
    {
        return driver.findElement(pwdError).getText();
    }


}
