const Mock = require('mockjs');
const { sendError } = require('../utils');

function createLoginController(router) {
    router.post('/login', (req, res) => {
        const { username, password } = req.body;
        if (username === 'admin' && password === '123456') {
            res.send(
                Mock.mock({
                    token: '@id',
                    role: 'admin'
                })
            );
        } else {
            sendError(res, {
                errMsg: '用户名或密码错误'
            });
        }
    });
}

module.exports = createLoginController;
