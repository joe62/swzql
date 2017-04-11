var db = require('./hello_mysql/db_demo')

// db.getUserById('1').then(function(rows){
// 	  for (var i = 0; i < rows.length; i++) {
//   		var row =rows[i];
//   		console.log(`dksjfkj ${i+1}. ${row.rolename} ${row.usr}`)
//   	}
// }).catch(err=>console.log(err))

db.getUser('3',function(err,rows){
	if(err){

	}else {
			  for (var i = 0; i < rows.length; i++) {
  						var row =rows[i];
  						console.log(`111 ${i+1}. ${row.rolename} ${row.usr}`)
  	}
	}
})