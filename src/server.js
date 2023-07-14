const express = require('express');
const configViewEngine = require('./configs/viewEngine');
const dotenv = require("dotenv");
const initWebRouter = require('./route/web');
dotenv.config();

const app = express();
const port = process.env.PORT || 8080; // Sử dụng PORT từ biến môi trường hoặc mặc định là 3000
configViewEngine(app);

initWebRouter(app);

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
