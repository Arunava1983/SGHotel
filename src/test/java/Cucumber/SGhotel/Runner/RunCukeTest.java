package Cucumber.SGhotel.Runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;
import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/Cucumber/SGhotel/Feature", 
glue = "Cucumber/SGhotel/StepDefinition",
tags = { "@regression" },
dryRun = false,
strict = true,
monochrome = true,
plugin = {
		"pretty", 
		"html:target/cucumber_regression", 
		"com.cucumber.listener.ExtentCucumberFormatter:output/report_regression.html",
		"html:target/cucumber-html-report_regression",
		"json:target/cucumber_regression.json",
		"pretty:target/cucumber-pretty_regression.txt",
		"usage:target/cucumber-usage_regression.json",
		"junit:target/cucumber-results_regression.xml"
		})
public class RunCukeTest {

	@AfterClass
	public static void teardown() {
		Reporter.loadXMLConfig(new File("src/test/java/extent-config.xml"));
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setSystemInfo("os", "Windows");
		Reporter.setTestRunnerOutput("Sample test runner output message");
	}

	@BeforeClass
	public static void setup() {
		ExtentProperties extentProperties = ExtentProperties.INSTANCE;
		extentProperties.setReportPath("output/myreport.html");
	}
}
