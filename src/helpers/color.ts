export interface RGBColor {
  R: number;
  G: number;
  B: number;
}

export interface HSLColor {
  H: number;
  S: number;
  L: number;
}

export type ColorType = string | RGBColor | HSLColor;

export class Color {
  rgbColor: RGBColor;

  constructor(color: ColorType) {
    if (this.isString(color)) {
      this.rgbColor = this.stringToRGB(color);
    } else if (this.isHSLColor(color)) {
      this.rgbColor = this.HSLToRGB(color);
    } else {
      this.rgbColor = color;
    }
  }

  get hexColor() {
    return this.RGBToHex(this.rgbColor);
  }
  get hslColor() {
    return this.RGBToHSL(this.rgbColor);
  }

  isString(color: string | RGBColor | HSLColor): color is string {
    return typeof color === 'string';
  }

  isRGBColor(color: string | RGBColor | HSLColor): color is RGBColor {
    return (color as RGBColor).R !== undefined;
  }

  isHSLColor(color: string | RGBColor | HSLColor): color is HSLColor {
    return (color as HSLColor).H !== undefined;
  }

  RGBToHex(rgbColor: RGBColor) {
    const { R, G, B } = rgbColor;
    const hexR = R.toString(16).padStart(2, '0');
    const hexG = G.toString(16).padStart(2, '0');
    const hexB = B.toString(16).padStart(2, '0');

    return '#' + hexR + hexG + hexB;
  }

  stringToRGB(color: string) {
    if (color.length === 4) {
      color = color[0] + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
    }

    const R = Number.parseInt(color.substring(1, 3), 16);
    const G = Number.parseInt(color.substring(3, 5), 16);
    const B = Number.parseInt(color.substring(5, 7), 16);
    return { R, G, B };
  }

  HSLToRGB(hslColor: HSLColor) {
    let { S, L } = hslColor;
    const { H } = hslColor;
    S /= 100;
    L /= 100;

    const C = (1 - Math.abs(2 * L - 1)) * S;
    const X = C * (1 - Math.abs(((H / 60) % 2) - 1));
    const M = L - C / 2;
    let R = 0;
    let G = 0;
    let B = 0;
    if (0 <= H && H < 60) {
      R = C;
      G = X;
      B = 0;
    } else if (60 <= H && H < 120) {
      R = X;
      G = C;
      B = 0;
    } else if (120 <= H && H < 180) {
      R = 0;
      G = C;
      B = X;
    } else if (180 <= H && H < 240) {
      R = 0;
      G = X;
      B = C;
    } else if (240 <= H && H < 300) {
      R = X;
      G = 0;
      B = C;
    } else if (300 <= H && H < 360) {
      R = C;
      G = 0;
      B = X;
    }
    R = Math.round((R + M) * 255);
    G = Math.round((G + M) * 255);
    B = Math.round((B + M) * 255);

    return { R, G, B };
  }

  RGBToHSL(rgbColor: RGBColor) {
    let { R, G, B } = rgbColor;
    R /= 255;
    G /= 255;
    B /= 255;

    const cmin = Math.min(R, G, B);
    const cmax = Math.max(R, G, B);
    const delta = cmax - cmin;
    let H, S, L;

    if (delta === 0) {
      H = 0;
    } else if (cmax === R) {
      H = ((G - B) / delta) % 6;
    } else if (cmax == G) {
      H = (B - R) / delta + 2;
    } else {
      H = (R - G) / delta + 4;
    }
    H = Math.round(H * 60);
    if (H < 0) {
      H += 360;
    }
    L = (cmax + cmin) / 2;
    S = delta == 0 ? 0 : delta / (1 - Math.abs(2 * L - 1));
    S = +(S * 100).toFixed(1);
    L = +(L * 100).toFixed(1);

    return { H, S, L };
  }

  isDark() {
    const { R, G, B } = this.rgbColor;
    // ref https://www.w3.org/TR/AERT/#color-contrast
    const brightness = (R * 299 + G * 587 + B * 114) / 1000;
    return brightness < 128;
  }

  isLight() {
    return !this.isDark();
  }

  darken(percent: number, color = this.hslColor) {
    let { L } = color;
    const { H, S } = color;
    L -= L * percent;
    return new Color({ H, S, L });
  }

  lighten(percent: number, color = this.hslColor) {
    let { L } = color;
    const { H, S } = color;
    L += L * percent;
    return new Color({ H, S, L });
  }

  luminance(rgbColor = this.rgbColor) {
    // ref https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    let { R, G, B } = rgbColor;
    [R, G, B] = [R, G, B].map((color) => {
      color = color / 255;
      return color <= 0.03928 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  }

  contrast(bgColor: ColorType = '#fff', contrastColor = this.rgbColor) {
    const color = new Color(bgColor);
    const bgLuminance = this.luminance(color.rgbColor);
    const textLuminance = this.luminance(contrastColor);
    return bgLuminance > textLuminance
      ? (bgLuminance + 0.05) / (textLuminance + 0.05)
      : (textLuminance + 0.05) / (bgLuminance + 0.05);
  }

  level(bgColor: ColorType = '#fff') {
    const color = new Color(bgColor);
    const contrastRatio = this.contrast(color.rgbColor);
    return contrastRatio >= 7.1 ? 'AAA' : contrastRatio >= 4.5 ? 'AA' : '';
  }

  highContrastColor(bgColor: ColorType = '#fff') {
    let contrastColor = new Color(this.rgbColor);
    if (this.isLight()) {
      const color = new Color(bgColor);
      let contrastRatio = this.contrast(color.rgbColor, contrastColor.rgbColor);
      while (contrastRatio < 4.5) {
        contrastColor = contrastColor.darken(0.1);
        contrastRatio = this.contrast(color.rgbColor, contrastColor.rgbColor);
      }
    }
    return contrastColor;
  }

  textColor() {
    if (this.isLight()) {
      return new Color('#000');
    } else {
      return new Color('#fff');
    }
  }
}
