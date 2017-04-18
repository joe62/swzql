import React from 'react';
import {render} from 'react-dom';
import Relay from 'react-relay';
import QuotesLibrary from './app-relay-quotes';


class AppRoute extends Relay.Route{
  static routeName = 'App';
  static queries = {
    library: (Component) => Relay.QL`
      query QuotesLibrary {
        quotesLibrary {
          ${Component.getFragment('library')}
        }
      }
    `
  }
}

render(
  <Relay.RootContainer 
    Component={QuotesLibrary}
    route={new AppRoute()}
  />,document.getElementById('react'));