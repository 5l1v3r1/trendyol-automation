module.exports = {
  selector: "#product-detail-app",
  locateStrategy: "css selector",
  elements: {
    // Product Detail CSS Variables
    productContainer: ".pd-app-container",
    productName: ".pr-new-br",
    addToBasketButton: "button.add-to-bs",
  },
  commands: [
    {
      checkProductDetailElements: function () {
        return this.waitForElementVisible("@productContainer", 1000)
          .waitForElementVisible("@productName", 1000)
          .waitForElementVisible("@addToBasketButton", 1000);
      },
      clickAddToBasketButton: function () {
        return this.click("@addToBasketButton");
      },
    },
  ],
};
