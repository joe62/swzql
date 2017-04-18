
import {
  graphql,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} from 'graphql'

import {
  connectionDefinitions,
  connectionArgs,
  connectionFromArray,
  connectionFromPromisedArray
} from 'graphql-relay';

//import db from './db';

const User = new GraphQLObjectType({
  name: 'User',
  description: '用户',
  fields: () => ({
    ID: {
      type: GraphQLInt
    },
    usr: {
      type: GraphQLString
    },
    pwd: {
      type: GraphQLString
    },
    remark: {
      type: GraphQLString
    },
    mac: {
      type: GraphQLString
    },
    grade: {
      type: GraphQLInt
    },
    sip: {
      type: GraphQLString
    },
    DomainGUID: {
      type: GraphQLString
    },
    AutoID: {
      type: new GraphQLNonNull(GraphQLID)
    },
    roles: {
      type: new GraphQLList(Role),
      resolve(parent,args,{db}){
        return db.getRotesByUserId(parent.ID).then(rows=>{
          return rows;
        })
      }
    }
  })
});

const Role = new GraphQLObjectType({
  name: 'Role',
  description: '角色',
  fields: ()=>({
    roleid: {
      type: GraphQLID
    },
    rolename: {
      type: GraphQLString
    },
    ctrlgrade: {
      type: GraphQLInt
    },
    access: {
      type: GraphQLInt
    },
    usertype: {
      type: GraphQLInt
    },
    DomainGUID: {
      type: GraphQLString
    },
    AutoID: {
      type: GraphQLID
    },
    users: {
      type: new GraphQLList(User),
      resolve(parent,args,{db}){
        return db.getUsersByRoleId(parent.roleid).then(rows=>{
          return rows;
        })
      }
    }
  })
})

const Quote = new GraphQLObjectType({
  name: 'Quote',
  description: 'Quote Type',
  fields: {
    id: {type: GraphQLID},
    text: {type: GraphQLString},
    author: {type: GraphQLString}
  }
})

const { connectionType: QuotesConnectionType } = connectionDefinitions({
  name: 'Quote',
  nodeType: Quote
})

const QuotesLibraryType = new GraphQLObjectType({
  name: 'QuotesLibrary',
  description: 'Quote list type',
  fields: {
    quotesConnection: {
      type: QuotesConnectionType,
      description: 'abc',
      args: connectionArgs,
      resolve: (_,args, {db})=>{
        console.log(args);
        return connectionFromPromisedArray(
          db.getQuotes(),
          args
        )
      }
    },
    allQuotes: {
      type: new GraphQLList(Quote),
      description: '数据库中名言列表',
      resolve: (_,args,{db})=>
        db.getQuotes()
    }
  }
})

const UsersLibraryType = new GraphQLObjectType({
  name:'UsersLibrary',
  description: 'User list type',
  fields: {
    allUsers: {
      type: new GraphQLList(User),
      description: '用户列表信息',
      resolve: (_,args,{db})=> db.getUsers()
    }
  }
})


const InputUser = new GraphQLInputObjectType({
  name: 'InputUser',
  fields: () => ({
    usr: {
      type: GraphQLString
    },
    pwd: {
      type: GraphQLString
    },
    remark: {
      type: GraphQLString
    },
    mac: {
      type: GraphQLString
    },
    grade: {
      type: GraphQLInt
    },
    sip: {
      type: GraphQLString
    },
    DomainGUID: {
      type: GraphQLString
    }
  })
});

// a simple list 

const TeaType = new GraphQLObjectType({
  name: 'Tea',
  fields: ()=>({
    name: {type: GraphQLString},
    steepingTime: {type: GraphQLInt},
  }),
});

const StoreType = new GraphQLObjectType({
  name: 'Store',
  fields: ()=>({
    teas: {type: new GraphQLList(TeaType)}
  }),
});

const emptyLibrary = {};


const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    users: {
      type: new GraphQLList(User),
      description: '用户列表',
      resolve(_,args,{db}) {
        return db.getUsers().then(row=>{
          return row
        }).catch(err=>{
          console.log(err)
        });
      }
    },
    usersCount: {
      type: GraphQLInt,
      description: '用户数量',
      resolve(_,args,{db}){
        return db.getUsersCount()
      }
    },
    Quotes: {
      type: new GraphQLList(Quote),
      description: '名言列表',
      resolve(_,args,{db}){
        return db.getQuotes()
      }
    },
    quotesLibrary: {
      type: QuotesLibraryType,
      description: 'The Quotes Library',
      resolve: () => emptyLibrary
    },
    usersLibrary: {
      type: UsersLibraryType,
      description: 'The Users Library',
      resolve: () =>emptyLibrary
    },
    user: {
      type: User,
      description: '用户信息',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(_,args,{db}){
        return db.getUserById(args.id,args.usr).then(rows=>{
          return rows[0]
        }).catch(err=>{
          console.log(err)
        });
      }
    },
    role: {
      type: Role,
      description: '角色信息',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parent,args,{db}){
        return db.getRoleById(args.id).then(rows=>{
          return rows[0]
        })
      }
    },
    roles: {
      type: new GraphQLList(Role),
      description: '角色列表',
      resolve(_,args,{db}){
      return db.getRoles().then(rows=>{
          return rows
        })
      }
    },
    store: {
      type: StoreType,
      description: '故事',
      resolve(parent,args,{db}){
        return db.getStore()
      }
    },
    hello: {
      type: GraphQLString,
      description: 'Hello',
      resolve(_,args,{db}){
        return "Hello World";
      }
    }

  })
});



const Mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: ()=>({
      createUser: {
        type: User,
        args: {
          ID: {type: GraphQLInt},
          usr: {type: GraphQLString},
          pwd: {type: GraphQLString},
          remark: {type: GraphQLString},
          mac: {type: GraphQLString},
          grade: {type: GraphQLInt},
          sip: {type: GraphQLString},
          DomainGUID: {type: GraphQLString},
          AutoID: {type: GraphQLInt}
        },
        resolve: (source,args,{db})=>{
          const user = {...args};
          return db.createUser(user).then((id)=>{
            user.AutoID = id;
            return user;
          })
        }
      },
      createRole: {
        type: Role,
        description: '创建角色',
        args: {
          roleid: {type: new GraphQLNonNull(GraphQLID)},
          rolename: {type: GraphQLString},
          ctrlgrade: {type: GraphQLInt},
          access: {type: GraphQLInt},
          usertype: {type: GraphQLInt},
          DomainGUID: {type: GraphQLString},
          AutoID: {type: GraphQLID}
        },
        resolve: (source,args,{db})=>{
          const role = {...args};
          return db.createRole(role).then(id=>{
            role.AutoID=id;
            return role;
          })
        }
      },
      updateUser:{
        type: GraphQLInt,
        description: "1 = 更新成功 0 = 更新失败",
        args: {
          ID: {type: new GraphQLNonNull(GraphQLInt)},
          inputUser: {type: InputUser}
        },
        resolve: (source,args,{db})=>{
          return db.updateUser(args.ID,args.inputUser)
            .then(num=>{
              return num
            })
        }
      },
      deleteUser: {
        type: GraphQLInt,
        description: "删除用户操作 1 = 更新成功 0 = 更新失败",
        args: {
          ID: {type: new GraphQLNonNull(GraphQLInt)},
        },
        resolve: (source,args,{db})=>{
          return db.deleteUser(args.ID)
            .then(num=>{
              return num
            })
        }
      }
  })
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});



export default Schema;