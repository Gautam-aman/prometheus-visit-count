"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestCount = requestCount;
const prom_client_1 = __importDefault(require("prom-client"));
const requestCounter = new prom_client_1.default.Counter({
    name: "Request Count",
    help: "total request count",
    labelNames: ["method", "route", "status_code"]
});
function requestCount(req, res, next) {
    requestCounter.inc({
        method: req.method,
        route: req.path,
    });
    next();
}
