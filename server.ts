import { Sequelize } from "sequelize";

const db = process.env.PORTDB;
const username = process.env.PORTDB_USERNAME;
const password = process.env.PORTDB_PASSWORD ;
const PORT: number = Number(process.env.DB_PORT);

export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port : PORT,
});

