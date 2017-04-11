// https://www.reindex.io/blog/building-a-graphql-server-with-node-js-and-sql/
import express from 'express'
import graphqlHTTP from 'express-graphql'
import Schema from './schema';
import {graphql} from 'graphql';
import db from './db'




const app = express()

app.use('/graphql',graphqlHTTP({
	schema: Schema,
	rootValue:root,
	graphiql:true,
	context: {db}
}));
app.listen(8080,()=>console.log('Noe brower to u16041:8080/graphql'))