const typeDefs = require('./schema')

const { ApolloServer } = require('apollo-server')

const mocks = {
  Query: () => ({
    coders: () => [...new Array(6)],
  }),
  Activity: () => ({
    //id: () => '1', // Removed hard coded ID to remove console error: Encountered two children with the same key, `1`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    name: () => 'Coding',
    description: () => 'Coding is fun',
  }),
  Coder: () => ({
    //id: () => '1', // Removed hard coded ID to remove console error: Encountered two children with the same key, `1`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    name: () => 'A coder who codes.',
    description: () => 'A coder who codes.',
    activities: () => [1],
  }),
}

const server = new ApolloServer({ typeDefs, mocks })

server.listen().then(() => {
  console.log('Server is running at http://localhost:4000')
})
