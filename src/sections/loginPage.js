module.exports = {
  selector: "#login-register",
  locateStrategy: "css selector",
  elements: {
    // Login CSS Variables
    signInContainer: ".lr-container",
    userEmailInput: "#login-email",
    passwordInput: "#login-password-input",
    loginButton: ".q-primary",
  },
  commands: [
    {
      checkInitialElements: function () {
        return this.waitForElementVisible("@signInContainer", 1000)
          .waitForElementVisible("@userEmailInput", 1000)
          .waitForElementVisible("@passwordInput", 1000)
          .waitForElementVisible("@loginButton", 1000);
      },
      setUserEmail: function (text) {
        return this.setValue("@userEmailInput", text);
      },
      setUserPassword: function (text) {
        return this.setValue("@passwordInput", text);
      },
      clickLoginButton: function () {
        return this.click("@loginButton").waitForElementNotPresent(
          "@signInContainer",
          5000
        );
      },
    },
  ],
};
