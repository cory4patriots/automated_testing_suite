var Page = require("./page");
var formData = require("../pages/utility/userData");

var login = Object.create(Page, {
  openCheckout: {
    value: function() {
      Page.open.call(this, "checkout/pph/index.php");
    }
  },
  PageCheck: {
    get: function() {
      var url = "checkout/pph/index.php";
      return url;
    }
  },
  firstName: {
    get: function() {
      var firstNameElm = 'input[name="firstName"]';
      return browser.setValue(firstNameElm, formData.firstName);
    }
  },
  lastName: {
    get: function() {
      var lastNameElm = 'input[name="lastName"]';
      return browser.setValue(lastNameElm, formData.lastName);
    }
  },
  email: {
    get: function() {
      var emailElm = 'input[name="email"]';
      return browser.setValue(emailElm, formData.email);
    }
  },
  billingAddress: {
    get: function() {
      var billingAddressElm = 'input[name="billing-address"]';
      return browser.setValue(billingAddressElm, formData.billingAddress);
    }
  },
  cardExpiresYear: {
    get: function() {
      var ExpireYearElm = $("#card_expires_on_year");
      var cardExpiresYear = ExpireYearElm.selectByIndex(1);
      return cardExpiresYear;
    }
  },
  billingCity: {
    get: function() {
      var billingCityElm = 'input[name="billing-city"]';
      return browser.setValue(billingCityElm, formData.billingCity);
    }
  },
  billingState: {
    get: function() {
      var billingElm = $("#billing-state");
      var billingState = billingElm.selectByIndex(1);
      return billingState;
    }
  },
  cvv: {
    get: function() {
      var cvvElm = 'input[name="card-cvv2"]';
      return browser.setValue(cvvElm, formData.cvv);
    }
  },
  billingZip: {
    get: function() {
      var billingZipElm = 'input[name="billing-zip"]';
      return browser.setValue(billingZipElm, formData.billingZip);
    }
  },
  creditCardNumber: {
    get: function() {
      var creditCardNumberElm = 'input[name="creditCardNumber"]';
      return browser.setValue(creditCardNumberElm, formData.creditCardNumber);
    }
  },
  submitFormBtn: {
    get: function() {
      return "#submitButton";
    }
  }
});
module.exports = login;

// links: {
//   get: function() {
//     return {
//       //Dev
//       home_dev: "http://pph.dev.4patriots.net/index.php",
//       checkout_dev: "http://pph.dev.4patriots.net/checkout/pph/index.php?AFID=MINISITE",
//       video_dev: "http://ppg.dev.4patriots.net/video/ppg/index.php?AFID=MINISITE",
//       //Stage
//       home_stage: "https://pph.stage.4patriots.net/index.php?AFID=MINISITE",
//       checkout_stage: "https://pph.stage.4patriots.net/checkout/pph/index.php?AFID=MINISITE",
//       video_stage: "https://ppg.stage.4patriots.net/video/ppg/index.php?AFID=MINISITE"
//     };
//   }
// }
