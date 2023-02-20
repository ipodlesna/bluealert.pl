const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
const TestPage = require('./testPageFixtures');


// Below test case should open chrome browser with correct URL, fill all inputs for first page with correct data, go to second page and then close the browser. Assertion should validate if User got to the second page which means that all inputs were filled correctly and all required elements were found.

async function test_case() {
    let driver = await new Builder().forBrowser("chrome").build();

    const testPage = new TestPage(driver);

    await testPage.openUrl();
    await testPage.typeFirstName();
    await testPage.typeLastName();
    await testPage.typeUserEmail();
    await testPage.typeUserPhone();
    await testPage.typeUserPesel();
    await testPage.typeUserBirthDate();
    await testPage.typeUserIdNumber();
    await testPage.clickNextButton();  

  // assertion
  if (testPage.assertElement) {
    console.log("Test passed and User got to the second page!");
  } else {
    console.log("Test didn't pass!");
  }
    
    setInterval(function() {
        driver.quit();
    }, 10000);
}

test_case(); 