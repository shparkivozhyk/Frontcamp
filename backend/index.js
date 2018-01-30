const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':'true'}));

app.use(bodyParser.json());



app.listen(3000);