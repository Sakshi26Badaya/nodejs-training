import { userInfo } from "os";
import sequelize, { DataTypes } from "sequelize"

module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define('user', {
        id: {
          allowNull: false,
          type: DataTypes.Integer,
          autoIncrement : true,
          primaryKey: true
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
          allowNull: false,
          type: DataTypes.STRING(50),
          unique: true
        },
        password: {
          allowNull: false,
          type: DataTypes.STRING(255)
        },
        createdAt: {
         type : 'TIMESTAMP',
         defaultValue : DataTypes.Now,
         field :'created_at'
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.Now,
          onUpdate:DataTypes.Now,
          field :'updated_at'
        },
       
        },
 );
return User;
}