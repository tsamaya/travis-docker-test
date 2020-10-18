const express = require('express');

const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
  res.send('Healthy!');
});

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  const aa = Number(a);
  const bb = Number(b);
  const r = aa + bb;
  res.send({ sum: r });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
