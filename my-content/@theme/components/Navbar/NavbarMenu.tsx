import React from 'react';
import styled from 'styled-components';

import { NavbarItem } from '@theme/components/Navbar/NavbarItem';
import { isPrimitive } from '@theme/utils';
import type { ResolvedConfigLinks, ResolvedNavItem } from '@theme/types/portal';

export function NavbarMenu({
  menuItems,
  className,
}: {
  menuItems: ResolvedConfigLinks;
  className?: string;
}): JSX.Element | null {
  if (isPrimitive(menuItems)) {
    return null;
  }

  return (
    <NavItemsContainer data-component-name="Navbar/NavbarMenu" className={className}>
      {(menuItems as ResolvedNavItem[]).map((navItem, index) => {
        return (
          <NavbarItem key={`${navItem.label}_${index}`} data-cy={navItem.label} navItem={navItem} />
        );
      })}
    </NavItemsContainer>
  );
}

const NavItemsContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: none;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  gap: var(--navbar-item-gap);
  margin: 0 0 0 40px;

  ${({ theme }) => theme.mediaQueries.medium} {
    display: flex;
  }
`;
