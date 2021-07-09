/**
 * @description 数学公式菜单 panel tab 配置
 * @author endcandle
 */
import Latex from '@components/wang-editor/kityformula/latex';

export default function (editor) {
    const latex = new Latex(editor);

    /**
     * 获取随机字符
     * @param prefix 前缀
     */
    function getRandom(prefix = '') {
        return prefix + Math.random().toString().slice(2);
    }

    // panel 中需要用到的id
    const inputIFrameId = getRandom('input-iframe-latex-id');
    const btnOkId = getRandom('btn-ok-latex-id');
    const btnEditId = getRandom('btn-edit-latex-id');

    const i18nPrefix = 'menus.panelMenus.latex.';
    const t = (text, prefix = i18nPrefix) => {
        return editor.i18next.t(prefix + text);
    };

    /**
     * 设置模板的类名和icon图标
     * w-e-menu是作为button菜单的模板
     * w-e-up-img-container是做为panel菜单的窗口内容的模板
     * @param containerClass 模板最外层的类名
     * @param titleName 模板中标题的名称 需要则设置不需要则设为空字符
     */
    const getUploadImgTpl = (containerClass, titleName) =>
        `<div class="${containerClass}" data-title="${titleName}">
              <iframe id="${inputIFrameId}" class="iframe" style="height: 500px;" width="100%" scrolling="no" src="/kityformula/index.html"></iframe>
              <div class="w-e-button-container">
                  <button id="${btnOkId}" class="right">
                      ${t('确认插入')}
                  </button>
                  <button id="${btnEditId}" class="right">
                      ${t('输入latex文本')}
                  </button>
              </div>
          </div>`;

    // tabs end

    /**
     * 插入数学公式
     * @param latexCode
     */
    function insertLatex(latexCode) {
        const node = document.getElementById(inputIFrameId);
        node.contentWindow.onload = function () {
            // 使用宏任务延迟，保证kfe已被加载
            setTimeout(() => {
                const kfe = node.contentWindow.kfe;
                kfe.execCommand('render', latexCode);
            }, 300);
        };
    }

    return {
        width: 900,
        height: 560,

        // panel 中可包含多个 tab
        tabs: [
            {
                // tab 的标题
                title: editor.i18next.t('menus.panelMenus.formula.插入公式'),
                // 模板
                tpl: getUploadImgTpl('w-e-up-latex-container', ''),
                // 事件绑定
                events: [
                    {
                        selector: '#' + btnOkId,
                        type: 'click',
                        fn: () => {
                            // 执行插入公式
                            const node = document.getElementById(inputIFrameId);
                            const kfe = node.contentWindow.kfe;
                            let latexCode = kfe.execCommand('get.source');
                            latexCode = latexCode.replace(/\s/g, ''); // 去掉空格

                            latex.insert(
                                `https://latex.codecogs.com/gif.latex?${latexCode}`,
                                latexCode
                            );
                            // 返回 true，表示该事件执行完之后，panel 要关闭。否则 panel 不会关闭
                            return true;
                        }
                    },
                    {
                        selector: '#' + btnEditId,
                        type: 'click',
                        fn: () => {
                            const node = document.getElementById(inputIFrameId);
                            const w = node.contentWindow;
                            const $body = w?.document?.querySelector('body');
                            if ($body) {
                                $body.querySelector('.quick-dialog').style.display = 'flex';
                            }
                        }
                    }
                ]
            } // tab end
        ], // tabs end
        insertLatex
    };
}
