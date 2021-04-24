require('dotenv/config');
const express = require('express');
const cors = require('cors');
const rfr = require('rfr');

const app = express();
const PORT = process.env.PORT;
const BACKEND_SERVER_HOST = process.env.BACKEND_SERVER_HOST;

app.use(cors());
app.use(express.json());
// rfr('src/app/routes')(app);

app.listen(PORT, () => {
  console.log(`Server running on http://${BACKEND_SERVER_HOST}:${PORT}/`);
});
