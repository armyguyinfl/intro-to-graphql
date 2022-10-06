const { gql } = require("apollo-server");

const typeDefs = gql`
  # your type definitions here
  type Query {
    coders: [Coder]
  }

  type Coder {
    id: ID!
    name: String!
    "Single line comment example."
    description: String
    activities: [ID]
  }

  """
  Block comment example,
  which can be multiple lines.
  """
  type Activity {
    id: ID!
    name: String!
    description: String
  }
`;

module.exports = typeDefs;
