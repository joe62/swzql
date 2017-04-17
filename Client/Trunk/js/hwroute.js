import Relay from 'react-relay';

class HelloRoute extends Relay.Route{
  static routeName = 'LiShadan';
  static queries = {
    someHelloFromRelay: (hello)=>Relay.QL`
      query GreetingsQuery {
        hello{
          ${hello.getFragment('someHelloFromRelay')}
        }
      }
    `,
  };
}
