const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app.use(serveStatic('dist'));

app.get('*', (req, res) => {
  return res.sendFile(path.resolve('dist', 'index.html'));
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log(`Server is listening on prot: ${PORT}`));
