const loginPage = require("../sections/loginPage");

module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    // Basic CSS Variables
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
  },

  commands: [
    {
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
        return this.pause(5000);
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
    },
  ],

  sections: {
    loginPage: loginPage,
  },
};
