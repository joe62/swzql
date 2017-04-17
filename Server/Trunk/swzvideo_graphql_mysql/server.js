// https://www.reindex.io/blog/building-a-graphql-server-with-node-js-and-sql/
import express from 'express'
import graphqlHTTP from 'express-graphql'
import Schema from './schema';
import {graphql} from 'graphql';
import fs from 'fs';
import path from 'path';
import { introspectionQuery } from 'graphql/utilities';
import cors from 'cors';
import db from './db_pool'

const app = express()

app.use(cors())

app.use('/graphql',graphqlHTTP({
	schema: Schema,
//	rootValue: Root,
	graphiql:true,
	context: {db}
}));

graphql(Schema,introspectionQuery)
  .then(res=>{
    fs.writeFileSync(
      path.join(__dirname,'cache/schema.json'),
      JSON.stringify(res,null,2)
    );
    console.log('生成缓存schema.json文件')
  })
  .catch(console.error)

app.listen(8080,()=>console.log('Noe brower to u16041:8080/graphql'))