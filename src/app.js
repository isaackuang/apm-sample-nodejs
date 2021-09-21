
console.log(process.env.APM_ENABLE)

if (process.env.APM_ENABLE == 'true') {
    console.log("Enable tracing")
    require('./tracing');
}

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});