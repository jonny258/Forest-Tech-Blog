const express = require('express')
const app = express()

const routes = require('./controllers')
const sequelize = require('./config/connection')

const PORT = process.env.PORT || 3001;

app.use(routes)


sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('site lvie at http://localhost:3001/'))
})