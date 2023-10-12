import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Link } from '@portal/Link';
import { getPathnameForLocale } from '@portal/utils';
import type {
  ResolvedNavItem,
  ResolvedNavLinkItem,
  ResolvedNavGroupItem,
} from '@theme/types/portal';
import { useI18nConfig, useTranslate } from '@portal/hooks';
import { withPathPrefix } from '@theme/utils';
import { telemetry } from '@portal/telemetry';
import { Dropdown } from '@theme/components/Dropdown';

export interface NavbarItemProps {
  navItem: ResolvedNavItem;
  className?: string;
}

export function NavbarItem({ navItem, className }: NavbarItemProps): JSX.Element | null {
  const { pathname } = useLocation();
  const { translate } = useTranslate();
  const { defaultLocale, currentLocale, locales } = useI18nConfig();

  if ((navItem as ResolvedNavLinkItem).link) {
    const item = navItem as ResolvedNavLinkItem;

    const isActive =
      pathname ===
      withPathPrefix(getPathnameForLocale(item.link, defaultLocale, currentLocale, locales));
    return (
      <NavbarMenuItem
        active={isActive}
        data-component-name="Navbar/NavbarItem"
        className={className}
        onClick={() => telemetry.send('navbar_menu_item_clicked', { type: 'link' })}
      >
        <NavbarLink to={item.link} external={item.external} target={item.target} active={isActive}>
          {item.icon ? <NavbarIcon url={item.icon} /> : null}
          <NavbarLabel>{translate(item.labelTranslationKey, item.label)}</NavbarLabel>
        </NavbarLink>
      </NavbarMenuItem>
    );
  }

  if ((navItem as ResolvedNavGroupItem).items) {
    const item = navItem as ResolvedNavGroupItem;
    const groupItems = item.items as ResolvedNavLinkItem[];
    
    const groupItemsComponents = groupItems.reduce((acc, curr) => {
      if (curr.type.startsWith('separator')) {
        acc.push({ [curr.label]: [] });
      } else {
        acc[acc.length - 1][Object.keys(acc[acc.length - 1])[0]].push(
          <Link key={`${curr.label}_${acc.label}`} to={curr.link}>
            {translate(curr.labelTranslationKey, curr.label)}
          </Link>
        );
      }
      return acc;
    }, [] as any);

    return (
      <NavbarMenuItemDropdown items={groupItemsComponents} triggerEvent="hover">
        <NavbarMenuItem
          active={false}
          data-component-name="Navbar/NavbarItem"
          className={className}
          onClick={() => telemetry.send('navbar_menu_item_clicked', { type: 'group' })}
        >
          <NavbarLabel>{translate(item.labelTranslationKey, item.label)}</NavbarLabel>
        </NavbarMenuItem>
      </NavbarMenuItemDropdown>
    );
  }

  return null;
}

export const NavbarMenuItemDropdown = styled(Dropdown).attrs(() => ({
  dataAttributes: {
    'data-component-name': 'Navbar/NavbarItemDropdown',
  },
}))`
  :hover {
    text-decoration: var(--navbar-item-hover-text-decoration);
    background: var(--navbar-item-hover-background-color);
  }
`;

export const NavbarLink = styled(Link)`
  color: ${({ active }) =>
    active ? 'var(--navbar-item-active-text-color)' : 'var(--navbar-text-color)'};
  text-decoration: ${({ active }) =>
    active ? 'var(--navbar-item-active-text-decoration)' : 'none'};
`;

export const NavbarMenuItem = styled.li<{ active?: boolean }>`
  display: inline-block;
  padding: var(--navbar-item-padding-vertical) var(--navbar-item-padding-horizontal);
  text-align: center;
  line-height: 1;
  font-size: var(--navbar-item-font-size);
  border-radius: var(--navbar-item-border-radius);
  font-weight: var(--navbar-item-font-weight);
  background: ${({ active }) => active && 'var(--navbar-item-active-background-color)'};
  color: ${({ active }) =>
    active ? 'var(--navbar-item-active-text-color)' : 'var(--navbar-text-color)'};
  &:hover {
    color: var(--navbar-item-hover-text-color);
    text-decoration: var(--navbar-item-hover-text-decoration);
    background: var(--navbar-item-hover-background-color);
    ${NavbarLink} {
      color: var(--navbar-item-hover-text-color);
      text-decoration: var(--navbar-item-hover-text-decoration);
    }
  }
`;

const NavbarLabel = styled.span`
  cursor: pointer;
  vertical-align: middle;
`;

export const NavbarIcon = styled.i<{ url?: string }>`
  ${({ url }) =>
    url &&
    css`
      background-image: url('${url}');
      width: var(--navbar-item-icon-width);
      height: var(--navbar-item-icon-height);
      display: inline-block;
      background-size: contain;
      margin-right: var(--navbar-item-icon-margin-right);
      vertical-align: middle;
      background-position: center;
      background-repeat: no-repeat;
    `}
`;
