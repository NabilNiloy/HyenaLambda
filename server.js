
//Express API imported so that it can be used in the application
const express = require('express');
const connection = require('./config/mysqlConfg.js');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const app = express();
const PORT = 4500;   //selected port for connection
const path = require('path')

const CustomerRoute = require('./routes/customer.routes.js');



//establish connection to mysql database
connection.connect(function(err) {
    if (err) throw err;
    console.log('Connection has been successfully established!');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//parsing incoming data and cookie parser(middleware)
//app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
//serving public file
app.use(express.static('./views'));



//custom routes
app.use('/', CustomerRoute);


//sessions middleware
app.use(sessions({
    secret: "strictsecretnone",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: 'false'
}));




//
app.listen(PORT, () => {
    console.log(`Application listening to port ${PORT}`);
});




module.exports = app;




