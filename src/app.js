const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// GraphQL Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Enables the GraphiQL interface
  })
);

module.exports = app;
