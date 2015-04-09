const views = require("co-views"),
      path  = require("path");

module.exports = views(path.join(__dirname, "views"), {
  map: { html: "swig" }
});
