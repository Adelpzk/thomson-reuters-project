const { query } = require("express");
const fetch = require("node-fetch");

require("dotenv").config({ path: "../.env" });
const API_URL =
  "mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@salesforce-data.xg1r1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const Query = {
  message: (parent, args, context, info) => {
    return "Hello World";
  },
};

module.exports = {
  Query,
};
