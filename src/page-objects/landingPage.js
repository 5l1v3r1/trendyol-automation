const loginPage = require("../sections/loginPage");
const boutiquePages = require("../sections/boutiquePages");
const productListingPage = require("../sections/productListingPage");
const productDetailPage = require("../sections/productDetailPage");
const basketPage = require("../sections/basketPage");

module.exports = {
  elements: {
    // Base CSS Variables
    genderSelectionPopUp: ".homepage-popup",
    genderSelectionPopUpCloseButton: ".fancybox-close",
    discountReminderPopUp: ".notification-popup-container",
    discountReminderPopUpCloseButton: ".modal-close",
    accountIcon: ".account-user",
    basketIcon: ".account-basket",
    loggedAccountDd: ".user-loggedin-container",
    loggedAccountDdUserName: ".user-name",

    // Menu Navigation CSS Variables
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
      checkInitialElements: function () {
        return this.waitForElementVisible(
          "@accountIcon",
          1000
        ).waitForElementVisible("@basketIcon", 1000);
      },
      handleGenderSelectionPopup: function () {
        return this.waitForElementVisible("@genderSelectionPopUp", 1000)
          .click("@genderSelectionPopUpCloseButton")
          .waitForElementNotVisible("@genderSelectionPopUp", 1000);
      },
      handleDiscountReminderPopUp: function () {
        return this.isVisible("@discountReminderPopUp", (result) => {
          if (result.value) {
            this.click("@discountReminderPopUpCloseButton");
          }
        });
      },
      clickAccountIcon: function () {
        return this.click("@accountIcon", 1000);
      },
      clickBasketIcon: function () {
        return this.click("@basketIcon");
      },
      moveCursorToAccountIcon: function () {
        return this.moveToElement("@accountIcon", 0, 0).pause(1000);
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
      clickSpecificBoutiqueMenu: function (menuNumber) {
        switch (menuNumber) {
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
    productListingPage: productListingPage,
    productDetailPage: productDetailPage,
    basketPage: basketPage,
  },
};
