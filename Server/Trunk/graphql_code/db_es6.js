import mysql  from 'mysql';
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];

const connection = mysql.createConnection({
  host     :  config.host,
  user     : config.username,
  password : config.password,
  database : config.database
});
 
  function getUser(name){
 	return new Promise((resolve,reject)=>{
 			connection.connect();
			const userString =`SELECT * FROM user WHERE name =?;
			`;
		const query_var = [name];
		
		const query = connection.query(userString,query_var,function(err,rows,fields){
			connection.end();
			if(err){
				return reject(err);
			}
			else {
				resolve(rows[0])
			}
	});
	console.log(query.sql)	
	
 	})


}

// export default class Db {
// 	getUser(name){
// 	 	return new Promise((resolve,reject)=>{
// 	 			connection.connect();
// 				const userString =`SELECT * FROM user WHERE name =?;
// 				`;
// 			const query_var = [name];
			
// 			const query = connection.query(userString,query_var,function(err,rows,fields){
// 				connection.end();
// 				if(err){
// 					return reject(err);
// 				}
// 				else {
// 					resolve(rows[0])
// 				}
// 		});
// 		console.log(query.sql)	
		
// 	 	})
// 	}
// }

const db = {};
db.getUser= getUser;

export default db;