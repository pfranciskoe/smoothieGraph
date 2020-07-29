const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const app = express();
const db = require('./config/keys').mongoURI;

const mongoose = require('mongoose');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


//This route will be used as an endpoint to interact with Graphql, 
//All queries will go through this route. 
app.use('/graphql', graphqlHTTP({
    //directing express-graphql to use this schema to map out the graph 
    schema,
    //directing express-graphql to use graphiql when goto '/graphql' address in the browser
    //which provides an interface to make GraphQl queries
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 