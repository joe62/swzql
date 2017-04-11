
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

//import db from './db';

const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    stories: {
      type: new GraphQLList(Story),
      resolve(parent,args,{db}){
        return db.getStories(parent.id).then(rows=>{
          return rows;
        })
      }
    }
  })
});

const Story = new GraphQLObjectType({
  name: 'Story',
  fields: ()=>({
    id: {
      type: GraphQLID
    },
    text: {
      type: GraphQLString
    },
    author: {
      type: User,
      resolve(parent,args,{db}){

        return db.getUserById(parent.id).then(row=>{
          return row;
        })
      }
    }
  })
})


const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    viewer: {
      type: User,
      args: {
        name: {
          type: GraphQLString
        }
      },
      resolve(_,args,{db}) {
       
        return db.getUser(args.name).then(row=>{
          return row
        }).catch(err=>{
          console.log(err)
        });
      }
    },
    user: {
      type: User,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(_,args,{db}){
        return db.getUserById(args.id).then(row=>{
          return row
        }).catch(err=>{
          console.log(err)
        });
      }
    },
    story: {
      type: Story,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parent,args,{db}){
        return db.getStory(args.id).then(row=>{
          return row
        })
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;