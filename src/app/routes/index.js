const Router = require('express').Router;

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: 'dale' });
});

module.exports = routes;
