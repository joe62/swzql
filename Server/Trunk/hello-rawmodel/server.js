import { Model, ModelRecipe } from 'rawmodel'
import { graphql, buildSchema } from 'graphql'

class App extends Model { // root resolver
  public hello () { // `hello` field resolver
    return 'Hello World!';
  }
}

const schema = buildSchema(`
	type Query {
		hello: String
	}
`);

var root = new App();

graphql(schema, '{hello}', root).then(res=>console.log(res))