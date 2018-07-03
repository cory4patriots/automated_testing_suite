var assert = require("assert");

describe("Site: Patriotpowerhub | Funnel: PPH Main | QA Smoke Test", function() {
  //
  it("Goto PPH Landing Page Choose Letter", function() {
    //Goto landing Page
    browser.url("/");

    //invokes full screen
    browser.windowHandleFullscreen();

    browser.click(
      "body > div.container-main > div.container > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div:nth-child(2) > a"
    );
  });
  //
  it("Verify PPH Letter Page URL", function() {
    //Get Url
    var pageUrl = browser.getUrl();
    //Verify right page url
    assert.equal(pageUrl, "https://aws.patriotpowerhub.com/letter/pph/index.php?AFID=MINISITE");
  });
  //
  it("Check title of the Letter Page", function() {
    var title = browser.getText("#wrapper > div.container-main > div > div.col-md-12.col-sm-12.col-xs-12 > h1");
    assert.equal(
      title,
      "Weird Pocket-Sized\nDevice Charges Your\nPhone Or Tablet — On The\nBeach Or On A Boat —\nAnd Can Even\nJump - Start 20 Cars On\nA Single Charge"
    );
  });
  //
  it("Click Add To Cart Button on Letter Page", function() {
    //Scroll to button
    browser.scroll("#wrapper > div.container-main > div > div.block.text-center.pad-30-t-b > a");
    //Click submit buttom
    browser.click("#wrapper > div.container-main > div > div.block.text-center.pad-30-t-b > a");
  });
  //
  it("Verify Checkout page URL", function() {
    //Get Url
    var pageUrl = browser.getUrl();
    //Verify right page url
    assert.equal(pageUrl, "https://aws.patriotpowerhub.com/checkout/pph/index.php?AFID=MINISITE");
  });
  //al
  it("Fillout PPH checkout form", function() {
    browser.setValue('input[name="firstName"]', "cory");
    browser.setValue('input[name="lastName"]', "kelly");
    browser.setValue('input[name="email"]', "cory_100@test.com");
    browser.setValue('input[name="billing-address"]', "Noship");
    browser.setValue('input[name="billing-city"]', "Noship");

    //Handle billing state dropdown
    var billingState = $("#billing-state");
    billingState.selectByIndex(1);

    browser.setValue('input[name="billing-zip"]', "11111");
    browser.setValue('input[name="creditCardNumber"]', "1184555555333333");

    //Handle card expires on year dropdown
    var cardExpiresYear = $("#card_expires_on_year");
    cardExpiresYear.selectByIndex(1);

    browser.setValue('input[name="card-cvv2"]', "111");

    //Submit form
    browser.click("#submitButton");

    //browser.debug();
    browser.waitForVisible(".paragraph-no-thanks");
  });
  //
  it("Verify PPG Generator page URL", function() {
    //Get Url
    var pageUrl = browser.getUrl();
    //Verify right page url
    assert.equal(pageUrl, "https://aws.patriotpowerhub.com/checkout/pph/oto/pph-generator.php?AFID=MINISITE");
  });
  //
  it("CheckBox and Click to Accept Generator Offer", function() {
    //Scroll to button
    browser.scroll("#check2");

    //Click checkBox and submit buttom
    browser.click("#check2");
    browser.click("#optin-form2 > div:nth-child(1) > button");
  });
  //
  it("Verify PPH Generator Platinum page URL", function() {
    //Get Url
    var pageUrl = browser.getUrl();
    //Verify right page url
    assert.equal(pageUrl, "https://aws.patriotpowerhub.com/checkout/pph/oto/pph-generator-platinum.php?AFID=MINISITE");
  });
  //
  it("CheckBox and Click to Accept platinum Offer", function() {
    //Scroll to button
    browser.scroll("#check2");

    //Click checkBox and submit buttom
    browser.click("#check2");
    browser.click("#optin-form2 > div:nth-child(1) > button");
  });
  //
  it("Verify PPH Food 3month Kit Page URL", function() {
    //Get Url
    var pageUrl = browser.getUrl();
    //Verify right page url
    assert.equal(pageUrl, "https://aws.patriotpowerhub.com/checkout/pph/oto/pph-food-3month-kit.php?AFID=MINISITE");
  });
  //
  it("Click to Accept 3month-Kit Offer", function() {
    //Scroll to button
    browser.scroll(
      "div.container-main > div:nth-child(2) > div:nth-child(6) > div.margin-tb-20 > div.text-center.pad-20-b > a"
    );

    //Click submit buttom
    browser.click(
      "div.container-main > div:nth-child(2) > div:nth-child(6) > div.margin-tb-20 > div.text-center.pad-20-b > a"
    );
  });
  //
  it("Verify PPH Food 1Year-Kit Page URL", function() {
    //Get Url
    var pageUrl = browser.getUrl();
    //Verify right page url
    assert.equal(pageUrl, "https://aws.patriotpowerhub.com/checkout/pph/oto/pph-food-1y-kit.php?AFID=MINISITE");
  });
  //
  it("Check terms change and Click to Accept 1Year-Kit Offer", function() {
    //Scroll to button
    browser.scroll("body > div.container-main > div:nth-child(5) > div.text-center > div > a");

    //Handle Quantity dropdown
    var quantity = $("#quantity");
    quantity.selectByIndex(1);

    var terms = browser.getText("#terms");
    assert.equal(
      terms,
      "I want to add (2) 1-Year Food4Patriots Kit(s) to my order at the 1-time discount sale price of $3994. I will get FREE Shipping and 31 FREE Bonus Gifts including 4 of the super-popular Survival Spring Personal Water Filters and 21,360+ heirloom survival seeds per kit."
    );

    //Click checkBox and submit buttom
    browser.click("#check1");
    browser.click("#optin-form > div.text-center.pad-30-t-b > button");
  });
  //
  it("Verify PPH Thank You Page URL", function() {
    //Get Url
    var pageUrl = browser.getUrl();
    //Verify right page url
    assert.equal(pageUrl, "https://aws.patriotpowerhub.com/checkout/pph/thankyou.php?AFID=MINISITE");
  });
  it("Get current session", function() {
    var storage = browser.sessions();
    console.log(storage);
  });
});
