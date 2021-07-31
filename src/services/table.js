import http from '@helpers/http';

export async function queryDepartmentUserList(pager, condition, sorter) {
    const params = { ...pager, ...condition };
    if (sorter.order) {
        params.sortColumn = sorter.prop;
        params.sort = sorter.order;
    }
    const { status, data } = await http.get('/api/departmentUserList', {
        params
    });
    return {
        success: status === 200,
        data: data.records,
        total: data.total
    };
}
