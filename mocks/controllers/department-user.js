const Mock = require('mockjs');

function createDepartmentUserController(router) {
    router.get('/departmentUserList', (req, res) => {
        const { current, size } = req.query;
        const total = 100;
        const records = [];
        for (let i = 0; i < size; i++) {
            records.push(
                Mock.mock({
                    name: '@cname',
                    no: '@id',
                    'department|1': ['研发部', '运营部', '财务部', '后勤保障部']
                })
            );
        }
        res.send({
            current,
            size,
            total,
            records
        });
    });
}

module.exports = createDepartmentUserController;
