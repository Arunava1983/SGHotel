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
tags = { "@sanity" },
plugin = {
		"pretty", 
		"html:target/cucumber_sanity", 
		"com.cucumber.listener.ExtentCucumberFormatter:output/report_sanity.html",
		"html:target/cucumber-html-report_sanity",
		"json:target/cucumber_sanity.json",
		"pretty:target/cucumber-pretty_sanity.txt",
		"usage:target/cucumber-usage_sanity.json",
		"junit:target/cucumber-results_sanity.xml"
		})
public class RunCukeParallelTest {

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
