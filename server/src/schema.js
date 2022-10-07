const { gql } = require('apollo-server')

const typeDefs = gql`
  # your type definitions here
  type Query {
    coders: [Coder]
    activities: [Activity]
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

  # Coder mutation to udpate
  type Mutation {
    addCoder(name: String!, description: String!): AddCoderResponse!
  }
  type AddCoderResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "New coder after a successful mutation"
    coder: Coder
  }
`

module.exports = typeDefs
