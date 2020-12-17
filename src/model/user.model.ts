import {auth} from '../config/auth'
import * as bcrypt from 'bcrypt'
import * as dotenv from 'dotenv';
import { sequelize } from '../config/sequelize';
import * as Sequelize from "sequelize";
  dotenv.config();

  const User = sequelize.define("User", 
  {
    id: {
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    firstName: {
      allowNull: false,
      type: Sequelize.STRING
    },
    lastName: {
      allowNull: false,
      type: Sequelize.STRING
    },
    
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    
    email: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  },
    {
     
      tableName: "User",
    }
  );
  

  User.prototype.generateToken = function generateToken() {
    console.log('JWT:' + process.env.SECRET)
    return auth.createJWTToken({ email: this.email, id: this.id})
  }

  User.prototype.authenticate = function authenticate(value) {
    if (bcrypt.compareSync(value, this.password))
      return this
    else
      return false
  }

export default User;