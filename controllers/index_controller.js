const render = require("../render");

const IndexController = {
  routes: function() {
    return [
      { method: "get", url: "/", fn: this.get }
    ];
  },
  get: function *() {
    this.body = yield render("index", { items: ["hello", "world"] });
  }
};

module.exports = IndexController;
