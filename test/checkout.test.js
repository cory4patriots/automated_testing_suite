var assert = require("assert");
var chai = require("chai");
var chaiWebdriver = require("chai-webdriverio").default;
chai.use(chaiWebdriver(browser));
var login = require("../pages/login.page");

describe("PPG Main Login Page", function() {
  it("Should Open Checkout Page and Verify right page url", function() {
    //Goto landing Page
    login.openCheckout();
    //Get Url
    var Url = browser.getUrl();
    // prettier-ignore
    var trimmedUrl = Url.split("/").splice(-3).join("/").toString();
    //Verify right page url
    assert.equal(trimmedUrl, login.PageCheck);
  });
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
