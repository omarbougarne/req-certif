



require('dotenv').config();
var express = require('express');
var app = express();



var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); 


app.use(express.static('public'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami',(req,res) =>{
  let yourIP = req.ip;
  let yourLanguage = req.header("accept-language");
  let yourSoftware = req.header("user-agent");
  res.json({ipaddress : yourIP, language : yourLanguage, software : yourSoftware});
});


var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});