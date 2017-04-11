[Gettomg Started with GraphQL.js](http://graphql.org/graphql-js/)
===============================

### Prerequisites

- Nodejs
- ES6: [Promises][1], [classes][2], and [fat arrow functions][3]

    yarn init -y 
    yarn add graphql

[1]: http://www.html5rocks.com/en/tutorials/es6/promises/
[2]: http://javascriptplayground.com/blog/2014/07/introduction-to-es6-classes-tutorial/
[3]: https://strongloop.com/strongblog/an-introduction-to-javascript-es6-arrow-functions/

### Writing Code

```js
var {graphql, buildSchema} = require('graphql');

// Construct a shema, using Graphql schema language
var schema = buildSchema(`
    type Query {
        hello: String
    }`
);

var root = {
    hello: () => 'Hello world!'
}
graphql(schema,'{ hello }',root).then(res=>console.log(res));
```

```
 $ node office-graphqjs/gettingstarted.js
{ data: { hello: 'Hello world!' } }
```

Running an Express GraphQL Server
================================

    yarn add express express-graphql



