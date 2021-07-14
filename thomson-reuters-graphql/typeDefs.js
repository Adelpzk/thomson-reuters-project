const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    message: String
  }
`;

module.exports = typeDefs;
