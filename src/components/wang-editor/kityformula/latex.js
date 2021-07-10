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

        // 设置图片alt
        const latex = latexCode ? `data-latex="${latexCode}" ` : '';
        // 先插入图片，无论是否能成功
        editor.cmd.do(
            'insertHTML',
            `<img class="latex" src="${src}" ${latex} contenteditable="false"/>`
        );
        // 执行回调函数
        config.linkImgCallback(src);
    }
}

export default Latex;
