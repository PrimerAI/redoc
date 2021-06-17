import styled, { css, extensionsHook } from '../styled-components';
import { colors, theme } from '@primerai/thread';

const defaultStyles = {
  fontFamily: theme.fonts.$primary,
  fontWeight: theme.fontWeights.$heading,
  lineHeight: theme.lineHeights.$heading,
  letterSpacing: theme.letterSpacings.$heading,
  color: colors.$text.dark,
};

const headerFontSize = {
  1: theme.fontSizes.$6,
  2: theme.fontSizes.$5,
  3: theme.fontSizes.$4,
};

export const headerCommonMixin = (level) => css`
  font-family: ${({ theme }) => theme.typography.headings.fontFamily};
  font-weight: ${({ theme }) => theme.typography.headings.fontWeight};
  font-size: ${headerFontSize[level]};
  line-height: ${({ theme }) => theme.typography.headings.lineHeight};
`;

export const H1 = styled.h2`
  ${headerCommonMixin(1)};
  color: ${colors.$text.dark};

  ${extensionsHook('H1')};
`;

export const H2 = styled.h3`
  ${headerCommonMixin(2)};
  color: ${theme.colors.$text.dark};

  ${extensionsHook('H2')};
`;

export const H3 = styled.h4`
  ${headerCommonMixin(3)};
  color: ${theme.colors.$text.dark};

  ${extensionsHook('H3')};
`;

export const RightPanelHeader = styled.h3`
  color: ${({ theme }) => theme.rightPanel.textColor};

  ${extensionsHook('RightPanelHeader')};
`;

export const UnderlinedHeader = styled.h5`
  border-bottom: ${theme.borders.$muted};
  margin: 1em 0 1em 0;
  padding-bottom: 0.25em;
  color: ${colors.$text.default};
  font-weight: normal;
  text-transform: uppercase;
  font-size: ${theme.fontSizes.$1};
  line-height: ${theme.lineHeights.$body};
  letter-spacing: ${theme.letterSpacings.$caps};

  ${extensionsHook('UnderlinedHeader')};
`;

export const Heading = styled.h2({
  ...defaultStyles,
  fontSize: theme.fontSizes.$5,
});
