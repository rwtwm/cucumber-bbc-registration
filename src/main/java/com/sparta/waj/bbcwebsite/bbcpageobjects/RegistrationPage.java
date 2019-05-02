package com.sparta.waj.bbcwebsite.bbcpageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class RegistrationPage
{
    private WebDriver driver;

    private final String pageUrl = "https://account.bbc.com/register";
    private final By overThirteen = By.tagName("tag");

    public RegistrationPage(WebDriver driver)
    {
        this.driver = driver;
        driver.navigate().to(pageUrl);
    }







}
