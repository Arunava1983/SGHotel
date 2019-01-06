package Cucumber.SGhotel.Helper;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathFactory;

import org.xml.sax.InputSource;

public class ReadXML {

	/**
	 * @description: Read from XML
	 * @param1: File path
	 * @param2: Node
	 * @author: Arunava
	 */
	public static String getValueXML(String sFilePath, String sNodeXpath){

		String sNodeValue="";
		try{
			InputSource in = new InputSource(sFilePath);
			XPath xp=XPathFactory.newInstance().newXPath();
			sNodeValue=(String)xp.evaluate(sNodeXpath,in, XPathConstants.STRING);
		}
		catch(Exception e){
			System.out.println("getValueXML"+e.getMessage());
		}
		return sNodeValue;
	}
}
