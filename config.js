var config = {};

config.app = {};
config.app.port = process.env.PORT || 3000;
config.app.feed = process.env.FEED || "http://www.drudgereportfeed.com/rss.xml";

module.exports = config;
