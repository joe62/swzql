// https://www.reindex.io/blog/building-a-graphql-server-with-node-js-and-sql/
import express from 'express'
import graphqlHTTP from 'express-graphql'

import {
	graphql,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
} from 'graphql'

import db from './db_es6';

// db.getUser('Kari').then(user=>{
// 	console.log(user)
// });


const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    }
  })
});



const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    viewer: {
      type: User,
      resolve(_,args) {
      	const getUser = db.getUser;
				return getUser('Kari').then(row=>{
					return row
				});
				
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

graphql(Schema, `{
  viewer {
    id,
    name
  }
}`).then((result) => console.log(result));
