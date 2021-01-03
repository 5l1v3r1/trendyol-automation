module.exports = {
  tags: ["Trendyol UI Automation Assignment"],
  before: function (client, done) {
    this.userMail = client.globals.userMail;
    this.userPassword = client.globals.userPassword;
    this.currentPage = client.maximizeWindow().page.landingPage();
    this.currentPage
      .navigate(client.globals.prodUrl)
      .waitForElementVisible("body", 60000)
      .perform((performDone) => {
        done();
        performDone();
      });
  },
  // Logging with registered account and assert this account.
  // This registered account has some pre-requirements to run this spec successfully.
  // Please check ReadMe file for those pre-requirements.
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
  // Navigating each boutique menu and checking all images are loaded or not
  "Trendyol Assignment Step 2"() {
    this.currentPage.client.api.page
      .landingPage()
      .checkBoutiqueNavInitialElements()
      .clickSpecificBoutiqueMenu("1")
      .section.boutiquePages.checkInitialElements()
      .assert.imageLoaded(".component-big-list a span img");
  },
  after: function (client, done) {
    client.end().perform(done);
  },
};
