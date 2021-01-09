const driversPath = {
  selenium: require("selenium-server").path,
  chrome: require("chromedriver").path,
  firefox: require("geckodriver").path,
};

module.exports = {
  src_folders: ["src/tests"],
  output_folder: "outputs",
  page_objects_path: ["src/page-objects"],
  globals_path: "src/global.js",

  selenium: {
    start_process: true,
    server_path: driversPath.selenium,
    host: "127.0.0.1",
    port: 4444,
    start_session: true,
    log_path: "outputs",
    cli_args: {
      "webdriver.chrome.driver": driversPath.chrome,
      "webdriver.gecko.driver": driversPath.firefox,
    },
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
    },
    chrome: {
      screenshots: {
        enabled: false,
      },
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true,
        chromeOptions: {
          args: [
            "--no-sandbox",
            "--disable-web-security",
            "--ignore-certificate-errors",
            "--disable-notifications",
            "--disable-extensions",
          ],
        },
      },
    },
    firefox: {
      "dom.webnotifications.enabled": false,
      desiredCapabilities: {
        browserName: "firefox",
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true,
        nativeEvents: true,
        "moz:firefoxOptions": {
          args: [
            "--no-sandbox",
            "--disable-web-security",
            "--ignore-certificate-errors",
            "--disable-notifications",
            "--disable-extensions",
          ],
        },
      },
    },
  },
};
