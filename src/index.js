require('dotenv/config');
const express = require('express');
const cors = require('cors');
const rfr = require('rfr');
const path = require('path');
const routes = rfr('src/app/routes');

const app = express();
const PORT = process.env.PORT;
const BACKEND_SERVER_HOST = process.env.BACKEND_SERVER_HOST;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);

app.listen(PORT, () => {
  console.log(`Server running on http://${BACKEND_SERVER_HOST}:${PORT}/`);
});
