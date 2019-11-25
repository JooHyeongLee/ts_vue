"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const serve = require("koa-static");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const cors = require("@koa/cors");
const json = require("koa-json");
const path = require("path");
const routes_1 = require("./backend/routes");
const app = new Koa();
app.use(logger());
app.use(serve(path.join(__dirname, 'public')));
app.use(bodyParser());
app.use(cors());
app.use(json());
app.use(routes_1.default());
exports.default = app;
app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});
//# sourceMappingURL=index.js.map