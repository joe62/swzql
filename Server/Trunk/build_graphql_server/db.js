import mysql  from 'mysql';
const env       = process.env.NODE_ENV || 'development';
const config    = require('./config.json')[env];

 		const connection = mysql.createConnection({
  host     :  config.host,
  user     : config.username,
  password : config.password,
  database : config.database
});
 		
 			connection.connect();

 
  function getUser(name){
	 	return new Promise((resolve,reject)=>{

				const userString =`SELECT * FROM user WHERE name =?;
				`;
			const query_var = [name];
			
			const query = connection.query(userString,query_var,function(err,rows,fields){
			
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

function getUserById(id){
	 	return new Promise((resolve,reject)=>{

				const userString =`SELECT * FROM user WHERE id =?;
				`;
			const query_var = [id];
			
			const query = connection.query(userString,query_var,function(err,rows,fields){
			
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

  function getStory(id){
	 	return new Promise((resolve,reject)=>{

				const userString =`SELECT * FROM story  WHERE id =?;`;
			const query_var = [id];
			
			const query = connection.query(userString,query_var,function(err,rows,fields){
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

function getStories(userid){
		 	return new Promise((resolve,reject)=>{

			const userString =`SELECT * FROM story  WHERE author=?;`;
			const query_var = [userid];
			
			const query = connection.query(userString,query_var,function(err,rows,fields){
				if(err){
					return reject(err);
				}
				else {
					resolve(rows)
				}
		});
		console.log(query.sql)	
 	})
}
const db = {};
db.getUser= getUser;
db.getUserById= getUserById;
db.getStory= getStory;
db.getStories= getStories;

export default db;


