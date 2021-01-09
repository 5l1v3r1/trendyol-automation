module.exports = {
  tags: ["Trendyol UI Automation Assignment"],
  before: function (client, done) {
    this.userMail =
      client.globals.preDefinedData.existingTestAccounts[0].userName;
    this.userPassword =
      client.globals.preDefinedData.existingTestAccounts[0].password;
    this.currentPage = client.maximizeWindow().page.landingPage();
    this.currentPage
      .navigate(client.globals.appUrl)
      .waitForElementVisible("body", 60000)
      .perform((performDone) => {
        done();
        performDone();
      });
  },
  "Logging with registered account"() {
    const that = this;

    this.currentPage
      .checkInitialElements()
      .handleGenderSelectionPopup()
      .clickAccountIcon()
      .section.loginPage.checkInitialElements()
      .setUserEmail(this.userMail)
      .setUserPassword(this.userPassword)
      .clickLoginButton()
      .api.page.landingPage()
      .moveCursorToAccountIcon()
      .checkLoggedAccountDdElements()
      .getText("@loggedAccountDdUserName", function (result) {
        this.assert.equal(result.value.toLowerCase(), that.userMail);
      });
  },
  "Navigating each menu under navigation bar"() {
    let boutiqueSelection = this.currentPage.client.api.page
      .landingPage()
      .checkBoutiqueNavInitialElements();
    for (let i = 1; i < 10; i++) {
      boutiqueSelection = boutiqueSelection
        .clickSpecificBoutiqueMenu(i.toString())
        .section.boutiquePages.checkPreLoadedBoutiques()
        .api.page.landingPage();
    }
    boutiqueSelection.section.boutiquePages.clickFirstBoutique();
  },
  "Adding a product to the basket"() {
       this.currentPage.client.api.page
      .landingPage()
      .section.productListingPage.checkPreLoadedBoutiqueProducts()
      .clickPreLoadedFirstProduct()
      .parent.section.productDetailPage.checkProductDetailElements()
      .clickAddToBasketButton()
      .api.page.landingPage()
      .clickBasketIcon()
      .section.basketPage.checkBasketPageContainer()
      .removeAddedProduct();
  },
  after: function (client, done) {
    client.end().perform(done);
  },
};
