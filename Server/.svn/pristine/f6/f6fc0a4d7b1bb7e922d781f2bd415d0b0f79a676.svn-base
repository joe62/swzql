const mysql      = require('mysql');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

const connection = mysql.createConnection({
  host     :  config.host,
  user     : config.username,
  password : config.password,
  database : config.database
});
 
// connection.connect();

// const userString =`SELECT r.*,u.ID, u.usr FROM userroles ur 
// INNER JOIN roles r ON ur.roleid=r.roleid
// INNER JOIN users u ON ur.userid=u.ID
// WHERE u.ID = ?;
// `;



// connection.query(userString, function (error, rows, fields) {
//   if (error) throw error;
//   for (var i = 0; i < rows.length; i++) {
//   	let row =rows[i];
//   	console.log(`${i+1}. ${row.rolename} ${row.usr}`)
//   }
// });
 
// connection.end();



function getUserById(id){
	return new Promise (function(resolve,reject){
		
		connection.connect();

		var userString =`SELECT r.*,u.ID, u.usr FROM userroles ur 
			INNER JOIN roles r ON ur.roleid=r.roleid
			INNER JOIN users u ON ur.userid=u.ID
			WHERE u.ID = ?;
			`;
		var query_var = [id];
		
		connection.query(userString,query_var,function(err,rows,fields){
			connection.end();
			if(err){
				return reject(err);
			}
			resolve(rows);
		})
	})
}

function getUser(id, next){
	connection.connect();
			var userString =`SELECT r.*,u.ID, u.usr FROM userroles ur 
			INNER JOIN roles r ON ur.roleid=r.roleid
			INNER JOIN users u ON ur.userid=u.ID
			WHERE u.ID = ?;
			`;
		var query_var = [id];
		
		var query = connection.query(userString,query_var,function(err,rows,fields){
			connection.end();
			if(err){
				next(err);
			}
			else {
				next(null,rows)
			}
	})
}
// getUserById('1').then(function(rows){
// 	  for (var i = 0; i < rows.length; i++) {
//   		var row =rows[i];
//   		console.log(`${i+1}. ${row.rolename} ${row.usr}`)
//   	}
// }).catch(err=>console.log(err))

var db = {};

db.getUserById=getUserById;
db.getUser = getUser;

module.exports = db;