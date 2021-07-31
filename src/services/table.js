import http from '@helpers/http';

export async function queryDepartmentUserList(pager, condition, sorter) {
    const params = { ...pager, ...condition };
    const { code, data } = await http.get('/api/departmentUserList', {
        params
    });
    return {
        code,
        data: data.records,
        total: data.total
    };
}
