module.exports = {
  selector: "body",
  locateStrategy: "css selector",
  elements: {
    // Basket CSS Variables
    basketContainer: "#partial-basket",
    addedProductName: ".pb-item",
    clearProductIcon: ".i-trash",
    clearingWarningPopUp: "div.content-body:nth-child(1)",
    clearingWarningRemoveButton: "button.btn-remove",
  },
  commands: [
    {
      checkBasketPageContainer: function () {
        return this.waitForElementVisible(
          "@basketContainer",
          1000
        ).waitForElementVisible("@addedProductName", 1000);
      },
      removeAddedProduct: function () {
        return this.click("@clearProductIcon")
          .waitForElementPresent("@clearingWarningPopUp", 5000)
          .click("@clearingWarningRemoveButton")
          .waitForElementNotPresent("@clearingWarningPopUp", 5000);
      },
    },
  ],
};
