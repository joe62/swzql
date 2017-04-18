第五章 使GraphQL查询符合Relay
===========================

应该将GraphQL层次结构与React组件层次结构相匹配，并对数据进行任何分页，应该实现Relay的连接模型。

- `Relay.QL` 把GraphQL查询的模板字符串转为对象

  Relay.QL`query {...}` => {}

  ### 手动生成schema.json缓存文件

```diff
  // \\U16041\yunphy\root\swzql\Server\Trunk\swzvideo_graphql_mysql\server.js
...
+ import fs from 'fs';
+ import path from 'path';
+ import { introspectionQuery } from 'graphql/utilities';

...

+ graphql(Schema,introspectionQuery)
+   .then(res=>{
+     fs.writeFileSync(
+       path.join(__dirname,'cache/schema.json'),
+       JSON.stringify(res,null,2)
+     );
+     console.log('生成缓存schema.json文件')
+   })
+   .catch(console.error)
app.listen(8080,()=>console.log('Noe brower to u16041:8080/graphql'))
```

`执行`
```
root@u16041:~/swzql/Server/Trunk# ./node_modules/.bin/babel-node ./swzvideo_graphql_mysql/server.js
生成缓存schema.json文件

```

```
// schema.json
{
  "data": {
    "__schema": {
      "queryType": {
        "name": "Query"
      },
      "mutationType": {
        "name": "RootMutationType"
      },
      "subscriptionType": null,
      "types": [
        {
          "kind": "OBJECT",
          "name": "Query",
          "description": null,
          "fields": [
            {
              "name": "users",
...

```


### 5.2 名言库的顶级字段

我们的React应用程序组件层次结构是QuotesLibrary -> Quote。QuotesLibrary和Quote是具有数据要求的组件。在上一章中，当我们使用AJAX提取操作获取了GraphQL查询时，我们在同一个地方指定了我们需要的所有要求; 然而，React应用程序中的不同组件可以告诉我们他们关心的需求的不同部分。我们通过查看render()函数中每个组件使用的变量来提取各自的需求：

Quote组件 -> this.props.quote.text, this.props.quote.author
QuoteLibrary组件 -> this.state.Quotes, quote.id

QuotesLibrary组件只关心每个quote中的Id，不需要其它属性。

这是Relay中托盘概念的基本思想; 每个组件将为其数据要求提供Relay片段。 这些片段可以包含彼此，就像AllQuote片段包含OneQuote组件一样。 Relay将这些片段放在一起，并为应用起点形成一个GraphQL操作。


通过Relay获取Quotes数据
======================

### 跨域访问代理设置

`webpack.config.js`

```js
...
appServer = new WebpackDevServer(compiler, {
    hot: true,
    inline: true,
    contentBase: '/public/',
    proxy: {'/graphql': `http://u16041:${GRAPHQL_PORT}`},
    publicPath: '/js/',
    stats: {colors: true}
  });
...
```

### 运行

**服务器** `cd swzql/Server/Trunk/ && yarn start:mysql`
**客户端** ` cd swzql/Client/Trunk/ && yarn start:dev` 

打开[名言](http://u16041:3000/)

### Relay's connection model

用于分页显示列表

#### 在schema.js中增加guotesConnection字段

  yarn add -D graphql-relay

```js
import {
  connectionDefinitions, // 
  connectionArgs,
  connectionFromArray,
  connectionFromPromisedArray
} from 'graphql-relay';
```

连接参数：first, last, afer, before