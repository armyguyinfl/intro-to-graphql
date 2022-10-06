const typeDefs = require("./schema");

const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({ typeDefs, mocks: true });

server.listen().then(() => {
  console.log("Server is running at http://localhost:4000");
});
