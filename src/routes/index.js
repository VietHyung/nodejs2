const newsRouter = require('./news.js');
const meRouter = require('./me.js');
const siteRouter = require('./site.js');
const carRouter = require('./cars.js');

function route(app){

  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/car', carRouter);
  app.use('/', siteRouter);

}

module.exports = route;
