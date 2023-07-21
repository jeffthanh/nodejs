const express = require('express');
const configViewEngine = require('./configs/viewEngine');
const dotenv = require("dotenv");
const initWebRouter = require('./route/web');
const connection = require('./configs/connectDB');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

initWebRouter(app);

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
