package Cucumber.SGhotel.Pages;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import Cucumber.SGhotel.Helper.ReusableLibrary;

public class HotelSearch{
	
	ReusableLibrary rs;
	WebDriver driver;
	public HotelSearch(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
		rs = new ReusableLibrary(driver);
		this.driver = driver;
	}
	
	@FindBy(id="hdr-account")
	public WebElement lnkSinginAndAccount;
	
	@FindBy(id="hdr-create")
	public WebElement lnkCreateAccount;
	
	@FindBy(name="q-localised-check-in")
	private WebElement txtCheckIn;
	
	@FindBy(name="q-destination")
	private WebElement txtDestinationCity;
	
	@FindBy(name="q-localised-check-out")
	private WebElement txtCheckOut;
	
	@FindBy(xpath="//div[contains(@class,'widget-query-occupancy')]//label[text()='Rooms']/following-sibling::select")
	private WebElement selRoomsOption;
	
	@FindBy(name="q-rooms")
	private WebElement selRoom;
	
	@FindBy(xpath="//label[text()='Adults']/following-sibling::select")
	private WebElement selAdults;
	
	@FindBy(xpath="//label[text()='Children']/following-sibling::select")
	private WebElement selChildren;
	
	@FindBy(xpath="//button[@type='submit'][text()='Search']")
	private WebElement btnSearch;
	
	/**
	 * @description: Select city from helper
	 * @author: Arunava
	 */
	public void autoSelectCity(String city)
	{
		List<WebElement> wb = driver.findElements(By.xpath("//tbody[@class='autosuggest-city']//span[text()='"+city+"']/.."));
		wb.get(0).click();
		rs.pageSync();
	}
	
	/**
	 * @description: Verifies whether we are in hotel search page
	 * @author: Arunava
	 */
	public boolean verifyHotelSearchPage()
	{
		boolean bflag=false;
		if(rs.isUIObjectReady(txtDestinationCity))
		{
			bflag=true;
		}
		else
		{
			Assert.fail("Not redirected to Hotel Search page");
		}
		return bflag;
	}
	
	/**
	 * @description: Enter destination city
	 * @author: Arunava
	 */
	public void fillDestinationCity(String city)
	{
		try
		{
			String sCity = city.replaceAll("[^A-Za-z]+", "");
			rs.sendKeysByChar(txtDestinationCity,sCity);
			autoSelectCity(sCity);
		}
		catch(Exception e)
		{
			Assert.fail(e.getMessage());
		}
	}

	/**
	 * @description: Select checkin date
	 * @author: Arunava
	 */
	public void selectCheckInTime(String time)
	{
		rs.logSendKeys(txtCheckIn,time);
		rs.pageSync();
	}
	
	/**
	 * @description: Select checkout date
	 * @author: Arunava
	 */
	public void selectCheckOutTime(String time)
	{
		rs.logSendKeys(txtCheckOut,time);
		rs.pageSync();
	}
	
	/**
	 * @description: Select Rooms
	 * @author: Arunava
	 */
	public ChoseHotel selectRooms(String rooms, String adult, String children)
	{
		Select sel = new Select(selRoomsOption);
		
		for(int i=0; i< sel.getOptions().size(); i++)
		{
			if(sel.getOptions().get(i).getText().contains("More options"))
			{
				sel.selectByIndex(i);
				break;
			}
		}
		
		Select selRooms = new Select(selRoom);
		selRooms.selectByVisibleText(rooms);
		
		Select selAdult = new Select(selAdults);
		selAdult.selectByVisibleText(adult);
		
		Select selChildrens = new Select(selChildren);
		selChildrens.selectByVisibleText(children);
		
		rs.logClick(btnSearch);
		rs.pageSync();
		return PageFactory.initElements(driver, ChoseHotel.class);
	}
	
	/**
	 * @description: Navigate to Registration page
	 * @author: Arunava
	 */
	public Registration NavigateToRegistrationPage()
	{
		rs.logClick(lnkSinginAndAccount);
		rs.logClick(lnkCreateAccount);
		
		rs.pageSync();
		return PageFactory.initElements(driver, Registration.class);
	}
}
