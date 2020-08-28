// // https://github.com/typicode/json-server#getting-started
// run.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(420, () => {
  console.log("JSON Server is running");
});
