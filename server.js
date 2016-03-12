var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
var app = express();
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());
//mongoose must come before routes
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.use(express.static(path.join(__dirname, './client')));
app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});