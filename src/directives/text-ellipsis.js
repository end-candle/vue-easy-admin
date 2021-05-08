function overflowHidden(text, rows, str) {
    const style = window.getComputedStyle(text);
    const width = parseInt(style['width'], 10);
    const paddingLeft = parseInt(style['padding-left'], 10);
    const paddingRight = parseInt(style['padding-right'], 10);
    if (Number.isNaN(width)) {
        return;
    }
    const availableWidth =
        width - (isNaN(paddingLeft) ? 0 : paddingLeft) - (isNaN(paddingRight) ? 0 : paddingRight);
    const fontSize = parseInt(style['font-size'], 10);
    const rowCount = Math.floor(availableWidth / fontSize);
    if (str.length <= rows * rowCount) {
        text.innerText = str;
    } else {
        text.innerText = str.substring(0, rows * rowCount - 3) + '...';
    }
}

const textEllipsis = {
    inserted(el, binding) {
        const { value = '', arg } = binding;
        const { maxLines = 1 } = arg;
        // 单行直接用css控制
        if (maxLines === 1) {
            el.style.overflow = 'hidden';
            el.style['white-space'] = 'nowrap';
            el.style['text-overflow'] = 'ellipsis';
            el.style['word-wrap'] = 'normal';
            el.style['word-break'] = 'break-all';
            el.innerText = value;
            return true;
        }
        overflowHidden(el, maxLines, value);
        const listenOverflow = () => {
            if (el) {
                overflowHidden(el, maxLines, value);
            }
        };
        window.addEventListener('resize', listenOverflow);
        window.addEventListener('beforeunload', () => {
            window.removeEventListener('resize', listenOverflow);
        });
        return true;
        // const width = el.parentNode.offsetWidth;
    }
};

export default textEllipsis;
