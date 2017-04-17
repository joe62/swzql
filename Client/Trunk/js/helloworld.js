import React from 'react';
import Relay from 'react-relay';
class HelloWorld extends React.Component{
  render(){
    const {hello} = this.props.someHelloFromRelay;
    return <h1>{hello}</h1>
  }
}

export default Relay.createContianer(HelloWorld,{
  fragments: {
    someHelloFromRelay: ()=>Relay.QL`
      fragment on Hello {
        hello
      }
    `,
  }
});
