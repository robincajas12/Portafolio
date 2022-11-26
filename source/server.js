const express = require('express');
const path = require('path');
const api = require('./api');
const router = require('./routes');
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('css',express.static(path.join(__dirname,'..','node_modules','boostrap-icons')));
app.use(router);
app.use(api);
app.listen(`$PORT` || 3000, ()=>{
    console.log('Server now is up and working!')
});
