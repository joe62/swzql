// https://www.reindex.io/blog/building-a-graphql-server-with-node-js-and-sql/
import express from 'express'
import graphqlHTTP from 'express-graphql'

import {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
} from 'graphql'

import {getUser} from './db_es6';

graphql

// const User = new GraphQLObjectType({
// 	name: 'User',
// 	fields: ()=>({
// 		id: {
// 			type: GraphQLInt
// 		},
// 		usr: {
// 			type: GraphQLString
// 		}
// 	})
// })

// const Query = new GraphQLObjectType({
// 	name:'Query',
// 	fields: () =>({
// 		User: {
// 			type: User,
// 			args:{
// 				type: GraphQLString
// 			},
// 			resolve(parent,args,){
// 				return getUser('Kari').then(rows=>{
// 					return {

// 					}
// 				})
// 				return {
// 					id: '123',
// 					usr: 'joe'
// 				}
// 			}
// 		}
// 	})
// })

// const Schema = new GraphQLSchema({
// 	query: Query
// })

// const app = express()

// app.use('/graphql',graphqlHTTP({
// 	schema: Schema,
// 	rootValue:root,
// 	graphiql:true
// }));
// app.listen(8080,()=>console.log('Noe brower to u16041:8080/graphql'))
