const express = require('express') 
const path = require('path')

const exphbs = require('express-handlebars')

const routes = require('./controllers')
const sequelize = require('./config/connection')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const app = express() //creates the app with express
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create()

const sessionInstance = { //This is what makes the session
    secret: 'zdMwutRaKNRGMemRwgUNaHIZv',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
};

//middleware and view engines
app.use(session(sessionInstance));

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)

//launchs the app with sequalize
sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('site live at http://localhost:3001/'))
})