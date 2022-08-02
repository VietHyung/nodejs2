
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
// import {fileURLToPath} from 'url';

const app = express();
const port = 8000;

// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

const route = require('./routes');
const db = require('./config/db');

db.connect();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'));
// http logger
app.use(morgan('combined'));

//Templates engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a + b
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);


// const bodyParser = require('body-parser')
//
// app.use(bodyParser.urlencoded({
//     extended: true
//   }))
// app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})
