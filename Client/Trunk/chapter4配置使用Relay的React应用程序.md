第四章 配置使用Relay的React应用程序
================================


### Setting up Webpack

webpack, babel

```bash
yarn add -D webpack@1.14.0
yarn add -D babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-0
yarn add -D express
yarn add react react-dom

```

### Using GraphQL without Relay in React application

使用GraphQL不一定都要用Relay，其实用Ajax就可。下面就用fetch库

首先创建一个React组件，从QuotesLibrary组件开始，它是Quote组件的列表。

### 控制台获取用户数据

```bash 名言
curl -X POST -H "Content-Type: ap Quotes{text author}}"}' http://u16041:8080/graphql

{"data":{"Quotes":[{"text":"The best preparation for tomorrow is doing your best today","author":"H. Jackson Brown"},{"text":"If opportunity doesn't knock, build a door","author":"Milton Berle"},{"text":"Try to be a rainbow in someone's cloud","author":"Maya Angelou"}]}}


```

```bash 用户数据
curl -X POST -H "Content-Type: application/json" -d '{"query": "{ users{ID usr roles {rolename}}}"}' http://u16041:8080/graphql
{"data":{"users":[{"ID":1,"usr":"admin","roles":[{"rolename":"管理员组"}]},{"ID":2,"usr":"admin1","roles":[{"rolename":"管理员组"},{"rolename":"DEMO组"}]},{"ID":3,"usr":"user","roles":[{"rolename":"操作组"}]},{"ID":4,"usr":"demo","roles":[{"rolename":"DEMO组"}]},{"ID":5,"usr":"joe","roles":[]}]}}

```

### 获取users数据

```js
import React, {Component} from 'react';
import {render} from 'react-dom';

class User extends React.Component{
  render(){
    return (
      <blockquote>
        <p>{this.props.user.usr}</p>
        <footer>{JSON.stringify(this.props.user.roles)}</footer>
      </blockquote>
    )
  }
}

class UsersLibrary extends Component{
  state={users: []};
  componentDidMount(){
    fetch(`http://u16041:8080/graphql?query={
      users {ID usr roles {rolename}}
    }`)
    .then(res=>res.json())
    .then(json=>this.setState(json.data))
    .catch(ex=>console.error(ex))
  }
  render(){
    
    return (
      <div className="users-list">
      
        {this.state.users.map(user=>
          <User key={user.ID} user={user} />
        )}
      </div>
    )
  }
}

render(<UsersLibrary />,document.getElementById('react'));
```

### Relay容器

```
yarn add -D babel-relay-plugin
yarn add react-relay
```

```js
import Relay from 'react-relay';
...
QuotesLibrary = Relay.createContainer(QuotesLibrary,{
  fragments:{}
})

class AppRoute extends Relay.Route{
  static routeName = 'App';
}

render(
  <Relay.RootContainer 
    Component={QuotesLibrary}
    route={new AppRoute()}
  />,document.getElementById('react'));
  
```