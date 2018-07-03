var Page = require("./page");

var landing = Object.create(Page, {
  home_link: {
    get: function() {
      return "body > div.navbar.navbar-default > div > div > div.navbar-collapse.collapse > ul > li:nth-child(1) > a";
    }
  },
  letter_link: {
    get: function() {
      return "body > div.container-main > div.container > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div:nth-child(2) > a";
    }
  },
  video_link: {
    get: function() {
      return "body > div.container-main > div.container > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.col-sm-6.col-md-6.text-center.hidden-xs > a";
    }
  },
  purchase_link: {
    get: function() {
      return "body > div.navbar.navbar-default > div > div > div.navbar-collapse.collapse > ul > li:nth-child(2) > a";
    }
  },
  open_index: {
    value: function() {
      Page.open.call(this, "index.php");
    }
  },
  nav_bar_elem: {
    get: function() {
      return "body > div.navbar.navbar-default";
    }
  },
  footer_bar_elem: {
    get: function() {
      return "body > div.container.footer";
    }
  },
  testimonial_elem: {
    get: function() {
      return "body > div.container-main > div.container > div > div:nth-child(2) > div:nth-child(2)";
    }
  },
  blog_elem: {
    get: function() {
      return "body > div.container-main > div.container > div > div:nth-child(2) > div:nth-child(3)";
    }
  },
  guarantees_elem: {
    get: function() {
      return "body > div.container-main > div.container > div > div:nth-child(2) > div:nth-child(4)";
    }
  },
  links: {
    get: function() {
      return {
        //Dev
        home_dev: "http://pph.dev.4patriots.net/index.php",
        checkout_dev: "http://pph.dev.4patriots.net/checkout/pph/index.php?AFID=MINISITE",
        video_dev: "http://ppg.dev.4patriots.net/video/ppg/index.php?AFID=MINISITE",
        //Stage
        home_stage: "https://pph.stage.4patriots.net/index.php",
        checkout_stage: "https://pph.stage.4patriots.net/checkout/pph/index.php",
        video_stage: "https://ppg.stage.4patriots.net/video/ppg/index.php?AFID=MINISITE"
      };
    }
  }
});

module.exports = landing;
