const feed       = require("feed-read"),
      q          = require("q");

const Feed = {
  read: function(url) {
    const deferred = q.defer();

    feed(url, function(err, articles) {
      if (err) { deferred.reject(err); }

      deferred.resolve(articles);
    });

    return deferred.promise;
  }
};

module.exports = Feed;
