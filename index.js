const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
require('dotenv').config();

const app = express();
const port = 8086;

app.engine('.hbs', exphbs({
    defaultLayout: 'base',
    extname: '.hbs',
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};

            this._sections[name] = options.fn(this);
            return null;
        }
    }
}));

// Setting template Engine
app.set('view engine', '.hbs');

// Set GTM container
app.locals.gtm_container = process.env.GTM_CONTAINER || "";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./controllers'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
