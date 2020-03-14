const { Sequelize, Model, DataTypes } = require('sequelize')

// Passing parameters seperatelty
const sequelize = new Sequelize('datamart', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    port:3306,
    define: {
        underscored: false,
        freezeTableName: true,
        charset: 'utf8',
        dialectOptions: {
          collate: 'utf8_general_ci'
        },
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const User = sequelize.define('User', {
    uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    name: Sequelize.STRING,
    bio: Sequelize.TEXT
})

sequelize
    .sync({
        logging: console.log,
        force: false
    })
    // .authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
    })
    .catch(err => {
        console.log('Unable to connect to the database:', err)
    }).then(() => {
        sequelize.close()
    })
