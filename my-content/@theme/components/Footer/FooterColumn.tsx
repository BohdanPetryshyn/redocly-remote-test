import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from '@portal/Link';
import type { ResolvedNavItem } from '@theme/types/portal';
import { useTranslate } from '@portal/hooks';

interface FooterColumnProps {
  column: ResolvedNavItem;
  className?: string;
}

export function FooterColumn({ column, className }: FooterColumnProps): JSX.Element {
  const { translate } = useTranslate();
  const hasIcon = column.items ? column.items.some((item) => !!item.icon) : false;

  return (
    <FooterColumnContainer data-component-name="Footer/FooterColumn" className={className}>
      <FooterColumnTitle withIconPadding={hasIcon} to={column.link}>
        {translate(column.labelTranslationKey, column.label)}
      </FooterColumnTitle>
    </FooterColumnContainer>
  );
}

const FooterColumnTitle = styled(Link)`
  display: inline-block;
  font-weight: var(--footer-title-font-weight);
  font-size: var(--footer-title-font-size);
  font-family: var(--footer-font-family);
  margin: 0;
  text-decoration: none;
`;

const FooterColumnContainer = styled.div`
  display: flex;
  text-align: left;
  margin: var(--footer-column-margin-horizontal) var(--footer-column-margin-vertical);
  width: var(--footer-column-width);
  word-break: break-word;

  a {
    color: var(--footer-title-text-color);
  }
`;

export const FooterLinkIcon = styled.i<{ url?: string; withIconPadding: boolean }>`
  ${({ withIconPadding, url }) =>
    withIconPadding &&
    !url &&
    css`
      padding-left: calc(var(--footer-item-icon-width) + var(--footer-item-icon-margin-right));
    `}
  ${({ url }) =>
    url &&
    css`
      background-image: url('${url}');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: var(--footer-item-icon-width);
      height: var(--footer-item-icon-height);
      display: inline-block;
      margin-right: var(--footer-item-icon-margin-right);
      vertical-align: middle;
    `}
`;
