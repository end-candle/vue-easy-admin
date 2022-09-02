/**
 * css颜色转变为cssVar
 * @param {string|Buffer} content 就是传入的源内容字符串
 * @returns
 */
module.exports = function (content) {
    let data = content;
    const { cssVarMap = {} } = this.getOptions();
    Object.keys(cssVarMap).forEach((key) => {
        data = data.replace(
            new RegExp(`(${cssVarMap[key]})`, 'ig'),
            `var(--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}, $1)`
        );
    });
    return data;
};
