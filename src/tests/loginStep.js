module.exports = {
  tags: ["Trendyol Login"],
  before: function (client, done) {
    this.userMail = client.globals.userMail;
    this.userPassword = client.globals.userPassword;
    this.currentPage = client.maximizeWindow().page.landingPage();
    this.currentPage
      .navigate(client.globals.prodUrl)
      .waitForElementVisible("body", 60000)
      .perform(done);
  },
  "Trendyol Assignment Step 1"() {
    this.currentPage
      .checkInitialElements()
      .closeGenderSelection()
      .checkGenderPopUpClosed()
      .clickAccountIcon()
      .section.loginPage.checkInitialElements()
      .setUserEmail(this.userMail)
      .setUserPassword(this.userPassword)
      .clickLoginButton()
      .api.page.landingPage()
      .waitForDiscountPopUp()
      .checkDiscountPopUp()
      .clickDiscountCloseButton()
      .checkDiscountPopUpClosed()
      .moveCursorToAccountIcon()
      .checkLoggedAccountDdElements()
      .assert.containsText(
        "@loggedAccountDdUserName",
        this.userMail.charAt(0).toUpperCase() + this.userMail.slice(1)
      );
  },
  afterEach: function (client, done) {
    client.end().perform(done);
  },
};
