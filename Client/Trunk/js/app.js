import React, {Component} from 'react';
import {render} from 'react-dom';

//import Quote from './quote';

// class App extends Component {
//   static defaultProps = {
//     greeting: 'Hello'
//   };
//   render(){
//     return (
//       <div>
//       {this.props.greeting} world
//       </div>
//     );
//   }
// }

// render(<App />,document.getElementById('react'));

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
    // 加载名言列表到this.state.allQuotes
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