var express = require('express');
var graphqlHTTP = require('express-graphql');
var { schema,root}= require('./schema');

// Construct a schema, using GraphQL schema language


// If Message had any complex fields, we'd put them on this object.


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});