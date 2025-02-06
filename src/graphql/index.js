const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { userQueries, userMutations } = require("./resolvers/userResolver");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: { ...userQueries },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: { ...userMutations },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
