'use strict';

const express = require('express');
const morgan = require('morgan');
const request = require('request');

const version = require('./package.json').version;

const app = express();

app.use('/vendor', express.static(__dirname + '/app/vendor'));
app.use('', express.static(__dirname + '/app'));

app.use(morgan('dev'));

app.get('/version', (req, res) => {
  res.json({
    application: 'weather',
    version: version
  });
});

const url = 'http://api.openweathermap.org/data/2.5/forecast';
const appId = 'd34cc60804d923ed977422a3a2d86f79';

app.get('/weather/:lat/:lon', (req, res) => {
  request({
    url: url,
    method: "GET",
    qs: {
      appid: appId,
      lat: req.params.lat,
      lon: req.params.lon,
      units: 'metric'
    }
  }, (error, response, body) => {

    if (error) {
      console.log('error', response);
      res.status(503);
      res.end();
    }

    if (response.statusCode === 200) {
      res.status(200);
      res.send(body);
    } else {
      res.status(503);
      res.send(body);
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/app/index.html');
});

const startServer = () => {
  const port = process.env.PORT || 3000;
  const server = app.listen(port);
  console.log(`weather server running on port ${port}`);

  process.on('exit', () => {
    server.kill('SIGTERM');
  });

  return server;
};

module.exports = startServer;
