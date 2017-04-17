const fs = require('fs');
const path = require('path');
const { graphql } = require('graphql');
const mySchema = require('./schema');

const {introspectionQuery} = require('graphql/utilities');

graphql(mySchema,introspectionQuery)
  .then(res=>{
    fs.writeFileSync(
      path.join(__dirname,'cache/schema.json'),
      JSON.stringify(res,null,2)
    );
    console.log('生成缓存schema.json文件')
  })
  .catch(console.error)