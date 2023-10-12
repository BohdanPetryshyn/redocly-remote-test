import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { NavbarMenu } from '@theme/components/Navbar';
import { useMobileMenu } from '@theme/hooks/useMobileMenu';
import type { NavbarLogoProps } from '@theme/components/NavbarLogo';
import { NavbarLogo } from '@theme/components/NavbarLogo';
import { MobileMenu } from '@theme/components/Menu/MobileMenu';
import { ColorModeSwitcher } from '@theme/components/ColorModeSwitcher/ColorModeSwitcher';
import { useThemeConfig } from '@theme/hooks/useThemeConfig';
import { Search } from '@theme/components/Search/Search';
import { AuthUserProfile } from '@theme/components/Profile/AuthUserProfile';
import type { LogoConfig, ResolvedConfigLinks } from '@theme/types/portal';
import { useI18n } from '@portal/hooks';
import { LanguagePicker } from '@theme/I18n/LanguagePicker';
import { ProductPicker } from '@theme/components/Product';
import { BurgerButton } from '@theme/components/Navbar/BurgerButton';

const EmptyNavbarHack = createGlobalStyle`
  :root {
    --navbar-height: 0px !important;
  }
`;

export function Navbar(): JSX.Element | null {
  const [isOpen, setIsOpen] = useMobileMenu(false);
  const themeConfig = useThemeConfig();
  const { changeLanguage } = useI18n();

  const menu = themeConfig.navbar?.items;
  const logo = themeConfig.logo;

  const { search: searchSettings, navbar, userProfile: userProfileSettings } = themeConfig;
  const hideSearch =
    searchSettings?.hide || (searchSettings?.placement && searchSettings?.placement !== 'navbar');
  const hideUserProfile = userProfileSettings?.hide;

  if (navbar?.hide) {
    return null;
  }

  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  if (!menu && !logo) {
    return <EmptyNavbarHack />;
  }

  return (
    <NavbarPresentational
      {...{
        closeMobileMenu,
        openMobileMenu,
        isOpen,
        hideSearch: Boolean(hideSearch),
        logo: logo as Pick<LogoConfig, 'image' | 'link' | 'altText'>,
        hideUserProfile,
        changeLanguage,
      }}
    />
  );
}

interface NavbarPresentationalProps extends NavbarLogoProps {
  closeMobileMenu: () => void;
  openMobileMenu: () => void;
  isOpen: boolean;
  hideSearch: boolean;
  hideUserProfile: boolean | string | undefined;
  changeLanguage: (value: string) => void;
  className?: string;
}

export function NavbarPresentational(props: NavbarPresentationalProps): JSX.Element | null {
  const {
    closeMobileMenu,
    openMobileMenu,
    isOpen,
    hideSearch,
    logo,
    hideUserProfile,
    changeLanguage,
    className,
  } = props;

  const themeConfig = useThemeConfig();

  const menu = themeConfig.navbar?.items;

  return (
    <NavbarContainer data-component-name="Navbar/Navbar" className={className}>
      {isOpen && <MobileMenu />}
      <NavbarRow>
        <BurgerButton onClick={isOpen ? closeMobileMenu : openMobileMenu} isOpen={isOpen} />
        <NavbarLogo logo={logo} />
        <ProductPicker />
        <NavbarMenu menuItems={menu as ResolvedConfigLinks} />
        {hideSearch ? null : <Search />}
        <ElementsWrapper>
          <LanguagePicker onChangeLanguage={changeLanguage} />
        </ElementsWrapper>
        <ColorModeSwitcherWrapper isVisible={isOpen}>
          <ColorModeSwitcher />
        </ColorModeSwitcherWrapper>
        {hideUserProfile ? null : (
          <AuthUserProfileWrapper>
            <AuthUserProfile />
          </AuthUserProfileWrapper>
        )}
      </NavbarRow>
    </NavbarContainer>
  );
}

const ColorModeSwitcherWrapper = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  ${({ theme }) => theme.mediaQueries.medium} {
    display: block;
  }
`;

const AuthUserProfileWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.medium} {
    display: block;
  }
`;

export const NavbarContainer = styled.nav`
  --text-color: var(--navbar-text-color);

  height: var(--navbar-height);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  font-size: 0.875rem;
  position: sticky;
  top: 0;
  z-index: var(--z-index-raised);
  padding: var(--navbar-item-padding-vertical) var(--navbar-item-padding-horizontal);
  background: var(--navbar-background-color);
  font-family: var(--navbar-item-font-family);

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 1rem;
  }
`;

export const NavbarRow = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  max-width: var(--navbar-container-max-width);
`;

const ElementsWrapper = styled.div`
  display: flex;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  width: 40px;
  height: 40px;
  margin-right: 5px;
  padding: 6px;
`;
