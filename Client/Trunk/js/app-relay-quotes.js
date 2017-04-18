import React from 'react';
import {render} from 'react-dom';
import Relay from 'react-relay';
import Quote from './quote';

class QuotesLibrary extends React.Component{
  render(){
    return (
      <div className="quotes-list">
        {this.props.library.quotesConnection.edges.map(edge=>
          <Quote key={edge.node.id} quote={edge.node} />
        )}
      </div>
    )
  }
}

export default Relay.createContainer(QuotesLibrary,{
  fragments:{
    library: () => Relay.QL `
    fragment on QuotesLibrary {
      quotesConnection(first: 3) {
        edges {
          node {
            id
            ${Quote.getFragment('quote')}
        }}
      }
    }
  `
  }
})

