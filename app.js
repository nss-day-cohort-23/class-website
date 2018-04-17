"use strict";

const path = require('path')
const express = require('express');
const app = express();
const pug = require('pug');
const { students } = require("./data/class");
const { techStack } = require('./data/tech');

app.set('view engine', 'pug');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index', { students, techStack });
});

app.listen('8080', () => {
  console.log(`Listening on port 8080`);
});