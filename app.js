require('dotenv').config()
require('./src/config/development') // load config
require('./src/database') // load database
const { urlencoded } = require('express'),
    {cors} = require('./src/utils/cors'),
    {development} = require("./src/config/development")
    express = require('express'),
    app = express()



// importing module routers
const auth = require('./src/modules/auth/router')

// initialise modules
app.use(express.json())
    .use(cors) // loaded cors
    .use(express.urlencoded({ extended: false }))
    //.use(auth) // mounting modules
    // .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)) // loaded swagger documentation
    .get('/', (req,res) => res.send('Connected'))
    .listen(development.PORT, () =>  console.log(`App is running on port ${development.PORT}`)) // launch express app

    

    module.exports.app = app;