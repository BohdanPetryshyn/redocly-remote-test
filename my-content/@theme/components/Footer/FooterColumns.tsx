import React from 'react';
import styled from 'styled-components';

import { FooterColumn } from '@theme/components/Footer/FooterColumn';
import type { ResolvedNavItem } from '@theme/types/portal';

interface FooterColumnsProps {
  columns: ResolvedNavItem[];
  className?: string;
}

export function FooterColumns({ columns, className }: FooterColumnsProps): JSX.Element | null {
  if (!columns?.length) {
    return null;
  }

  return (
    <FooterColumnsContainer data-component-name="Footer/FooterColumns" className={className}>
      <FooterRow>
        {columns.map((column, index) => (
          <FooterColumn key={`${column.label}_${index}`} column={column} />
        ))}
      </FooterRow>
    </FooterColumnsContainer>
  );
}

export const FooterColumnsContainer = styled.div`
  padding: var(--footer-padding-vertical) var(--footer-padding-horizontal);
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: var(--footer-container-max-width);
  padding: 0 0 20px 0;

  ${({ theme }) => theme.mediaQueries.medium} {
    padding: 30px;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  ${({ theme }) => theme.mediaQueries.small} {
    justify-content: space-evenly;
    flex-wrap: nowrap;
  }
`;
