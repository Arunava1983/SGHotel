package Cucumber.SGhotel.StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import Base.BaseUtil;
import Cucumber.SGhotel.Helper.ReadXML;
import Cucumber.SGhotel.Helper.ReusableLibrary;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook extends BaseUtil {

	private BaseUtil base;

	public Hook(BaseUtil base) {
		this.base = base;
	}

	/**
	 * @description: To be executed before every scenario block
	 * @author: Arunava
	 */
	@Before
	public void setup() {
		System.out.println("Start Browser");
		String path = System.getProperty("user.dir") + "\\src\\test\\java\\GlobalConfig.xml";
		String URL = ReadXML.getValueXML(path, "//URL");
		String browser = ReadXML.getValueXML(path, "//Browser");
		Integer implicitWait = Integer.parseInt(ReadXML.getValueXML(path, "//ImplicitWait"));

		switch (browser) {
		case "Chrome":
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir") + "\\src\\test\\java\\BrowserDrivers\\chromedriver.exe");
			base.Driver = new ChromeDriver();
			base.Driver.get(URL);
			base.Driver.manage().window().maximize();
			base.Driver.manage().timeouts().implicitlyWait(implicitWait, TimeUnit.SECONDS);
			break;
		case "IE":
			System.setProperty("webdriver.ie.driver",
					System.getProperty("user.dir") + "\\src\\test\\java\\BrowserDrivers\\IEDriverServer.exe");
			base.Driver = new InternetExplorerDriver();
			base.Driver.get(URL);
			base.Driver.manage().window().maximize();
			base.Driver.manage().timeouts().implicitlyWait(implicitWait, TimeUnit.SECONDS);
			break;
		case "Firefox":
			System.setProperty("webdriver.gecko.driver",
					System.getProperty("user.dir") + "\\src\\test\\java\\BrowserDrivers\\geckodriver.exe");
			base.Driver = new FirefoxDriver();
			base.Driver.get(URL);
			base.Driver.manage().window().maximize();
			base.Driver.manage().timeouts().implicitlyWait(implicitWait, TimeUnit.SECONDS);
			break;
		default:
			break;
		}

		ReusableLibrary rs = new ReusableLibrary(base.Driver);
		rs.pageSync();
		rs.validateHttpPageError(URL);
	}

	/**
	 * @description: To be executed after every scenario block
	 * @author: Arunava
	 */
	@After(order = 0)
	public void tearDown() {
		base.Driver.quit();
	}

	@After(order = 1)
	public void afterScenario(Scenario scenario) {

		if (scenario.isFailed()) {
			ReusableLibrary rs = new ReusableLibrary(base.Driver);
			rs.captureScreenshot(scenario);
		}

	}
}
