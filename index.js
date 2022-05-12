const express = require("express");
const pointsRoutes = require("./points/pointsRoutes");

const server = express();
const PORT = 5000;

server.use(express.json());

server.use("/points", pointsRoutes);

server.use("/", (req, res) => res.send("API up and running!"));

server.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
