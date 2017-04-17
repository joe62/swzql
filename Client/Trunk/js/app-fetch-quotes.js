import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './quote';

class QuotesLibrary extends Component{
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


ReactDOM.render(<QuoteLibrary />,document.getElementById('react'));