const express = require('express');
const app = express();
const port = process.env.WARP_PORT ? process.env.WARP_PORT : 3000;

app.get('/', (req, res) => {
  res.send(`Hello world from Node.js ${process.version}`);
});

app.listen(port, () => {
  console.log(`This app listens on the port ${port}`);
});
