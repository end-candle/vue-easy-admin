/**
 * @description 绑定图片的事件
 * @author endcandle
 */

import bindTooltipLatex from './tooltip-event';

/**
 * 绑定事件
 * @param editor 编辑器实例
 */
function bindEvent(editor, latexEditor) {
    // Tooltip
    bindTooltipLatex(editor, latexEditor);
}

export default bindEvent;
