module.exports = {
  selector: "#browsing-gw-homepage",
  locateStrategy: "css selector",
  elements: {
    // Pre-Loaded Boutique CSS Variables
    preLoadedBoutiqueContainer: ".sticky-wrapper",
    preLoadedFirstBoutique: ".component-list > article:nth-child(1)",
    preLoadedSecondBoutique: ".component-list > article:nth-child(2)",
    preLoadedThirdBoutique: ".component-list > article:nth-child(3)",
  },
  commands: [
    {
      checkPreLoadedBoutiques: function () {
        return this.waitForElementVisible("@preLoadedBoutiqueContainer", 1000)
          .waitForElementVisible("@preLoadedFirstBoutique", 1000)
          .waitForElementVisible("@preLoadedSecondBoutique", 1000)
          .waitForElementVisible("@preLoadedThirdBoutique", 1000);
      },
      clickFirstBoutique: function () {
        return this.click("@preLoadedFirstBoutique");
      },
    },
  ],
};
