var MongoClient = require("mongodb").MongoClient;
const { query } = require("express");

const fetch = require("node-fetch");

require("dotenv").config({ path: "../.env" });
const mongo_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@salesforce-data.xg1r1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;



const Query = {
  message: (parent, args, context, info) => {
    return "Hello World";
  },

  products: async (parent, args, context, info) => {
    const { id } = args;
    console.log(id);
    //var response = null;
    if (id != null) {
      const db = await MongoClient.connect(mongo_url);
      const dbo = db.db("TomsonReutersData");
      var coll = dbo.collection("salesforceData");

      const result = await coll
        .find({ id: id })
        .toArray()
        .then((res) => res);
      return result;
    } else {
      const db = await MongoClient.connect(mongo_url);
      const dbo = db.db("TomsonReutersData");
      var coll = dbo.collection("salesforceData");

      const result = await coll
        .find()
        .toArray()
        .then((res) => res);
      return result;
    }
  },
};

module.exports = {
  Query,
  
};
