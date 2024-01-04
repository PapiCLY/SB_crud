const express = require('express')
const dotenv = require('dotenv')
const morgan =  require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')
const hbs = exphbs.create({})

//Load config
dotenv.config({ path: './config/config.env'})

connectDB()

const app = express()

//logging morgan when running on dev server
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//Routes
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))