import React from 'react';
import styled from 'styled-components';

import { Link } from '@portal/Link';
import type { LogoConfig } from '@theme/types/portal';
import { telemetry } from '@portal/telemetry';

export type NavbarLogoProps = {
  logo: Pick<LogoConfig, 'image' | 'link' | 'altText'>;
  className?: string;
};

export function NavbarLogo({
  logo,
  className,
}: NavbarLogoProps): JSX.Element | null {
  if (!logo.image) {
    return null;
  }
  const img = (
    <StyledLogo>
      <NavLogo
        className={className}
        src={logo.image}
        alt={logo.altText}
        data-component-name="NavbarLogo/NavbarLogo"
        onClick={() => telemetry.send('logo_clicked', {})}
      />
      <StyledLine />
      <StyledText>DEVELOPER</StyledText>
    </StyledLogo>
  );
  return logo.link ? <Link to={logo.link}>{img}</Link> : img;
}

const StyledText = styled.p`
  color: var(--text-color);
  font-size: 24px;
  font-weight: 700;
`;

const StyledLine = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.medium} {
    display: block;
    border-right: 2px solid var(--text-color);
    height: 30px;
    margin-right: 20px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLogo = styled.img`
  display: none;
  ${({ theme }) => theme.mediaQueries.medium} {
    display: block;
    max-width: var(--navbar-logo-max-width);
    max-height: var(--navbar-logo-max-height);
    height: var(--navbar-logo-height);
    margin: var(--navbar-logo-margin);
  }
`;
