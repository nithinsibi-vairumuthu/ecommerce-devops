const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("api-gateway is healthy");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`api-gateway running on ${PORT}`);
});
