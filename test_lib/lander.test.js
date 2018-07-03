var assert = require("assert");
var chai = require("chai");
var chaiWebdriver = require("chai-webdriverio").default;
chai.use(chaiWebdriver(browser));
var landing = require("../pages/home.page");

describe("Site: Patriotpowerhub | Funnel: PPH Main | QA Smoke Test", function() {
  before("it opens the landing page and verifies page url", function() {
    //Goto landing Page
    landing.open_index();
    //Get Url
    var pageUrl = browser.getUrl();
    browser.debug();
    //Verify right page url
    assert.equal(pageUrl, landing.links.home_dev);
  });


  //   describe("visual Regression of NavBar", function() {
  //     it("Should get screen shots of navbar", function() {
  //       browser.debug();
  //       browser.checkElement("body > div.navbar.navbar-default > div");
  //     });
  //   });
  // });

  describe("Verifiy all major elems on landing page", function() {
    it("Navbar should be visiable on landing page", function() {
      browser.waitForVisible(landing.nav_bar_elem, 3000);
      chai.expect(landing.nav_bar_elem).to.be.visible();
    });
    it("Footer should be visiable on landing page", function() {
      browser.waitForVisible(landing.footer_bar_elem, 3000);
      chai.expect(landing.footer_bar_elem).to.be.visible();
    });
    it("testimonial should be visiable on landing page", function() {
      browser.waitForVisible(landing.testimonial_elem, 3000);
      chai.expect(landing.testimonial_elem).to.be.visible();
    });
    it("blog should be visiable on landing page", function() {
      browser.waitForVisible(landing.blog_elem, 3000);
      chai.expect(landing.blog_elem).to.be.visible();
    });
    it("guarantees should be visiable on landing page", function() {
      browser.waitForVisible(landing.guarantees_elem, 3000);
      chai.expect(landing.guarantees_elem).to.be.visible();
    });
  });
  describe("Verifiy landing page Link work", function() {
    it("Check the functionality of the purchase link", function() {
      browser.click(landing.purchase_link);
      //Get Url
      var pageUrl = browser.getUrl();
      //Verify right page url
      assert.equal(pageUrl, landing.links.checkout_stage);
    });
  });
});
