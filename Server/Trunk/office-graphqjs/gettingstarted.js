var {graphql, buildSchema} = require('graphql');

// Construct a shema, using Graphql schema language
var schema = buildSchema(`
	type Query {
		hello: String
	}`
);

var root = {
	hello: () => 'Hello world!'
}
graphql(schema,'{ hello }',root).then(res=>console.log(res));