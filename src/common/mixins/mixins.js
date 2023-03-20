import { css } from 'styled-components';

export const block = css`
  width: ${({ w = 'auto' }) => w};
  height: ${({ h = 'auto' }) => h};
  padding: ${({ p = 0 }) => p};
  margin: ${({ m = 0 }) => m};
  overflow: ${({ overflowHidden, auto }) => (overflowHidden ? 'hidden' : auto ? 'auto' : 'visible')};
  position: ${({ pos = 'static' }) => pos};
  cursor: ${({ pointer = false }) => (pointer ? 'pointer' : 'auto')};
  max-width: ${({ maxW }) => maxW || 'none'};
  background: ${({ bg }) => bg || 'transparent'};
  text-align: ${({ ta }) => ta || 'left'};
  opacity: ${({ opacity = 1 }) => opacity};
  min-height: ${({ minH = '0' }) => minH};
`;

export const transition = css`
  transition: 0.15s ease-out all;
`;

export const flex = css`
  display: flex;
  align-items: ${({ align = 'flex-start' }) => align};
  justify-content: ${({ justify = 'space-between' }) => justify};
`;
