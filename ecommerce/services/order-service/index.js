const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.send('order-service is healthy');
});

app.listen(3000, () => {
  console.log('order-service running on port 3000');
});
