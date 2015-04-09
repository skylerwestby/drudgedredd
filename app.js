var config         = require("./config"),
    app            = require("koa")(),
    bodyParser     = require("koa-bodyparser"),
    overrideMethod = require("koa-override-method"),
    logger         = require("koa-logger"),
    route          = require("koa-route"),
    routes         = require("./routes")(app, route),
    static         = require("koa-static"),
    path           = require("path");

app.use(logger());
app.use(bodyParser());
app.use(static(path.join(__dirname, "public")));
app.use(function *(next) {
  this.request.method = overrideMethod.call(this, this.request.body);
  yield next;
});

app.use(function *(next) {
  try {
    yield next;
  } catch(error) {
    this.status = error.status || 500;
    this.body = error.message;
  }
});

routes.all().map(routes.setup);

app.listen(config.app.port);
console.log("listening on port %d", config.app.port);
