package Cucumber.SGhotel.StepDefinition;

import java.util.List;

import Base.BaseUtil;
import Cucumber.SGhotel.Pages.ChoseHotel;
import Cucumber.SGhotel.Pages.HotelSearch;
import Cucumber.SGhotel.Pages.Registration;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class filterPriceSteps {

	private  BaseUtil base;

    public filterPriceSteps(BaseUtil base) {
        this.base = base;
    }
    
    @Given("^user is on Singapore Hotel search page$")
    public void user_launches_the_website() throws Throwable {
    	(new HotelSearch(base.Driver)).verifyHotelSearchPage();   
    }

    @When("^user selects the destination$")
    public void user_selects_the_destination(DataTable table) throws Throwable {
    	List<List<String>> data = table.raw();
    	(new HotelSearch(base.Driver)).fillDestinationCity(data.get(0).toString());
    }

    @When("^user selects checkin Date$")
    public void user_selects_checkin_date(DataTable table) throws Throwable {
    	List<List<String>> data = table.raw();
    	(new HotelSearch(base.Driver)).selectCheckInTime(data.get(0).toString());
    	
    }

    @When("^user selects checkout date$")
    public void user_selects_checkout_date(DataTable table) throws Throwable {
    	List<List<String>> data = table.raw();
    	(new HotelSearch(base.Driver)).selectCheckOutTime(data.get(0).toString());
    }

    @When("^selects \"([^\"]*)\" Room, \"([^\"]*)\" Adult, \"([^\"]*)\" Children and click on Search button$")
    public void selects_Room_Adult_Children_and_click_on_Search_button(String rooms, String adult, String children) throws Throwable {
    	(new HotelSearch(base.Driver)).selectRooms(rooms, adult, children);
    }

    @When("^select the popular Filters$")
    public void select_the_popular_filters(DataTable table) throws Throwable {
    	List<List<String>> data = table.raw();
    	ChoseHotel choseHotels = new ChoseHotel(base.Driver);
    	choseHotels.SelectPopularFilters(data.get(0).get(0).toString(),data.get(0).get(1).toString(),data.get(0).get(2).toString());
    }

    @When("^selects price filter (.+)$")
    public void selects_price_filter(String pricefilter) throws Throwable {
    	(new ChoseHotel(base.Driver)).selectPriceFilter(pricefilter);
    }
    
    @Then("^price will be filtered in (.+)$")
    public void price_will_be_filtered_in(String order) throws Throwable {
    	(new ChoseHotel(base.Driver)).checkAscendingDescendingOrder(order);
    }
    
    @Given("^user is on Singapore Hotel registration page$")
    public void user_is_on_singapore_hotel_registration_page() throws Throwable {
    	Registration reg = new Registration(base.Driver);
    	reg = (new HotelSearch(base.Driver)).NavigateToRegistrationPage();
    }

    @When("^user enters valid inputs$")
    public void user_enters_valid_inputs() throws Throwable {
    	(new Registration(base.Driver)).verifySuccessfulNavigationToRegistrationPage();
    	(new Registration(base.Driver)).fillRegistrationForm();
    }

    @Then("^user should be successfully able to register$")
    public void user_should_be_successfully_able_to_register() throws Throwable {
    	(new Registration(base.Driver)).verifySuccessfulRegistrationFromHeader();
    }
    
}
