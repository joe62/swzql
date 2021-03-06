import mysql  from 'mysql';
import crypto from 'crypto';

const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/config.json')[env];



const pool = mysql.createPool({
	connectionLimit: 10,
  host     : config.host,
  user     : config.username,
  password : config.password,
  database : config.database
});   

function queryaync(sql,id){
	let querySring= sql
	if(id)
		querySring += pool.escape(id)

	console.log(querySring)
	return new Promise((resolve,reject)=>{
		pool.getConnection((err,conn)=>{
			if(err){
					return reject(err)
			}else {
				var query = conn.query(querySring,(error,rows,fields)=>{
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

function inertaync(sql,args){
	return new Promise((resolve,reject)=>{
		pool.getConnection((err,conn)=>{
			if(err){
					return reject(err)
			}else {
				var query = conn.query(sql,args,(error,rows,fields)=>{
					console.log(query.sql)
					if(error){
						return reject(err)
					}else {
						conn.release()
						console.log(rows.insertId)
						return resolve(rows.insertId)
					}
				})
			}
		})
	})
}

function updateaync(sql,args){
	return new Promise((resolve,reject)=>{
		pool.getConnection((err,conn)=>{
			if(err){
					return reject(err)
			}else {
				var query = conn.query(sql,args,(error,rows,fields)=>{
					console.log(query.sql)
					if(error){
						return reject(err)
					}else {
						conn.release()
						return resolve(rows.changedRows)
					}
				})
			}
		})
	})
}

function deleteaync(sql,args){
	return new Promise((resolve,reject)=>{
		pool.getConnection((err,conn)=>{
			if(err){
					return reject(err)
			}else {
				var query = conn.query(sql,args,(error,rows,fields)=>{
					console.log(query.sql)
					if(error){
						return reject(err)
					}else {
						conn.release()
						return resolve(rows.affectedRows)
					}
				})
			}
		})
	})
}

function getUsers(){
	const userString =`SELECT * FROM users`
	return queryaync(userString)
}
function getUsersCount(){
	const userString =`SELECT COUNT(*) AS count FROM users`
	return queryaync(userString).then(rows=>rows[0].count)
}
function getQuotes(searchText=''){
	const userString =`SELECT * FROM quotes where text like "%${searchText}%"`
	return queryaync(userString)
}
function getQuote(id){
	const userString =`SELECT * FROM quotes where id = ${id}`
	return queryaync(userString)
}

function getRoles(){
	const userString =`SELECT * FROM roles`
	return queryaync(userString)
}

function getRolesById(id){
		const userString =`SELECT * FROM roles WHERE roleid=`
		console.log(userIds)
		return queryaync(userString,id)
}

function getUserById(id){
	console.log(id)
	const userString =`SELECT * FROM users WHERE id =`
	return queryaync(userString,id)
}

function getUsersByRoleId(roleid){

	const userString =`
SELECT u.* from userroles ur
INNER JOIN users u ON ur.userid = u.id
WHERE ur.roleid = `

	return queryaync(userString,roleid)
}

function getRotesByUserId(userid){

	const userString =`
SELECT r.* from userroles ur
INNER JOIN roles r ON ur.roleid = r.roleid
WHERE ur.userid = `

	return queryaync(userString,userid)
}

function getRoleById(id){
	const userString ='SELECT * FROM roles  WHERE roleid ='
	return queryaync(userString,id)
}
function getUserRolesByUserId(userid){
	const userString =`SELECT roleid, DomainGuid FROM userroles  WHERE userid=`;
	return queryaync(userString,userid)	
}

function createUser(user){
	const userString =`INSERT INTO users SET ?`
	const usercpy = Object.assign({},user);
	usercpy.pwd = crypto.createHash('md5').update(user.pwd).digest('hex');
	return inertaync(userString,usercpy)
}

function createRole(role){
	const userString =`INSERT INTO roles SET ?`
	return inertaync(userString,role)
}

function updateUser(id,user){
	const userString =`UPDATE users SET ? WHERE ID = ?`
	const usercpy = Object.assign({},user);
	if(user.pwd)
		usercpy.pwd = crypto.createHash('md5').update(user.pwd).digest('hex');

	return updateaync(userString,[usercpy,id])
}

function deleteUser(id){
	const userString =`DELETE FROM users WHERE ID = ?`
	return deleteaync(userString, id)
}

const STORE = {
  teas: [
    {name: 'Earl Grey Blue Star', steepingTime: 5},
    {name: 'Milk Oolong', steepingTime: 3},
    {name: 'Gunpowder Golden Temple', steepingTime: 3},
    {name: 'Assam Hatimara', steepingTime: 5},
    {name: 'Bancha', steepingTime: 2},
    {name: 'Ceylon New Vithanakande', steepingTime: 5},
    {name: 'Golden Tip Yunnan', steepingTime: 5},
    {name: 'Jasmine Phoenix Pearls', steepingTime: 3},
    {name: 'Kenya Milima', steepingTime: 5},
    {name: 'Pu Erh First Grade', steepingTime: 4},
    {name: 'Sencha Makoto', steepingTime: 2},
  ],
};

function getStore(){
	return STORE;
};

const db = {};
db.getUsers = getUsers;
db.getUserById= getUserById;
db.getUsersByRoleId = getUsersByRoleId;
db.getRoles = getRoles;
db.getRoleById= getRoleById;
db.getRotesByUserId = getRotesByUserId;
db.getUserRolesByUserId= getUserRolesByUserId;
db.createUser = createUser;
db.createRole = createRole;
db.updateUser = updateUser;
db.deleteUser = deleteUser;
db.getStore = getStore;
db.getUsersCount = getUsersCount;
db.getQuotes = getQuotes;
db.getQuote=getQuote;

export default db;

