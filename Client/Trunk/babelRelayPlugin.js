const babelRelayPlugin = require('babel-relay-plugin');
const schema = require('../../Server/Trunk/swzvideo_graphql_mysql/cache/schema.json');
module.exports = babelRelayPlugin(schema.data);