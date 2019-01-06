package Cucumber.SGhotel.Pages;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import Cucumber.SGhotel.Helper.ReusableLibrary;

public class ChoseHotel{
	ReusableLibrary rs;
	WebDriver driver;
	public ChoseHotel(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
		rs = new ReusableLibrary(driver);
		this.driver = driver;
	}
	
	@FindBy(xpath="//ul[@id='enhanced-sort']//a[@data-menu='sort-submenu-price']")
	private WebElement lnkPriceFilter;
	
	@FindBy(xpath="//a[@data-option-id='opt_PRICE_HIGHEST_FIRST']")
	private WebElement lnkHighToLowPrice;
	
	@FindBy(xpath="//a[@data-option-id='opt_PRICE']")
	private WebElement lnkLowToHighPrice;
	
	@FindBy(xpath="//div[@class='price']//b|//div[@class='price']//ins")
	private List<WebElement> ExtractPrice;
	
	@FindBy(xpath="//div[@class='price']/a[//span[text()='Choose Room']]")
	private WebElement btnChooseRoom;
	
	
	/**
	 * @description: This methods selects the popular filters
	 * @author: Arunava
	 */
	public void SelectPopularFilters(String filter1, String filter2, String filter3)
	{
		String arr[] = {filter1, filter2,filter3};
		List<String> filter = Arrays.asList(arr);
		
		for(String str: filter)
		{
			WebElement wb = driver.findElement(By.xpath("//label[text()='"+str+"']/preceding-sibling::input[@type='checkbox']"));
			rs.logClick(wb);
		}
		rs.pageSync();
	}
	
	/**
	 * @description: This methods selects the price filters
	 * @author: Arunava
	 */
	public void selectPriceFilter(String order)
	{
		rs.HoverMouse(lnkPriceFilter);
		if(order.equals("high to low"))
		{
			rs.logClick(lnkHighToLowPrice);
		}
		else
		{
			rs.logClick(lnkLowToHighPrice);
		}
		rs.pageSync();
	}
	
	/**
	 * @description: Checks whether a list is in ascending order
	 * @author: Arunava
	 */
	public void checkAscendingDescendingOrder(String order)
	{
		try
		{
			Thread.sleep(rs.iMaxTimeout*1000);
			if(rs.isUIObjectReady(btnChooseRoom))
			{
				rs.pageSync();
				List<Integer> price = new ArrayList();
				for(WebElement wb: ExtractPrice)
				{
					price.add(Integer.parseInt(wb.getText().replaceAll("[^0-9]", "").trim()));
				}
				List tmp = new ArrayList(price);
				
				if(order.equals("ascending"))
				{
					Collections.sort(tmp);
				}
				else
				{
					Collections.sort(tmp, Collections.reverseOrder());
				}
				
				Assert.assertTrue("Price is not sorted in ascending oder", tmp.equals(price));
			}
		}
		catch(Exception e)
		{
			Assert.fail(e.getMessage());
		}
	}
}
