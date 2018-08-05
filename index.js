const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./api');
const _ = require('lodash');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const whitelist = ['http://localhost:3010', 'http://localhost:8080'];

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || _.includes(whitelist, origin)) {
      return cb(null, true);
    }
    return cb(new Error('Not allowed by CORS'));
  },
}));

app.use('/api', api);

const server = app.listen(3333, function () {
  console.log('Server running at https://localhost:' + server.address().port);
});
