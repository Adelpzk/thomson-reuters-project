const { gql } = require("apollo-server");
const { GraphQLDateTime } = require("graphql-scalars");

const typeDefs = gql`
  scalar DateTime

  type Query {
    message: String
    products(id: Int): [Product]
  }

  type Product {
    title: String
    author: [String]
    publisher: String
    jurisdiction: String
    publication_date: DateTime
    ibsn: String
    price: Float
    image: String
    text: String
    id: Int
  }
`;

module.exports = typeDefs;
