const Sequelize = require('sequelize'); //gets the sqeualize npm package
require('dotenv').config(); //this is what you need to get the .env file to work


let sequelize;
if(process.env.JAWSDB_URL) { //this if statement checks to see if the backend is jawsDB or not
  sequelize = new Sequelize(process.env.JAWSDB_URL)
}else{
  sequelize = new Sequelize(
    process.env.DB_NAME, //these are the variables that are saved in the .env files
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}


module.exports = sequelize;