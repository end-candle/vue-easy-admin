/**
 * @description tooltip 事件
 * @author endcandle
 */

import E from 'wangeditor';

const { $, Tooltip } = E;

/**
 * 生成 Tooltip 的显示隐藏函数
 */
export function createShowHideFn(editor, latexEditor) {
    let tooltip;
    const t = (text, prefix = '') => {
        return editor.i18next.t(prefix + text);
    };

    /**
     * 显示 tooltip
     * @param $node 链接元素
     */
    function showImgTooltip($node) {
        if ($node?.selector?.className !== 'latex') {
            return false;
        }
        const conf = [
            {
                $elem: $("<span class='w-e-icon-trash-o'></span>"),
                onClick: (editor, $node) => {
                    // 选中img元素
                    editor.selection.createRangeByElem($node);
                    editor.selection.restoreSelection();
                    editor.cmd.do('delete');
                    // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。
                    return true;
                }
            },
            {
                $elem: $('<span>30%</span>'),
                onClick: (editor, $node) => {
                    $node.attr('width', '30%');
                    $node.removeAttr('height');

                    // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。
                    return true;
                }
            },
            {
                $elem: $('<span>50%</span>'),
                onClick: (editor, $node) => {
                    $node.attr('width', '50%');
                    $node.removeAttr('height');

                    // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。
                    return true;
                }
            },
            {
                $elem: $('<span>100%</span>'),
                onClick: (editor, $node) => {
                    $node.attr('width', '100%');
                    $node.removeAttr('height');

                    // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。
                    return true;
                }
            },
            {
                $elem: $(`<span>${t('编辑')}</span>`),
                onClick: (editor, $node) => {
                    latexEditor.editLatexHandler($node.selector.dataset['latex']);
                    // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。
                    return true;
                }
            },
            {
                $elem: $(`<span>${t('重置')}</span>`),
                onClick: (editor, $node) => {
                    $node.removeAttr('width');
                    $node.removeAttr('height');

                    // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。
                    return true;
                }
            }
        ];
        // 移除原始img标签tooltip
        removeOldImgTooltip(editor);
        tooltip = new Tooltip(editor, $node, conf);
        tooltip.create();
    }

    /**
     * 移除原始img标签tooltip
     * @param editor
     */
    function removeOldImgTooltip(editor) {
        const $editorContainer = editor.toolbarSelector;
        $editorContainer?.querySelectorAll('.w-e-tooltip ').forEach(($tooltip) => {
            $tooltip.remove();
        });
    }

    /**
     * 隐藏 tooltip
     */
    function hideImgTooltip() {
        // 移除 tooltip
        if (tooltip) {
            tooltip.remove();
            tooltip = null;
        }
    }

    return {
        showImgTooltip,
        hideImgTooltip
    };
}

/**
 * 绑定 tooltip 事件
 * @param editor 编辑器实例
 */
export default function bindTooltipEvent(editor, latexEditor) {
    const { showImgTooltip, hideImgTooltip } = createShowHideFn(editor, latexEditor);

    // 点击图片元素是，显示 tooltip
    editor.txt.eventHooks.imgClickEvents.push(showImgTooltip);

    // 点击其他地方，或者滚动时，隐藏 tooltip
    editor.txt.eventHooks.clickEvents.push(hideImgTooltip);
    editor.txt.eventHooks.keyupEvents.push(hideImgTooltip);
    editor.txt.eventHooks.toolbarClickEvents.push(hideImgTooltip);
    editor.txt.eventHooks.menuClickEvents.push(hideImgTooltip);
    editor.txt.eventHooks.textScrollEvents.push(hideImgTooltip);
    editor.txt.eventHooks.imgDragBarMouseDownEvents.push(hideImgTooltip);

    // change 时隐藏
    editor.txt.eventHooks.changeEvents.push(hideImgTooltip);
}