import React, {Component} from 'react';
import {render} from 'react-dom';
import Relay from 'relay';
import Quote from './quote';

class QuoteLibrary extends Component{
  state={Quotes: []};
  componentDidMount(){
    // 加载名言列表到this.state.allQuotes
    fetch(`http://u16041:8080/graphql?query={
      Quotes{id text author}
    }`)
    .then(res=>res.json())
    .then(json=>this.setState(json.data))
    .catch(ex=>console.error(ex))
  }
  render(){
    console.log(this.state)
    return (
      <div className="quotes-list">
      
        {this.state.Quotes.map(quote=>
          <Quote key={quote.id} quote={quote} />
        )}
      </div>
    )
  }
}

render(<QuoteLibrary />,document.getElementById('react'));