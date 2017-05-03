第六章 Relay的变量与对象标识
=========================

> `Relay变量` - `Relay全局ID` - `Relay的节点接口`- `搜索`

### 实现搜索

利用`Relay`的连接模式实现名言显示条目数可控，现在实现在对全部名言的搜索功能。

#### 在GraphQL API中添加搜索功能

  quotesConnection(searchTerm: "findm")

修改`swzvideo_graphql_mysql/schema.js`

```diff
+let connectionArgsWithSearch = connectionArgs;
+connectionArgsWithSearch.searchTerm={type: GraphQLString};

const QuotesLibraryType = new GraphQLObjectType({
  name: 'QuotesLibrary',
  description: '名言集(可导航，可搜索)',
  fields: {
    quotesConnection: {
      type: QuotesConnectionType,
      description: '存储于数据库中的名言集',
-     args: connectionArgs,      
+     args: connectionArgsWithSearch,
      resolve: (_,args, {db})=>{
        return connectionFromPromisedArray(
-         db.getQuotes(),
+         db.getQuotes(args.searchTerm),
          args
        )
      }
    },
  }
})

`SQL语句 -  SELECT * FROM quotes where text like "%best%"`

```
`GraphiQL中测试`

```js
{
  quotesLibrary{
   quotesConnection(searchTerm: "best"){
    pageInfo{
      hasNextPage
      hasPreviousPage
    }
    edges{
      cursor
      node{
        id
        text
      }
    }
  }
  }
}
```

#### 添加一个搜索组件search-form.js

  yarn add lodash

#### 修改app-relay-quotes.js

#### 体验Relay的缓存功能：

1. 在搜索框输入"do", 显示4条搜索结果。
2. 接着输入"or", 此时显示1条
3. 删除"or", 此时显示之前的4条信息，但没有向服务器请求查询



### GraphQL @include指令

### Relay的全局ID

