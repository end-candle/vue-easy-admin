import WebStorage from '@/helpers/web-storage';

describe('web-storage类测试', () => {
    let storage;

    beforeAll(() => {
        storage = new WebStorage({
            mode: 'local',
            prefix: 'test_',
            expired: -1
        });
    });

    it('测试set方法', function () {
        storage.set('token', 'token', {
            expired: 60 * 60 * 1000
        });
        expect(window.localStorage.hasOwnProperty('test_token'));
    });

    it('测试get方法', function () {
        storage.set('token', 'token', {
            expired: 60 * 60 * 1000
        });
        const token = storage.get('token');
        expect(token).toEqual('token');
    });

    it('测试set方法expired是否生效', async function () {
        storage.set('token', 'token', {
            expired: 3000
        });
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(expect(storage.get('token')).toBeNull());
            }, 4000);
        });
    });

    it('测试remove方法', function () {
        storage.set('token', 'token', {
            expired: 60 * 60 * 1000
        });
        storage.remove('token');
        expect(window.localStorage.hasOwnProperty('test_token')).toBeFalsy();
    });

    it('测试clear方法', function () {
        storage.set('token', 'token', {
            expired: 60 * 60 * 1000
        });
        storage.clear();
        expect(Object.keys(window.localStorage).length).toEqual(0);
    });

    it('测试size方法', function () {
        storage.set('token', 'token', {
            expired: 60 * 60 * 1000
        });
        expect(storage.size()).toEqual(1);
    });

    it('测试getKeys方法', function () {
        storage.set('token', 'token', {
            expired: 60 * 60 * 1000
        });
        expect(storage.getKeys()).toContain('test_token');
    });

    it('测试getNoPrefixKeys方法', function () {
        storage.set('token', 'token', {
            expired: 60 * 60 * 1000
        });
        expect(storage.getNoPrefixKeys()).toContain('token');
    });

    it('测试getValues方法', function () {
        storage.set('token', 'token', {
            expired: 60 * 60 * 1000
        });
        expect(storage.getValues()).toContain('token');
    });

    it('测试hasKey方法', function () {
        storage.set('token', 'token', {
            expired: 60 * 60 * 1000
        });
        expect(storage.hasKey('aaaa')).toBeFalsy();
    });
});
