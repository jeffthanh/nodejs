const express = require('express');
const homeCotroller = require('../controller/homeCotroller');
var router = express.Router();

const initWebRouter = (app) => {
    router.get('/', homeCotroller.getHomepage);
    router.get('/detail/user/:id', homeCotroller.getDetailPage);
    router.post('/create-new-user', homeCotroller.createNewUser);
    router.post('/delete-user', homeCotroller.deleteUser);
    router.get('/edit-user/:id', homeCotroller.editUser);
    router.post('/update-user', homeCotroller.postUpdateUser);
    return app.use('/', router);
}
module.exports = initWebRouter;