const Router = require('express').Router;
const rfr = require('rfr');
const BookController = rfr('src/app/controllers/BookController');

const routes = new Router();

routes.get('/', BookController.index);
routes.get('/:id', BookController.show);

module.exports = routes;
