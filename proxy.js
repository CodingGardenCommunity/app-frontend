const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');

const app = express();
app.use(express.static(__dirname));
app.all('/', (request, response) => {
  response.send(fs.readFileSync('index.html').toString());
});
const serviceArr = ['home', 'contributors', 'faq', 'history', 'video'];
serviceArr.forEach((service) => {
  app.all(`/${service}`, (request, response) => {
    fetch(`https://api-dev.coding.garden/${service}`)
      .then(r => r.json())
      .then((json) => {
        response.send(JSON.stringify(json));
      });
  });
});
app.listen(8082);
