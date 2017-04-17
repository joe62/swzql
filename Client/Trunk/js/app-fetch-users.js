import React from 'react';
import ReactDOM from 'react-dom';

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

class UsersLibrary extends React.Component{
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