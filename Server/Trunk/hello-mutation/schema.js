var { buildSchema } = require('graphql');
var db = require('./db');

var schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type Query {
    getMessage(id: ID!): Message
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);

class Message {
  constructor(id, {content, author}) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}

// Maps username to content

var root = {
  getMessage: function ({id}) {
    if (!db[id]) {
      throw new Error('no message exists with id ' + id);
    }
    return new Message(id, db[id]);
  },
  createMessage: function ({input}) {
    // Create a random id for our "database".
    var id = require('crypto').randomBytes(10).toString('hex');

    db[id] = input;
    return new Message(id, input);
  },
  updateMessage: function ({id, input}) {
    if (!db[id]) {
      throw new Error('no message exists with id ' + id);
    }
    // This replaces all old data, but some apps might want partial update.
    db[id] = input;
    return new Message(id, input);
  }
}

module.exports = {schema,root};