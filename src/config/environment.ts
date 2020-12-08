require('dotenv').config()
module.exports = {
   development: {
     db : process.env.DB,
     host : process.env.DB_HOST,
     user : process.env.DB_USER,
     password : process.env.DB_PASSWORD,
     secret:  process.env.SECRET,
     port: process.env.PORT
   }
 }
