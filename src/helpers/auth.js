import store from '@/store';

/**
 * 授权
 * @param token 登录token
 * @param role 用户角色
 */
export function setAuth(token, role) {
    store.commit('user/setToken', { token, expired: 60 * 60 * 1000 });
    setAuthRole(role);
}

/**
 * 检查是否登录授权
 * @returns {boolean} true已登录，false未登录
 */
export function checkLoginAuth() {
    const token = store.state.user.token;
    return !!token;
}

/**
 * 设置授权角色
 * @param role 用户角色
 */
export function setAuthRole(role) {
    store.commit('user/setRole', role);
}

/**
 * 获取授权角色
 * @returns {*}
 */
export function getAuthRole() {
    return store.state.user.role;
}

/**
 * 清除授权
 */
export function clearAuth() {
    store.commit('user/removeToken');
    store.commit('user/removeRole');
}
