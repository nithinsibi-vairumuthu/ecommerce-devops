const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.send('payment Service is healthy');
});

app.listen(3000, () => {
  console.log('payment  service running on port 3000');
});
