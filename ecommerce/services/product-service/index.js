const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.send('product Service is healthy');
});

app.listen(3000, () => {
  console.log('product service running on port 3000');
});
