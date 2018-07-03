var assert = require("assert");
var chai = require("chai");
var chaiWebdriver = require("chai-webdriverio").default;
chai.use(chaiWebdriver(browser));
var login = require("../pages/login.page");

describe("Site: Patriotpowerhub | Funnel: PPH Main | QA Smoke Test", function() {
  before("it opens the checkout page and verifies page url", function() {
    //Goto landing Page
    login.open_checkout();
    //Get Url
    var pageUrl = browser.getUrl();
    //Verify right page url
    //assert.equal(pageUrl, login.links.checkout_stage);
  });

  describe("Login Page", function() {
    it("Should let you log in with valid credentials", function() {
      login.firstName;
      login.lastName;
      login.email;
      login.billingAddress;
      login.cardExpiresYear;
      login.billingCity;
      login.billingState;
      login.cvv;
      login.billingZip;
      login.creditCardNumber;
      // browser.debug();
      browser.click(login.submitFormBtn);
    });
  });
});
