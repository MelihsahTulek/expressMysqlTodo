const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const homeRouter = require('./routers/homeRouter');
const bodyParser = require('body-parser');

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use('/public', express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// ROUTER
app.use('/', homeRouter);




app.listen(3000, () => {
    console.log('Example app listening on port 3000');
});

//Run app, then load http://localhost:3000 in a browser to see the output.
