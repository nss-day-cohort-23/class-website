"use strict";

const path = require('path')
const express = require('express');
const app = express();
const pug = require('pug');

app.set('view engine', 'pug');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index', {
    nssClass: [
      {
        name: 'Melissa Bell',
        img: 'public/img/bell'
      }, {
        name: 'Kenzie Bottoms',
        img: 'public/img/bottoms'
      }, {
        name: 'Jake Brose',
        img: 'public/img/brose'
      }, {
        name: 'Courtney Brothers',
        img: 'public/img/brothers'
      }, {
        name: 'Jordan Castelloe',
        img: 'public/img/castelloe'
      }, {
        name: 'Joe Chesney',
        img: 'public/img/chesney'
      }, {
        name: 'Tim Conner',
        img: 'public/img/conner'
      }, {
        name: 'Eduardo DuQuesne',
        img: 'public/img/duquesne'
      }, {
        name: 'Valerie Freeman',
        img: 'public/img/freeman'
      }, {
        name: 'Brandon Green',
        img: 'public/img/green'
      }, {
        name: 'David Hazlett',
        img: 'public/img/hazlett'
      }, {
        name: 'Tucker Jackson',
        img: 'public/img/jackson'
      }, {
        name: 'David Ketch',
        img: 'public/img/ketch'
      }, {
        name: 'Ben Marcantel',
        img: 'public/img/marcantel'
      }, {
        name: 'Griffin Markay',
        img: 'public/img/markay'
      }, {
        name: 'Sarah Morris',
        img: 'public/img/morris'
      }, {
        name: 'Trey Mosley',
        img: 'public/img/mosley'
      }, {
        name: 'Craig Orcutt',
        img: 'public/img/orcutt'
      }, {
        name: 'Hunter Phillips',
        img: 'public/img/phillips'
      }, {
        name: 'Kate Rieger',
        img: 'public/img/rieger'
      }, {
        name: 'Kyle Saldana',
        img: 'public/img/saldana'
      }, {
        name: 'Slade Utley',
        img: 'public/img/utley'
      }, {
        name: 'Eli Wilson',
        img: 'public/img/wilson'
      }, {
        name: 'Aaron Wolfcale',
        img: 'public/img/wolfcale'
      }, {
        name: 'Spencer York',
        img: 'public/img/york'
      }
    ]
  });
});

app.listen('8080', () => {
  console.log(`Listening on port 8080`);
});