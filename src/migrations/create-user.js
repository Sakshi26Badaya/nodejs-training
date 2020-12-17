module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('User', {
        id: {
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          primaryKey: true
        },
        firstName: {
          type: Sequelize.STRING(64)
        },
        lastName: {
          type: Sequelize.STRING(64)
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING(50),
          unique: true
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING(255)
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('User')
}
