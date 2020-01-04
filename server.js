const express = require("express");
const schoolRouter = require("./src/routes/schoolRoutes");

const app = express();

// Parsing incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mounting Routes
app.use("/api/v1/schools", schoolRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listenning to the port ${port}`));
