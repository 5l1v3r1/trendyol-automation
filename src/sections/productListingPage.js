module.exports = {
  selector: "#boutique-detail-app",
  locateStrategy: "css selector",
  elements: {
    // Boutique's Product CSS Variables
    listedFirstProduct: ".products > div:nth-child(1)",
    listedSecondProduct: ".products > div:nth-child(2)",
    listedThirdProduct: ".products > div:nth-child(3)",
    listedFourthProduct: ".products > div:nth-child(4)",
  },
  commands: [
    {
      checkPreLoadedBoutiqueProducts: function () {
        return this.waitForElementVisible("@listedFirstProduct", 1000)
          .waitForElementVisible("@listedSecondProduct", 1000)
          .waitForElementVisible("@listedThirdProduct", 1000)
          .waitForElementVisible("@listedFourthProduct", 1000);
      },
      clickPreLoadedFirstProduct: function () {
        return this.click("@listedFirstProduct");
      },
    },
  ],
};
