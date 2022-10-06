const typeDefs = require('./schema')

const { ApolloServer } = require('apollo-server')

const mocks = {
  Query: () => ({
    coders: () => [...new Array(6)],
  }),
  Activity: () => ({
    id: () => '1',
    name: () => 'Coding',
    description: () => 'Coding is fun',
  }),
  Coder: () => ({
    id: () => '1',
    name: () => 'A coder who codes.',
    description: () => 'A coder who codes.',
    activities: () => [1],
  }),
}

const server = new ApolloServer({ typeDefs, mocks })

server.listen().then(() => {
  console.log('Server is running at http://localhost:4000')
})
