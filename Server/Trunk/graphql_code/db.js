const mysql      = require('mysql');
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];

const connection = mysql.createConnection({
  host     :  config.host,
  user     : config.username,
  password : config.password,
  database : config.database
});
 
 function getUser(name, next){
	connection.connect();
			const userString =`SELECT * FROM User WHERE name =?;
			`;
		const query_var = [name];
		
		const query = connection.query(userString,query_var,function(err,rows,fields){
			connection.release()
			if(err){
				next(err);
			}
			else {
				next(null,rows)
			}
	})
}

var db = {};

db.getUser = getUser;

module.exports = db;