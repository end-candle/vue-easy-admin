import Color from 'color';

/**
 * 默认主题
 */
export const defaultThemeColor = {
    brandColor: '#409EFF',
    functionalColor: {
        colorSuccess: '#67C23A',
        colorWarning: '#E6A23C',
        colorDanger: '#F56C6C',
        colorInfo: '#909399'
    },
    fontColor: {
        colorTextPrimary: '#303133',
        colorTextRegular: '#606266',
        colorTextSecondary: '#909399',
        colorTextPlaceholder: '#C0C4CC'
    },
    borderColor: {
        borderColorBase: '#DCDFE6',
        borderColorLight: '#E4E7ED',
        borderColorLighter: '#EBEEF5',
        borderColorExtraLight: '#F2F6FC'
    },
    backgroundColor: {
        backgroundColorBase: '#F5F7FA',
        colorBlack: '#000000',
        colorWhite: '#FFFFFF'
    }
};

const mixColor = (color, mixColor, weight) => {
    return new Color(color).mix(new Color(mixColor), weight).hex();
};

/**
 * 主题色相关颜色生成
 */
const primaryColorMapFunc = {
    colorPrimary: (color = '#409EFF') => color
};

/**
 * 主题色相关（亮色）混合颜色生成
 */
const primaryLightColorMapFunc = {
    colorPrimaryLight1: (color = '#409EFF', color2 = '#ffffff') => mixColor(color, color2, 0.1),
    colorPrimaryLight2: (color = '#409EFF', color2 = '#ffffff') => mixColor(color, color2, 0.2),
    colorPrimaryLight3: (color = '#409EFF', color2 = '#ffffff') => mixColor(color, color2, 0.3),
    colorPrimaryLight4: (color = '#409EFF', color2 = '#ffffff') => mixColor(color, color2, 0.4),
    colorPrimaryLight5: (color = '#409EFF', color2 = '#ffffff') => mixColor(color, color2, 0.5),
    colorPrimaryLight6: (color = '#409EFF', color2 = '#ffffff') => mixColor(color, color2, 0.6),
    colorPrimaryLight7: (color = '#409EFF', color2 = '#ffffff') => mixColor(color, color2, 0.7),
    colorPrimaryLight8: (color = '#409EFF', color2 = '#ffffff') => mixColor(color, color2, 0.8),
    colorPrimaryLight9: (color = '#409EFF', color2 = '#ffffff') => mixColor(color, color2, 0.9),
    colorPrimaryLight92: (color = '#409EFF', color2 = '#ffffff') => mixColor(color, color2, 0.92)
};

/**
 * 主题色相关（暗色）混合颜色生成
 */
const primaryDarkColorMapFunc = {
    colorPrimaryDark1: (color = '#409EFF', color2 = '#000000') => mixColor(color, color2, 0.1)
};

/**
 * 成功提示相关颜色生成
 */
const successColorMapFunc = {
    colorSuccess: (color = '#67C23A') => color
};

/**
 * 成功相关（亮色）混合颜色生成
 */
const successLightColorMapFunc = {
    colorSuccessLight1: (color = '#67C23A', color2 = '#ffffff') => mixColor(color, color2, 0.1),
    colorSuccessLight2: (color = '#67C23A', color2 = '#ffffff') => mixColor(color, color2, 0.2),
    colorSuccessLight3: (color = '#67C23A', color2 = '#ffffff') => mixColor(color, color2, 0.3),
    colorSuccessLight4: (color = '#67C23A', color2 = '#ffffff') => mixColor(color, color2, 0.4),
    colorSuccessLight5: (color = '#67C23A', color2 = '#ffffff') => mixColor(color, color2, 0.5),
    colorSuccessLight6: (color = '#67C23A', color2 = '#ffffff') => mixColor(color, color2, 0.6),
    colorSuccessLight7: (color = '#67C23A', color2 = '#ffffff') => mixColor(color, color2, 0.7),
    colorSuccessLight8: (color = '#67C23A', color2 = '#ffffff') => mixColor(color, color2, 0.8),
    colorSuccessLight9: (color = '#67C23A', color2 = '#ffffff') => mixColor(color, color2, 0.9)
};

/**
 * 警告提示相关颜色生成
 */
const warningColorMapFunc = {
    colorWarning: (color = '#E6A23C') => color
};

/**
 * 警告相关（亮色）混合颜色生成
 */
const warningLightColorMapFunc = {
    colorWarningLight1: (color = '#E6A23C', color2 = '#ffffff') => mixColor(color, color2, 0.1),
    colorWarningLight2: (color = '#E6A23C', color2 = '#ffffff') => mixColor(color, color2, 0.2),
    colorWarningLight3: (color = '#E6A23C', color2 = '#ffffff') => mixColor(color, color2, 0.3),
    colorWarningLight4: (color = '#E6A23C', color2 = '#ffffff') => mixColor(color, color2, 0.4),
    colorWarningLight5: (color = '#E6A23C', color2 = '#ffffff') => mixColor(color, color2, 0.5),
    colorWarningLight6: (color = '#E6A23C', color2 = '#ffffff') => mixColor(color, color2, 0.6),
    colorWarningLight7: (color = '#E6A23C', color2 = '#ffffff') => mixColor(color, color2, 0.7),
    colorWarningLight8: (color = '#E6A23C', color2 = '#ffffff') => mixColor(color, color2, 0.8),
    colorWarningLight9: (color = '#E6A23C', color2 = '#ffffff') => mixColor(color, color2, 0.9)
};

/**
 * 异常提示相关颜色生成
 */
const dangerColorMapFunc = {
    colorDanger: (color = '#F56C6C') => color
};

/**
 * 异常相关（亮色）混合颜色生成
 */
const dangerLightColorMapFunc = {
    colorDangerLight1: (color = '#F56C6C', color2 = '#ffffff') => mixColor(color, color2, 0.1),
    colorDangerLight2: (color = '#F56C6C', color2 = '#ffffff') => mixColor(color, color2, 0.2),
    colorDangerLight3: (color = '#F56C6C', color2 = '#ffffff') => mixColor(color, color2, 0.3),
    colorDangerLight4: (color = '#F56C6C', color2 = '#ffffff') => mixColor(color, color2, 0.4),
    colorDangerLight5: (color = '#F56C6C', color2 = '#ffffff') => mixColor(color, color2, 0.5),
    colorDangerLight6: (color = '#F56C6C', color2 = '#ffffff') => mixColor(color, color2, 0.6),
    colorDangerLight7: (color = '#F56C6C', color2 = '#ffffff') => mixColor(color, color2, 0.7),
    colorDangerLight8: (color = '#F56C6C', color2 = '#ffffff') => mixColor(color, color2, 0.8),
    colorDangerLight9: (color = '#F56C6C', color2 = '#ffffff') => mixColor(color, color2, 0.9)
};

/**
 * 普通提示相关颜色生成
 */
const infoColorMapFunc = {
    colorInfo: (color = '#909399') => color
};

/**
 * 普通相关（亮色）混合颜色生成
 */
const infoLightColorMapFunc = {
    colorInfoLight1: (color = '#909399', color2 = '#ffffff') => mixColor(color, color2, 0.1),
    colorInfoLight2: (color = '#909399', color2 = '#ffffff') => mixColor(color, color2, 0.2),
    colorInfoLight3: (color = '#909399', color2 = '#ffffff') => mixColor(color, color2, 0.3),
    colorInfoLight4: (color = '#909399', color2 = '#ffffff') => mixColor(color, color2, 0.4),
    colorInfoLight5: (color = '#909399', color2 = '#ffffff') => mixColor(color, color2, 0.5),
    colorInfoLight6: (color = '#909399', color2 = '#ffffff') => mixColor(color, color2, 0.6),
    colorInfoLight7: (color = '#909399', color2 = '#ffffff') => mixColor(color, color2, 0.7),
    colorInfoLight8: (color = '#909399', color2 = '#ffffff') => mixColor(color, color2, 0.8),
    colorInfoLight9: (color = '#909399', color2 = '#ffffff') => mixColor(color, color2, 0.9)
};

/**
 * 主文本相关颜色生成
 */
const colorTextPrimaryMapFunc = {
    colorTextPrimary: (color = '#303133') => color
};
/**
 * 通用文本相关颜色生成
 */
const colorTextRegularMapFunc = {
    colorTextRegular: (color = '#606266') => color
};
/**
 * 辅助文本相关颜色生成
 */
const colorTextSecondaryMapFunc = {
    colorTextSecondary: (color = '#909399') => color
};
/**
 * 占位文本相关颜色生成
 */
const colorTextPlaceholderMapFunc = {
    colorTextPlaceholder: (color = '#C0C4CC') => color
};
/**
 * 基础边框相关颜色生成
 */
const borderColorBaseMapFunc = {
    borderColorBase: (color = '#DCDFE6') => color
};
/**
 * 明亮边框相关颜色生成
 */
const borderColorLightMapFunc = {
    borderColorLight: (color = '#E4E7ED') => color
};
/**
 * 更明亮边框相关颜色生成
 */
const borderColorLighterMapFunc = {
    borderColorLighter: (color = '#EBEEF5') => color
};
/**
 * 抽取类边框相关颜色生成
 */
const borderColorExtraLightMapFunc = {
    borderColorExtraLight: (color = '#F2F6FC') => color
};
/**
 * 基础背景相关颜色生成
 */
const backgroundColorBaseMapFunc = {
    backgroundColorBase: (color = '#F5F7FA') => color
};
/**
 * 白色背景相关颜色生成
 */
const colorWhiteMapFunc = {
    colorWhite: (color = '#FFFFFF') => color
};
/**
 * 黑色背景相关颜色生成
 */
const colorBlackMapFunc = {
    colorBlack: (color = '#000000') => color
};
/**
 * 字体禁用相关颜色生成
 */
const fontColorDisabledBaseMapFunc = {
    fontColorDisabledBase: (color = '#bbb') => color
};
/**
 * 复选框禁用相关颜色生成
 */
const checkboxDisabledInputFillMapFunc = {
    checkboxDisabledInputFill: (color = '#edf2fc') => color
};
/**
 * 下拉空占位相关颜色生成
 */
const selectDropdownEmptyColorMapFunc = {
    selectDropdownEmptyColor: (color = '#999') => color
};
/**
 * 多选标签背景相关颜色生成
 */
const cascaderTagBackgroundMapFunc = {
    cascaderTagBackground: (color = '#f0f2f5') => color
};
/**
 * 日期选择器内边框相关颜色生成
 */
const datepickerInnerBorderColorMapFunc = {
    datepickerInnerBorderColor: (color = '#e4e4e4') => color
};
/**
 * 日历选中背景相关颜色生成
 */
const calendarSelectedBackgroundColorMapFunc = {
    calendarSelectedBackgroundColor: (color = '#F2F8FE') => color
};

/**
 * 生成主题
 * @param themeColor 主题色配置
 * @returns 主题对象
 */
export function generateTheme(themeColor) {
    const generateColorMap = (colorMapFunc, color, color2) => {
        return Object.keys(colorMapFunc).reduce((map, key) => {
            map[key] = colorMapFunc[key](color, color2);
            return map;
        }, {});
    };
    return {
        // 主题色生成
        ...generateColorMap(primaryColorMapFunc, themeColor.brandColor),
        ...generateColorMap(
            primaryLightColorMapFunc,
            themeColor.brandColor,
            themeColor.backgroundColor?.colorWhite
        ),
        ...generateColorMap(
            primaryDarkColorMapFunc,
            themeColor.brandColor,
            themeColor.backgroundColor?.colorBlack
        ),
        // 提示类信息相关颜色生成
        ...generateColorMap(successColorMapFunc, themeColor.functionalColor?.colorSuccess),
        ...generateColorMap(
            successLightColorMapFunc,
            themeColor.functionalColor?.colorSuccess,
            themeColor.backgroundColor?.colorWhite
        ),
        ...generateColorMap(warningColorMapFunc, themeColor.functionalColor?.colorWarning),
        ...generateColorMap(
            warningLightColorMapFunc,
            themeColor.functionalColor?.colorWarning,
            themeColor.backgroundColor?.colorWhite
        ),
        ...generateColorMap(dangerColorMapFunc, themeColor.functionalColor?.colorDanger),
        ...generateColorMap(
            dangerLightColorMapFunc,
            themeColor.functionalColor?.colorDanger,
            themeColor.backgroundColor?.colorWhite
        ),
        ...generateColorMap(infoColorMapFunc, themeColor.functionalColor?.colorInfo),
        ...generateColorMap(
            infoLightColorMapFunc,
            themeColor.functionalColor?.colorInfo,
            themeColor.backgroundColor?.colorWhite
        ),
        // 字体相关颜色生成
        ...generateColorMap(colorTextPrimaryMapFunc, themeColor.fontColor?.colorTextPrimary),
        ...generateColorMap(colorTextRegularMapFunc, themeColor.fontColor?.colorTextRegular),
        ...generateColorMap(colorTextSecondaryMapFunc, themeColor.fontColor?.colorTextSecondary),
        ...generateColorMap(
            colorTextPlaceholderMapFunc,
            themeColor.fontColor?.colorTextPlaceholder
        ),
        // 边框相关颜色生成
        ...generateColorMap(borderColorBaseMapFunc, themeColor.borderColor?.borderColorBase),
        ...generateColorMap(
            borderColorExtraLightMapFunc,
            themeColor.borderColor?.borderColorExtraLight
        ),
        ...generateColorMap(borderColorLightMapFunc, themeColor.borderColor?.borderColorLight),
        ...generateColorMap(borderColorLighterMapFunc, themeColor.borderColor?.borderColorLighter),
        // 背景相关颜色生成
        ...generateColorMap(
            backgroundColorBaseMapFunc,
            themeColor.backgroundColor?.backgroundColorBase
        ),
        ...generateColorMap(colorBlackMapFunc, themeColor.backgroundColor?.colorBlack),
        ...generateColorMap(colorWhiteMapFunc, themeColor.backgroundColor?.colorWhite),
        // 字体禁用相关颜色生成
        ...generateColorMap(fontColorDisabledBaseMapFunc, '#bbb'),
        // 复选框禁用相关颜色生成
        ...generateColorMap(checkboxDisabledInputFillMapFunc, '#edf2fc'),
        // 下拉空占位相关颜色生成
        ...generateColorMap(selectDropdownEmptyColorMapFunc, '#999'),
        // 多选标签背景相关颜色生成
        ...generateColorMap(cascaderTagBackgroundMapFunc, '#f0f2f5'),
        // 日期选择器内边框相关颜色生成
        ...generateColorMap(datepickerInnerBorderColorMapFunc, '#e4e4e4'),
        // 日历选中背景相关颜色生成
        ...generateColorMap(calendarSelectedBackgroundColorMapFunc, '#F2F8FE')
    };
}

/**
 * 设置主题
 * @param themeColor 主题颜色
 */
export function setTheme(themeColor = defaultThemeColor) {
    const theme = generateTheme(themeColor);
    const styles = document.documentElement.style;
    Object.keys(theme).forEach((key) => {
        styles.setProperty(`--${key}`, theme[key]);
    });
}
