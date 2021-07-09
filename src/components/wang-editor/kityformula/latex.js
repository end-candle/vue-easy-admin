/**
 * @description 插入数学公式
 * @author endcandle
 */
class Latex {
    constructor(editor) {
        this.editor = editor;
    }

    /**
     * 往编辑区域插入图片
     * @param src 图片地址
     * @param latexCode latex代码
     */
    insert(src, latexCode = '') {
        const editor = this.editor;
        const config = editor.config;
        const i18nPrefix = 'validate.';
        const t = (text, prefix = i18nPrefix) => {
            return editor.i18next.t(prefix + text);
        };

        // 设置图片alt
        const latex = latexCode ? `data-latex="${latexCode}" ` : '';
        // 先插入图片，无论是否能成功
        editor.cmd.do(
            'insertHTML',
            `<img class="latex" src="${src}" ${latex} contenteditable="false"/>`
        );
        // 执行回调函数
        config.linkImgCallback(src);

        // 加载图片
        let img = document.createElement('img');
        img.onload = () => {
            img = null;
        };
        img.onerror = () => {
            config.customAlert(
                t('插入数学公式错误'),
                'error',
                `wangEditor: ${t('插入数学公式错误')}，${t('图片链接')} "${src}"，${t(
                    '下载链接失败'
                )}`
            );
            img = null;
        };
        img.onabort = () => {
            img = null;
        };
        img.src = src;
    }
}

export default Latex;
