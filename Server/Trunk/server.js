import express from 'express'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'
import {Schema,root} from './schema/schema1'

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
	schema: Schema,
	rootValue: root,
	graphiql: true
}))

const server = app.listen(8080,()=>{
	const host = server.address().address;
	const port = server.address().port;
	console.log(`Running a GraphQL API Server at http://${host}:${port}`)
})




