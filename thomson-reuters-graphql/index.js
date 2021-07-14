var MongoClient = require("mongodb").MongoClient;
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

require("dotenv").config({ path: "../.env" });

var mongo_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@salesforce-data.xg1r1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

<<<<<<< HEAD
MongoClient.connect(url, function (err, db) {
=======
/*
MongoClient.connect(mongo_url, function (err, db) {
>>>>>>> 4fce6e016f38bff234ffb90ee4ec1013a26e13ee
  if (err) throw err;
  var dbo = db.db("TomsonReutersData");
  var coll = dbo.collection("salesforceData");

  coll.find({ id: 1 }).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
<<<<<<< HEAD

=======
*/

const PORT = process.env.PORT || 3030;

server.listen(PORT).then((serverInfo) => {
  console.log(`Server running at port: ${serverInfo.url}`);
});
>>>>>>> 4fce6e016f38bff234ffb90ee4ec1013a26e13ee
