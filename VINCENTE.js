  const express = require('express');
  const path = require('path');
  const routes = require('./routes/index');

  const app = express();


  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  app.use('/', routes);
  app.use(express.static(path.join(__dirname, 'style')));

  app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
  });





