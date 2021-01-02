const loginPage = require('../sections/loginPage');

module.exports = {
    url: function() {
        return this.api.launchUrl;
    },
    elements: {
        landingGenderSelection: '.homepage-popup',
        landingGenderFemale: '.homepage-popup .gender-button[data-gender-id=\'1\']',
        landingGenderMale: '.homepage-popup .gender-button[data-gender-id=\'2\']',
        landingGenderCloseButton: '.fancybox-close',
        loginUserIcon: '.account-user',
        genderModuleBackground: '.fancybox-overlay',
        discountPopUp: '.notification-popup-container',
        discountPopUpCloseButton: '.modal-close',
    },

    commands: [
        {
            checkInitialElements: function() {
                return this.waitForElementVisible('@landingGenderSelection', 1000)
                    .waitForElementVisible('@landingGenderFemale', 1000)
                    .waitForElementVisible('@landingGenderMale', 1000)
                    .waitForElementVisible('@landingGenderCloseButton', 1000)
                    .waitForElementVisible('@loginUserIcon', 1000);
            },
            closeGenderSelection: function () {
              return this.click('@landingGenderCloseButton');
            },
            clickLoginIcon: function () {
              return this.click('@loginUserIcon', 1000);
            },
            checkGenderPopUpClosed: function (){
                return this.waitForElementNotPresent('@genderModuleBackground', 1000);
            },
            waitForDiscountPopUp: function () {
              return this.pause(1000);
            },
            checkDiscountPopUp: function () {
              return this.waitForElementVisible('@discountPopUp', 1000, undefined, false);
            },
            clickDiscountCloseButton: function () {
              return this.click('@discountPopUpCloseButton');
            },
            checkDiscountPopUpClosed: function () {
              return this.waitForElementNotPresent('@discountPopUp', 1000);
            },
        },
    ],

    sections: {
        loginPage: loginPage,
    },
};
