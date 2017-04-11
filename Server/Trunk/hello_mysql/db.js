import mysql from 'mysql'
import Conf from '../config/config.json'


const env       = process.env.NODE_ENV || 'development'
const config    =  Conf[env]
console.log(config)



const pool = mysql.createPool({
		connectionLimit: 10,
    host     : config.host,
    user     : config.username,
    password : config.password,
    database : config.database
});    

const db = {};




db.queryaync = (sql)=>{
	return new Promise((resolve,reject)=>{
		pool.getConnection((err,conn)=>{
			if(err){
					return reject(err)
			}else {
				var query = conn.query(sql,(error,rows,fields)=>{
					if(error){
						return reject(err)
					}else {
						conn.release()
						return resolve(rows)
					}
				})
			}
		})
	})
}

db.query = (sql,callback)=>{

	pool.getConnection((err,connection)=>{
		if(err){
			callback(err,null)
		}else 
		{
			var query = connection.query(sql,(error,rows,fields)=>{
				
				if(error){
					callback(error,null)
				}else {
					callback(null,rows) 
				}
			})
			console.log(query.sql)
		}
		connection.release()

	})
}

/*db.query = (sql, callback) =>{
	if(!sql){
		callback()
		return 
	}
	pool.query(sql,(err,rows, fields)=>{
		if(err){
			console.log(err)
			callback(err,null)
			return 
		}
		callback(null,rows,fields)

	})
}*/


export default db;

/*const query = (sql, values, callback)=>{
	pool.getConnection((err, conn)=>{
		if(err){
			callback(err,false)
		}else {
			const querys = conn.query(sql,values,(err,rows)=>{
				if(err){
					callback(err,false)
				}else {
					callback(null,rows)
				}
			})
		}
	})
}


class SwzvideoProvider{
	createTable(sql,callback){
		query(sql,[],callback)
	}
	getDataById(table,id,callback){
		const _sql = "select * from ?? where id =?"
		query(_sql,[table,id,start,end],callback);
	}
	getDataByPage(tabe,start,end,callback){
		const _sql = "select * from ?? limit ?, ?"
		query(_sql,[table,start,end],callback)
	}
	insertData(table,values,callback){
		const _sql = "insert into ?? set ?"
		query(_sql,[table,values],callback)
	}
	updateData(table,values,id,callback){
		const _sql = "update ?? set ? where id = ?"
		query(_sql,[table,values,id],callback)
	}
	deleteDataById(table,id,callback){
		let _sql="delete from ?? where id = ?"
		query(_sql,[table,id],callback)
	}
}

export default SwzvideoProvider;*/