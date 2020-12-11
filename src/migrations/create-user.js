module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('user', {
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
        phone: {
          type: Sequelize.STRING(20)
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('user')
}
