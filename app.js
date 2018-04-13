"use strict";

const path = require('path')
const express = require('express');
const app = express();
const pug = require('pug');
const { nssClass } = require("./class");

app.set('view engine', 'pug');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index', {
    nssClass: nssClass
  });
});

app.listen('8080', () => {
  console.log(`Listening on port 8080`);
});