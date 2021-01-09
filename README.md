# UI Automation for Trendyol with NightwatchJS

This project is UI automated test for "https://www.trendyol.com/" with specific scenario.

### Requirements
1. Node v14.15.3 should be installed on the system
2. At least Firefox or Chrome web browser should be installed on the system

### How to Run
1. Please run following command: `npm install`
2. To run on both Firefox and Chrome, please run following command: `npm run test`
3. To run only on Firefox, please run following command: `npm run test-firefox`
4. To run only on Chrome, please run following command: `npm run test-chrome`

### Test Scenario

1. Should be logged in with registered account
2. After logging, all menu tabs should be navigated and checked boutique images are loaded or not
3. Navigate to any boutique and check product images are loaded or not
4. Navigate to any product detail
5. Add the product to the basket
