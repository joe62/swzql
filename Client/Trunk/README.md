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