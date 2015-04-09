const render = require("../render"),
      config = require("../config"),
      Feed   = require("../models/feed");

const IndexController = {
  routes: function() {
    return [
      { method: "get", url: "/", fn: this.get }
    ];
  },
  get: function *() {

    var items = yield Feed.read(config.app.feed);

    this.body = yield render("index", { items: items });
  }
};

module.exports = IndexController;
