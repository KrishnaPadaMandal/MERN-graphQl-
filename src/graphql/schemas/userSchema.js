const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema } = require("graphql");

// User Type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },

  }),
});

module.exports = UserType;
