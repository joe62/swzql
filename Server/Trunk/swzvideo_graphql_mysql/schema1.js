import { buildSchema } from 'graphql'
import db from './db_pool'

export const Schema = buildSchema(`
	type User {
		id: ID!
		usr: String
		pwd: String
		remark: String
		mac: String
		DomainGUID: String
		roles: [Role]
	}
	
	type Role {
		roleid: ID!
		rolename: String
		ctrlgrade: Int
		access: Int
		usertype: Int
		user: User
	}
	type Query {
		getUsers: [User]
		getRoles: [Role]
	}
`)



export const Root = {
	getUsers: ()=>{
		return db.getUsers().then(rows=>{
			return rows
		})
	},
	getRoles: ()=>{
		return db.getRoles().then(rows=>{
			return rows
		})
	},

}
