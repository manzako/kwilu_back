const http = require("http");
const app = require("./app");
const chalk = require("chalk");
const port = process.env.PORT || 4600;
const server = http.createServer(app);

require('dotenv').config();

const db = require("./models");

db.sequelize.sync().then(() => {
  server.listen(port, () => {
    let host = `http://localhost:${port}`;
    console.log(chalk.yellow(host));
  });
});
