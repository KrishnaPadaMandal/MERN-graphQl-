const User = require("../../models/User");
const { GraphQLList, GraphQLID } = require("graphql");
const UserType = require("../schemas/userSchema");
const {GraphQLString, GraphQLInt} = require("graphql");


// Queries
const userQueries = {
  users: {
    type: new GraphQLList(UserType),
    resolve: async () => await User.find(),
  },
  user: {
    type: UserType,
    args: { id: { type: GraphQLID } },
    resolve: async (_, { id }) => await User.findById(id),
  },
};

// Mutations
const userMutations = {
  addUser: {
    type: UserType,
    args: {
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      age: { type: GraphQLInt },
    },
    resolve: async (_, args) => {
      const user = new User(args);
      const saveUser = await user.save();
      console.log("saveUser",saveUser)

    //   {errorCode:0,messagge:"User is Save",details:saveUser}
    // let message = "DONE"

      return saveUser
    },
  },
};

module.exports = { userQueries, userMutations };
