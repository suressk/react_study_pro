// import { pathToRegexp } from "path-to-regexp";

const { pathToRegexp } = require("path-to-regexp");

let keys = [];

// console.log(pathToRegexp)

const regExp = pathToRegexp("/news/:id", keys);

const res = regExp.exec("/news/123");


console.log(res);