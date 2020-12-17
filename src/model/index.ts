import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'
const basename = path.basename(module.filename)
import { sequelize } from '../config/sequelize'
let db = {}
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    console.log(file)
    console.log(path.join(__dirname, file))
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    console.log(file)
    const model = sequelize['import'](path.join(__dirname, file))
    db[model['User']] = model
  })
Object.keys(db).forEach(function(User) {
  console.log(User)
  if (db[User].associate) {
    db[User].associate(db)
  }
})

db['sequelize'] = sequelize
db['Sequelize'] = Sequelize

export default db
