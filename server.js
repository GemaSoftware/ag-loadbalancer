/*

 From: https://thecodebarbarian.com/building-your-own-load-balancer-with-express-js.html
 
 npm install express@4.15.2 body-parser@1.17.1 request@2.81.0
 
*/

const body = require('body-parser');
const express = require('express');

const app1 = express();
const app2 = express();
const app3 = express();

// Parse the request body as JSON
app1.use(body.json());
app2.use(body.json());
app3.use(body.json());

const handler = serverNum => (req, res) => {
  console.log(`server ${serverNum}`, req.method, req.url, req.body);
  res.send(`Hello from server ${serverNum}!`);
};

// Only handle GET and POST requests
app1.get('*', handler(1)).post('*', handler(1));
app2.get('*', handler(2)).post('*', handler(2));
app3.get('*', handler(3)).post('*', handler(3));

app1.listen(3001);
app2.listen(3002);
app3.listen(3003);