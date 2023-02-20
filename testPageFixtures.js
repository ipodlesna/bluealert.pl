const { By } = require('selenium-webdriver');

class TestPage {

    constructor(driver) {
        this.driver = driver;
    };

    //basic Url

    async openUrl() {
        await this.driver.get("https://app.bluealert.pl/ba/form/formularz-testowy");
    };


    //selectors

    get firstName() {
        return this.driver.findElement(By.name("first_name"));
    };

    get lastName() {
        return this.driver.findElement(By.name("last_name"));
    };

    get userEmail() {
        return this.driver.findElement(By.name("email"));
    };

    get userPhone() {
        return this.driver.findElement(By.name("phone"));
    };

    get userPesel() {
        return this.driver.findElement(By.name("pesel"));
    };

    get userIdNumber() {
        return this.driver.findElement(By.name("id_numer"));
    };

    get userBirthDate() {
        return this.driver.findElement(By.name("date"));
    };

    get nextButton() {
        return this.driver.findElement(By.id("form_button_next"));
    };

    get assertElement() {
        return this.driver.findElement(By.className("legend"));
    };


    //actions

    async typeFirstName() {
        await this.firstName.sendKeys("Anna");
    };

    async typeLastName() {
        await this.lastName.sendKeys("Nowak");
    };

    async typeUserEmail() {
        await this.userEmail.sendKeys("anna.nowak@gmail.com");
    };

    async typeUserPhone() {
        await this.userPhone.sendKeys("505606707");
    };

    async typeUserPesel() {
        await this.userPesel.sendKeys("80072651524");
    };

    async typeUserIdNumber() {
        await this.userIdNumber.sendKeys("JHK539263");
    };

    async typeUserBirthDate() {
        await this.userBirthDate.sendKeys("1980-07-26");
    };

    async clickNextButton() {
        await this.nextButton.click();
    };

}

module.exports = TestPage;