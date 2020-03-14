const { Sequelize } = require('sequelize')

// Passing parameters seperatelty
const sequelize = new Sequelize('datamart', 'root', '1234', {
    dialect: 'mysql',
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
    })
    .catch(err => {
        console.log('Unable to connect to the database:', err)
    })

sequelize.close()