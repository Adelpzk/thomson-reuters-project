var MongoClient = require("mongodb").MongoClient;
const { query } = require("express");
const { GraphQLDateTime } = require("graphql-scalars");
const fetch = require("node-fetch");

require("dotenv").config({ path: "../.env" });
const mongo_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@salesforce-data.xg1r1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const DateTime = {
  DateTime: GraphQLDateTime,
};

const Query = {
  message: (parent, args, context, info) => {
    return "Hello World";
  },

  products: async (parent, args, context, info) => {
    const { id } = args;
    //var response = null;
    if (id) {
      MongoClient.connect(mongo_url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("TomsonReutersData");
        var coll = dbo.collection("salesforceData");

        coll.find({ id: id }).toArray(function (err, result) {
          if (err) throw err;
          console.log(result);
          response = result;
          db.close();
        });
      });
      //return response;
    } else {
      console.log("before call");

      init();

      async function getProducts() {
        const db = await MongoClient.connect(mongo_url);
        const dbo = db.db("TomsonReutersData");
        var coll = dbo.collection("salesforceData");
        var returnResult;

        const result = await coll.find().toArray(function (err, result) {
          if (err) throw err;
          //console.log(result);
          returnResult = returnResult;
          db.close();
        });
        return returnResult;
      }
      async function init() {
        try {
          var response = await getProducts();
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }

      /*
      MongoClient.connect(mongo_url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("TomsonReutersData");
        var coll = dbo.collection("salesforceData");

        coll.find().toArray(function (err, result) {
          if (err) throw err;
          console.log(result);w
          response = result;
          db.close();
        });
      });
      */

      console.log("After call");
      return response;
    }
    return response;
  },
};

module.exports = {
  Query,
  DateTime,
};
