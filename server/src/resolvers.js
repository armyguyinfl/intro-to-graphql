const resolvers = {
  Query: {
    // coders: (_, __, { dataSources }) => {}, // Originally: coders: (parent, args, context, info) => {},
    coders: (_, __, { dataSources }) => {
      return dataSources.coderAPI.getAllCoders()
    },
    activities: (_, __, { dataSources }) => {
      return dataSources.activityAPI.getAllActivities()
    },
  },
}

module.exports = resolvers
