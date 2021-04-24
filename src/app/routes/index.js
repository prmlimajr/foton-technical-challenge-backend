const Router = require('express').Router;
const rfr = require('rfr');
const multer = require('multer');
const multerConfig = rfr('src/config/multer');
const BookController = rfr('src/app/controllers/BookController');

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', BookController.index);
routes.get('/:id', BookController.show);
routes.post('/', upload.single('file'), BookController.store);

module.exports = routes;
