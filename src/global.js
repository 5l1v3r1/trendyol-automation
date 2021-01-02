require('dotenv').config();
const prodUrl = process.env.TRENDYOL_URL;
const userMail = process.env.USER_MAIL;
const userPassword = process.env.USER_PASSWORD;

module.exports = {
    prodUrl: prodUrl,
    userMail: userMail,
    userPassword: userPassword,
};