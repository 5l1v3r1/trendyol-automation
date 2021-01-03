const loginPage = require("../sections/loginPage");
const boutiquePages = require("../sections/boutiquePages");

module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    // Welcome-Discount Popups and Account Menu CSS Variables
    landingGenderSelection: ".homepage-popup",
    landingGenderFemale: ".homepage-popup .gender-button[data-gender-id='1']",
    landingGenderMale: ".homepage-popup .gender-button[data-gender-id='2']",
    landingGenderCloseButton: ".fancybox-close",
    accountIcon: ".account-user",
    genderModuleBackground: ".fancybox-overlay",
    discountPopUp: ".notification-popup-container",
    discountPopUpCloseButton: ".modal-close",
    loggedAccountDd: ".user-loggedin-container",
    loggedAccountDdUserName: ".user-name",

    // Boutique Navigation CSS Variables
    boutiqueNavBar: "#browsing-gw-navigation",
    firstBoutiqueMenu: "#browsing-gw-navigation .main-nav > li:nth-child(1)",
    secondBoutiqueMenu: "#browsing-gw-navigation .main-nav > li:nth-child(2)",
    thirdBoutiqueMenu: "#browsing-gw-navigation .main-nav > li:nth-child(3)",
    fourthBoutiqueMenu: "#browsing-gw-navigation .main-nav > li:nth-child(4)",
    fifthBoutiqueMenu: "#browsing-gw-navigation .main-nav > li:nth-child(5)",
    sixthBoutiqueMenu: "#browsing-gw-navigation .main-nav > li:nth-child(6)",
    seventhBoutiqueMenu: "#browsing-gw-navigation .main-nav > li:nth-child(7)",
    eighthBoutiqueMenu: "#browsing-gw-navigation .main-nav > li:nth-child(8)",
    ninthBoutiqueMenu: "#browsing-gw-navigation .main-nav > li:nth-child(9)",
  },

  commands: [
    {
      // Login Steps Functions
      checkInitialElements: function () {
        return this.waitForElementVisible("@landingGenderSelection", 1000)
          .waitForElementVisible("@landingGenderFemale", 1000)
          .waitForElementVisible("@landingGenderMale", 1000)
          .waitForElementVisible("@landingGenderCloseButton", 1000)
          .waitForElementVisible("@accountIcon", 1000);
      },
      closeGenderSelection: function () {
        return this.click("@landingGenderCloseButton");
      },
      clickAccountIcon: function () {
        return this.click("@accountIcon", 1000);
      },
      checkGenderPopUpClosed: function () {
        return this.waitForElementNotPresent("@genderModuleBackground", 1000);
      },
      waitForDiscountPopUp: function () {
        return this.pause(2000);
      },
      checkDiscountPopUp: function () {
        return this.waitForElementVisible("@discountPopUp", 1000);
      },
      clickDiscountCloseButton: function () {
        return this.click("@discountPopUpCloseButton");
      },
      checkDiscountPopUpClosed: function () {
        return this.waitForElementNotPresent("@discountPopUp", 1000);
      },
      moveCursorToAccountIcon: function () {
        return this.moveToElement("@accountIcon", 0, 0).pause(2000);
      },
      checkLoggedAccountDdElements: function () {
        return this.waitForElementVisible(
          "@loggedAccountDd",
          1000
        ).waitForElementVisible("@loggedAccountDdUserName", 1000);
      },

      // Boutique Navigation Functions
      checkBoutiqueNavInitialElements: function () {
        return this.waitForElementVisible("@boutiqueNavBar", 1000)
          .waitForElementVisible("@firstBoutiqueMenu", 1000)
          .waitForElementVisible("@secondBoutiqueMenu", 1000)
          .waitForElementVisible("@thirdBoutiqueMenu", 1000)
          .waitForElementVisible("@fourthBoutiqueMenu", 1000)
          .waitForElementVisible("@fifthBoutiqueMenu", 1000)
          .waitForElementVisible("@sixthBoutiqueMenu", 1000)
          .waitForElementVisible("@seventhBoutiqueMenu", 1000)
          .waitForElementVisible("@eighthBoutiqueMenu", 1000)
          .waitForElementVisible("@ninthBoutiqueMenu", 1000);
      },
      clickSpecificBoutiqueMenu: function (boutiqueNumber) {
        switch (boutiqueNumber) {
          case "1":
            return this.click("@firstBoutiqueMenu");
          case "2":
            return this.click("@secondBoutiqueMenu");
          case "3":
            return this.click("@thirdBoutiqueMenu");
          case "4":
            return this.click("@fourthBoutiqueMenu");
          case "5":
            return this.click("@fifthBoutiqueMenu");
          case "6":
            return this.click("@sixthBoutiqueMenu");
          case "7":
            return this.click("@seventhBoutiqueMenu");
          case "8":
            return this.click("@eighthBoutiqueMenu");
          case "9":
            return this.click("@ninthBoutiqueMenu");
        }
      },
    },
  ],

  sections: {
    loginPage: loginPage,
    boutiquePages: boutiquePages,
  },
};
