var express = require('express');
var {graphqlHTTP} = require('express-graphql');
var { buildSchema } = require('graphql');

// Initialize a GraphQL schema
var schema = buildSchema(`
  type Query {
    user(id: Int!): Person
    users(shark: String): [Person]
  },
  type Person {
    id: Int
    name: String
    age: Int
    shark: String
  }
`);
// Sample users
var users = [
    {
        id: 1,
        name: 'Brian',
        age: '21',
        shark: 'Great White Shark'
    },
    {
        id: 2,
        name: 'Kim',
        age: '22',
        shark: 'Whale Shark'
    },
    {
        id: 3,
        name: 'Faith',
        age: '23',
        shark: 'Hammerhead Shark'
    },
    {
        id: 4,
        name: 'Joseph',
        age: '23',
        shark: 'Tiger Shark'
    },
    {
        id: 5,
        name: 'Joy',
        age: '25',
        shark: 'Hammerhead Shark'
    }
];

// Return a single user
var getUser = function (args) {
    // ...
}

// Return a list of users
var retrieveUsers = function (args) {
    // ...
}
// Root resolver
var root = {
    user: getUser,  // Resolver function to return user with specific id
    users: retrieveUsers
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,  // Must be provided
    rootValue: root,
    graphiql: true,  // Enable GraphiQL when server endpoint is accessed in browser
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));;
