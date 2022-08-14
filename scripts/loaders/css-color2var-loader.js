function getRootCssVar(colorMap) {
    const cssVars = Object.keys(colorMap).reduce((prev, color) => {
        return `${prev}--${color}: ${colorMap[color]};`;
    }, '');
    return `:root {
        ${cssVars}
    }`;
}

/**
 * css颜色转变为cssVar
 * @param {string|Buffer} content 就是传入的源内容字符串
 * @returns
 */
module.exports = function (content) {
    let data = content;
    const { cssVarMap = {} } = this.getOptions();
    const rootVar = getRootCssVar(cssVarMap);
    Object.keys(cssVarMap).forEach((key) => {
        data = data.replace(new RegExp(`(${cssVarMap[key]})`, 'ig'), `var(--${key}, $1)`);
    });
    return rootVar + data;
};