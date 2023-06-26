const PORT = 3000;
const express = require('express');
const app = express();
const HOSTNAME = "192.168.0.85"
app.use(require('./myRoutes'));

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server started on port http://${HOSTNAME}:${PORT}`);
});

module.exports = app