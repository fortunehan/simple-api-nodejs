const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('CORS returns OK');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
