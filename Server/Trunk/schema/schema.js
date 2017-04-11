// schema.js

import {
	graphql,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
} from 'graphql'


const User = new GraphQLObjectType({
	name: 'User',
	fields: ()=>({
			id: {
				type: GraphQLID
			},
			name: {
				type: GraphQLString
			}
		})
})

const Query = new GraphQLObjectType({
	name: 'Query',
	fields: ()=>({
		viewer: {
			type: User,
			resolve(){
				return {
					id:'123',
					name:'freiksenet'
				}
			}
		}
	})
})

const schema = new GraphQLSchema({
	query: Query
})

const userQuery=`{
	viewer {
		id,
		name
	}
}`

graphql(schema,userQuery).then(res=>console.log(res))

export default schema

