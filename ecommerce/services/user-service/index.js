const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.send('User Service is healthy');
});

app.listen(3000, () => {
  console.log('User service running on port 3000');
});
