
import { Sequelize } from 'sequelize'
import {environment} from './'
const dotenv = require('dotenv');
dotenv.config();
// const db = environment.DB;
// const host = environment.DB_HOST;
// const user = environment.DB_USER;
// const password = environment.DB_PASSWORD ;
//const PORT: number = Number(environment.DB_PORT);
export const sequelize = new Sequelize(process.env.DB, process.env.DB_USER,process.env.DB_PASSWORD, {
  dialect: "mysql",
  port : environment.DB_PORT,
  host : environment.DB_HOST
});

sequelize.sync()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the :', err)
  })
