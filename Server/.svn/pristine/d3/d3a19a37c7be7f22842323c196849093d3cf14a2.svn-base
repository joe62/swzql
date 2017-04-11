const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto('swzvideo8','root','Videocomm1',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    output: './models',
    additional: {
        timestamps: false
    },
//    tables: ['users','roles','userroles']
});

auto.run(err=>{
	if(err)throw err;

	console.log(auto.tables);
	console.log(auto.foreignKeys);

})