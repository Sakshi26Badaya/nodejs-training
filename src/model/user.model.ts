import {createJWToken} from '../config/auth'
import * as bcrypt from 'bcrypt'
import * as dotenv from 'dotenv';

dotenv.config();

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [6, 100]
      }
    },
    
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 128],
          msg: 'Email address must be between 6 and 128 characters in length'
        },
        isEmail: {
          msg: 'Email address must be valid'
        }
      }
    },
  }, {
    indexes: [{unique: true, fields: ['email']}],
    timestamps: true,
    freezeTableName: true,
    tableName: 'users'
  })


  User.prototype.generateToken = function generateToken() {
    console.log('JWT:' + process.env.SECRET)
    return createJWToken({ email: this.email, id: this.id})
  }

  User.prototype.authenticate = function authenticate(value) {
    if (bcrypt.compareSync(value, this.password))
      return this
    else
      return false
  }
  return User
}
