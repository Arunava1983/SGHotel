package Cucumber.SGhotel.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Cucumber.SGhotel.Helper.ReadXML;
import Cucumber.SGhotel.Helper.ReusableLibrary;
import junit.framework.Assert;

public class Registration {

	ReusableLibrary rs;
	WebDriver driver;
	
	public Registration(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
		rs = new ReusableLibrary(driver);
		this.driver = driver;
	}
	
	@FindBy(id="sign-up-email")
	public WebElement txtEmail;
	
	@FindBy(id="sign-up-password")
	public WebElement txtPassword;
	
	@FindBy(id="sign-up-first-name")
	public WebElement txtFirstName;
	
	@FindBy(id="sign-up-last-name")
	public WebElement txtLastName;
	
	@FindBy(id="signup-button")
	public WebElement btnCreateAccount;

	/**
	 * @description: Verify whether registration is successful
	 * @author: Arunava
	 */
	public void verifySuccessfulRegistrationFromHeader()
	{
		String path = System.getProperty("user.dir")+"\\src\\test\\java\\Cucumber\\SGhotel\\TestData\\TestData.xml";
		Assert.assertTrue("Registration unsuccessful", rs.isUIObjectReady(driver.findElement(By.xpath("//a[@id='hdr-account'][contains(text(),'"+ReadXML.getValueXML(path, "//firstname")+"')]"))));
		//Assert.fail("FAIL");
	}
	
	/**
	 * @description: Fill Registration data
	 * @author: Arunava
	 */
	public void fillRegistrationForm()
	{
		String path = System.getProperty("user.dir")+"\\src\\test\\java\\Cucumber\\SGhotel\\TestData\\TestData.xml";
		
		rs.logSendKeys(txtEmail, rs.generaterandomNumber()+ReadXML.getValueXML(path, "//email"));
		rs.logSendKeys(txtPassword, ReadXML.getValueXML(path, "//password"));
		rs.logSendKeys(txtFirstName, ReadXML.getValueXML(path, "//firstname"));
		rs.logSendKeys(txtLastName, ReadXML.getValueXML(path, "//lastname"));
		
		rs.logClick(btnCreateAccount);
		rs.pageSync();
	}
	
	public void verifySuccessfulNavigationToRegistrationPage()
	{
		Assert.assertTrue("Not navigated to regsistration page", rs.isUIObjectReady(txtEmail));
	}
}
