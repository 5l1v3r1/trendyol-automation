module.exports = {
  selector: "#browsing-gw-homepage",
  locateStrategy: "css selector",
  elements: {
    boutiqueSlider: ".circled-slider",
    boutiqueComponents: ".component-list",
  },
  commands: [
    {
      checkInitialElements: function () {
        return this.waitForElementVisible(
          "@boutiqueSlider",
          1000
        ).waitForElementVisible("@boutiqueComponents", 1000);
      },
    },
  ],
};
