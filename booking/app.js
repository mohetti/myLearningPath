const express = require('express');
var restRouter = require('./routes/restRouter');
const app = express();
const port = 5000;
var cors = require('cors');

app.use(cors());

app.use('/rest', restRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
