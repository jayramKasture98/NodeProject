require('./models/db');

const express= require('express');
const path= require('path');
const exphbs =require('express-handlebars');
const bodyparser= require('body-parser');

const employeecontroller =  require('./controllers/employeecontroller');


var server = express();
server.use(bodyparser.urlencoded({
extended: true 
}));
server.use(bodyparser.json());
server.set('views', path.join(__dirname, '/views/'));
server.engine('hbs',exphbs({ extname: 'hbs',defaultLayout: 'mainLayout', layoutsDir: __dirname+ '/views/layouts/'}));

server.set('view engine','hbs');


server.listen(4000, () => {
  console.log('Express server started at port : 4000');
});

server.use('/employee',employeecontroller);