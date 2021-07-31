import http from '@helpers/http';

export function login(username, password) {
    return http.post('/api/login', {
        username,
        password
    });
}
