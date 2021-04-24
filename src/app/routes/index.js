const Router = require('express').Router;
const rfr = require('rfr');
const multer = require('multer');
const multerConfig = rfr('src/config/multer');
const BookController = rfr('src/app/controllers/BookController');

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', BookController.index);
routes.get('/:id', BookController.show);
routes.post('/', BookController.store);
routes.post('/cover', upload.single('file'), (req, res) => {
  return res.json(req.file);
});

module.exports = routes;
