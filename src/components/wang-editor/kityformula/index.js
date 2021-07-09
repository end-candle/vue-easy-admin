/**
 * @description 插入、编辑数学公式
 * @author endcandle
 */
import bindEvent from './bind-event';
import createPanelConf from './create-panel-conf';
import E from 'wangeditor';

const { $, PanelMenu, Panel } = E;

class Kityformula extends PanelMenu {
    constructor(editor) {
        let $elem = $(
            '<div class="w-e-menu" data-title="数学公式"><i class="iconfont icon-math"></i></div>'
        );
        let latexPanelConfig = createPanelConf(editor);
        super($elem, editor);
        this.latexPanelConfig = latexPanelConfig;

        // 绑定事件，如粘贴图片
        bindEvent(editor, this);
    }

    /**
     * 菜单点击事件
     */
    clickHandler(e) {
        this.createPanel();
    }

    /**
     * 编辑latex公式
     * @param latex
     */
    editLatexHandler(latex) {
        this.createPanel();
        this.latexPanelConfig.insertLatex(latex);
    }

    /**
     * 创建 panel
     */
    createPanel() {
        const conf = this.latexPanelConfig;
        const panel = new Panel(this, conf);
        this.setPanel(panel);
        panel.create();
    }

    /**
     * 尝试修改菜单 active 状态
     */
    tryChangeActive() {}
}

export default Kityformula;
