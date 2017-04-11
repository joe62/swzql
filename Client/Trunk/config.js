const path = require('path');

const root = path.resolve(__dirname);
const buildLocation = path.join(root,'public','build');
const uploadLocation = path.join(root,'public','upload');
const appURL = process.env.APP_URI || 'http://localhost';
const port = process.env.PORT || 3000;

module.exports = {
	root,
	buildLocation,
	uploadLocation,
	favicon: path.join(root,'public','favicon', 'favicon.ico'),
	hostname: 'localhost',
	port,
	devServerPort: 8080,
	appURL,
	mongoURL: process.env.MONGODB_URI || 'mongodb://localhost/question-it',
	mockViewer: process.env.MOCK_V
}