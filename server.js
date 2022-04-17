const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/product.routes")(app);

require("./config/mongoose.config");

app.listen(port, () => console.log(`Connected on port: ${port}`) );