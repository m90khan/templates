import { css } from 'styled-components';

const gridWidth = 1280;
const gridHeight = 800;
const baseFontSize = 12;

export const clampFontSizeW = ({ min, opt, max }) => {
  return `clamp(${min / baseFontSize}rem, ${(opt * 100) / gridWidth}vw, ${
    max / baseFontSize
  }rem)`;
};

export const clampFontSizeH = ({ min, opt, max }) => {
  return `clamp(${min / baseFontSize}rem, ${(opt * 100) / gridHeight}vh, ${
    max / baseFontSize
  }rem)`;
};

export const clampFontSize = ({ min, opt, max }) => {
  return `clamp(${min / baseFontSize}rem, ${
    (opt * 100) / gridWidth
  }vw, clamp(0px, ${(max * 100) / gridHeight}vh, ${max / baseFontSize}rem))`;
};

export const clampSizeW = ({ min, opt, max }) => {
  return `clamp(${min / baseFontSize}rem, ${(opt * 100) / gridWidth}vw, ${
    max / baseFontSize
  }rem)`;
};

export const clampSizeH = ({ min, opt, max }) => {
  return `clamp(${min / baseFontSize}rem, ${(opt * 100) / gridHeight}vh, ${
    max / baseFontSize
  }rem)`;
};

export const clampSize = ({ min, opt, max }) => {
  return `clamp(${min / baseFontSize}rem, ${
    (opt * 100) / gridWidth
  }vw, clamp(0px, ${(max * 100) / gridHeight}vh, ${max / baseFontSize}rem))`;
};
