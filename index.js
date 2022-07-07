const express = require('express');
const app = express();
const port = process.env.WARP_PORT || 3000;

app.get('/:name?', (req, res) => {
  const name = req.params.name || 'World';
  const data = {
    message: `Hello ${name} from Node.js`,
    node: process.version,
    date: new Date().toISOString(),
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`This app listens on the port ${port}`);
});
