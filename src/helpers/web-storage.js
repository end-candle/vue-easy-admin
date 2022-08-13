/**
 * webStorage默认配置
 * @type {{mode: string, expired: number}}
 */
const bootstrapDefaultConfig = {
    /**
     * 当前环境: 可选值 (session|local)
     */
    mode: 'local',
    /**
     * 过期时间，-1永不超时
     */
    expired: -1,
    /**
     * 存储前缀
     */
    prefix: '',
    /**
     * 是否为完整key, 默认false
     */
    fullKey: false
};

/**
 * 抛出异常信息
 * @param message 异常消息
 */
function throwErrorMessage(message) {
    throw new Error(message);
}

class WebStorage {
    constructor(config = {}) {
        if (!window) {
            throwErrorMessage('当前环境非浏览器，无法消费全局window实例。');
        }
        if (!window.localStorage) {
            throwErrorMessage('当前环境无法使用localStorage');
        }
        if (!window.sessionStorage) {
            throwErrorMessage('当前环境无法使用sessionStorage');
        }
        this._bootStrap({ ...bootstrapDefaultConfig, ...config });
    }

    /**
     * 初始化Storage的数据
     * @param mode 当前环境: 可选值 (session|local)
     * @param expired 过期时间，-1永不超时
     * @param prefix 存储前缀
     * @param fullKey 存储前缀
     * @private
     */
    _bootStrap({ mode, expired, prefix, fullKey }) {
        this._initStorage(mode);
        this._initListener();
        this.config = { mode, expired, prefix, fullKey };
    }

    /**
     * 初始化存储对象
     * @param mode 当前环境: 可选值 (session|local)
     * @private
     */
    _initStorage(mode) {
        switch (mode) {
            case 'session':
                this.storage = window.sessionStorage;
                break;

            case 'local':
                this.storage = window.localStorage;
                break;

            default:
                throwErrorMessage('mode配置不正确，请检查传入配置。');
                break;
        }
    }

    /**
     * 初始化监听
     * @private
     */
    _initListener() {
        const listeners = new Map();
        this._listeners = listeners;
        window.addEventListener('storage', (e) => {
            const { key, oldValue, newValue } = e;
            if (listeners.has(key)) {
                const func = listeners.get(key);
                func.call(this, newValue, oldValue);
            }
        });
    }

    /**
     * 获取实际key值
     * @param key key值
     * @param fullKey 是否为完整key, 默认false
     * @returns {string}
     * @private
     */
    _getRealKey(key, fullKey) {
        const realFullKey = fullKey ?? this.config.fullKey;
        const { prefix } = this.config;
        return realFullKey ? key : prefix + key;
    }

    /**
     * 序列化数值
     * @param value 要序列化的对象
     * @param expired 过期时间（单位ms）
     * @returns {string}
     */
    stringify(value, expired) {
        const realExpired = expired ?? this.config.expired;
        if (realExpired === -1) {
            return JSON.stringify({
                value,
                expired: realExpired
            });
        }
        return JSON.stringify({
            value,
            expired: Date.now() + realExpired
        });
    }

    /**
     * 缓存数值
     * @param key 关键字
     * @param value 数值
     * @param expired 过期时间（单位ms）
     * @param fullKey 是否为完整key, 默认false
     */
    set(key, value, { expired, fullKey } = {}) {
        const realKey = this._getRealKey(key, fullKey);
        this.storage.setItem(realKey, this.stringify(value, expired));
    }

    /**
     * 获取数值
     * @param key 关键字
     * @param fullKey 是否为完整key, 默认false
     */
    get(key, fullKey) {
        const realKey = this._getRealKey(key, fullKey);
        const value = JSON.parse(this.storage.getItem(realKey));
        if (value === null) {
            return null;
        }
        if (value.expired !== -1 && value.expired < Date.now()) {
            this.remove(realKey, true);
            return null;
        }
        return value.value;
    }

    /**
     * 移除缓存对象
     * @param key 关键字
     * @param fullKey 是否为完整key, 默认false
     */
    remove(key, fullKey) {
        const realKey = this._getRealKey(key, fullKey);
        this.storage.removeItem(realKey);
    }

    /**
     * 清空缓存区
     */
    clear() {
        this.storage.clear();
    }

    /**
     * 获取存储长度
     * @returns {number}
     */
    size() {
        return this.storage.length;
    }

    /**
     * 获取存储的所有key
     * @returns {string[]}
     */
    getKeys() {
        return Object.keys(this.storage);
    }

    /**
     * 获取没有存储前缀的key
     * @returns {string[]}
     */
    getNoPrefixKeys() {
        const { prefix } = this.config;
        return this.getKeys().map((key) => key.replace(new RegExp(`^${prefix}`), ''));
    }

    /**
     * 获取所有值
     * @returns {any[]}
     */
    getValues() {
        return this.getKeys().map((key) => this.get(key, true));
    }

    /**
     * 判断是否存在key
     * @param key 关键字
     * @param fullKey 是否为完整key, 默认false
     * @returns {boolean}
     */
    hasKey(key, fullKey) {
        const realKey = this._getRealKey(key, fullKey);
        return Object.hasOwnProperty.call(this.storage, realKey);
    }

    /**
     * 添加监听
     * @param key 关键字
     * @param callback 监听
     * @param fullKey 是否为完整key, 默认false
     */
    addListener(key, callback, fullKey) {
        if (typeof callback !== 'function') {
            throwErrorMessage('callback必须是一个函数');
        }
        const realKey = this._getRealKey(key, fullKey);
        this._listeners.set(realKey, callback);
    }
}

export default WebStorage;
