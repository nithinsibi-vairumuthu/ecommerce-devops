const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("Frontend is healthy");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FRONTEND running on ${PORT}`);
});
