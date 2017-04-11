import db from './hello_mysql/db'

const id=1;
const userString =`SELECT r.*,u.ID, u.usr FROM userroles ur 
			INNER JOIN roles r ON ur.roleid=r.roleid
			INNER JOIN users u ON ur.userid=u.ID
			WHERE u.ID = ${id};
			`;
// db.query(userString,(err,rows,fields)=>{
// 	if(err){
// 		console.log(err)
// 	}
// 	console.log(JSON.stringify(rows))
// })
// console.log("End")

db.queryaync(userString).then(rows=>{

	console.log(JSON.stringify(rows))

}).catch(err=>console.log(err))

console.log("End2")