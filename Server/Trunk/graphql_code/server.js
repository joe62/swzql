const mysql = require('mysql');
var express = require('express');
var graphqlHTTP = require('express-graphql');
var {buildSchema} = require('graphql');

var app = express()

var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

console.log(config);

const connection = mysql.createConnection(config);


var schema = buildSchema(`
	type Query {
		hello: String
	}
`);

var root = {hello: ()=> `hello world!`};

app.use('/graphql',graphqlHTTP({
	schema: schema,
	rootValue:root,
	graphiql:true
}));
app.listen(4000,()=>console.log('Noe brower to u16041:4000/graphql'))
