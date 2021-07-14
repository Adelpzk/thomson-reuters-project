var MongoClient = require("mongodb").MongoClient;

require("dotenv").config({ path: "../.env" });

var url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@salesforce-data.xg1r1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

/*
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("TomsonReutersData");
  var coll = dbo.collection("salesforceData");

  coll.find({ id: 1 }).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/
