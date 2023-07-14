const express = require('express');
const homeCotroller = require('../controller/homeCotroller');
var router = express.Router();

const initWebRouter = (app) => {
    router.get('/', homeCotroller.getHomepage);

    return app.use('/', router);
}
module.exports = initWebRouter;