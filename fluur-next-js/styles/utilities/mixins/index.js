import { css } from 'styled-components';

export const Size = ({ height, maxHeight, maxWidth, width }) => css`
  block-size: ${height};
  inline-size: ${width};
  max-block-size: ${maxHeight};
  max-inline-size: ${maxWidth};
`;

export const Cover = () => css`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Center = () => css`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Ratio = (height, width) => css`
  font-size: 0;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    display: inline-block;
    padding-top: ${width} / ${height} * 100%;
    width: 100%;
  }
`;

export const Flex = (direction, justify, align) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;
