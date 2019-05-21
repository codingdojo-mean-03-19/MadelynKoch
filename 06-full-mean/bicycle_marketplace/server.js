const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(cookieParser('sklgaogjpaekgnalskdjgaqqergjsljioae'));
app.use(session({
    saveUninitialized: true,
    secret: 'session-secret',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 36000000
    }
}))

require('./server/config/routes.js')(app);

app.listen(4200);









