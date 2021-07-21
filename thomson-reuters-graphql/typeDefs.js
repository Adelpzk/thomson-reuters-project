const { gql } = require("apollo-server");


const typeDefs = gql`
  

  type Query {
    message: String
    products(id: Int): [Product]
  }

  type Product {
    title: String
    author: [String]
    publisher: String
    jurisdiction: String
    publication_date: String
    ibsn: String
    price: Float
    image: String
    text: String
    id: Int
    description: String
  }
`;

module.exports = typeDefs;
