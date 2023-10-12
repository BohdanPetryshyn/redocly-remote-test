import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Sidebar } from '@theme/components/Sidebar/Sidebar';
import { FooterWrapper } from '@theme/components/Sidebar/FooterWrapper';
import { HeaderWrapper } from '@theme/components/Sidebar/HeaderWrapper';
import { useMobileMenu } from '@theme/hooks/useMobileMenu';
import { MobileSidebarButton } from '@theme/components/Sidebar/MobileSidebarButton';
import { MenuContainer } from '@theme/components/Menu/MenuContainer';
import { useThemeConfig } from '@theme/hooks/useThemeConfig';
import { telemetry } from '@portal/telemetry';
import { usePageSharedData } from '@portal/hooks';

import { MobileSidebarIcon } from '@theme/components/Sidebar/MobileSidebarIcon';

interface SidebarLayoutProps {
  versions?: React.ReactNode;
  menu?: React.ReactNode;
  backLink?: {
    label: string;
    slug: string;
  };
  footer?: React.ReactNode;
  actions?: React.ReactNode;
  header?: React.ReactNode;
  growContent?: boolean;
  collapsed?: boolean;
  onToggleMenu?: (isOpen: boolean) => void;
  className?: string;
}

const StyledFooterWrapper = styled(FooterWrapper)`
  display: none;

  ${({ theme }) => theme.mediaQueries?.medium} {
    display: flex;
  }
`;

export function SidebarLayout({
  versions,
  menu,
  footer,
  header,
  growContent,
  collapsed,
  onToggleMenu,
  className,
}: SidebarLayoutProps): JSX.Element | null {
  const [isOpen, setIsOpen] = useMobileMenu();
  const [mappedCollapsed, setMappedCollapsed] = React.useState(collapsed);
  const catalogInfo = usePageSharedData<{ title: string; slug: string }>('catalog-info');

  useEffect(() => {
    setMappedCollapsed(collapsed && !isOpen);
  }, [isOpen, collapsed, setMappedCollapsed]);

  const toggleMenu = () => {
    onToggleMenu?.(!isOpen);
    setIsOpen(!isOpen);
  };

  const { search, sidebar } = useThemeConfig();

  if (sidebar?.hide) {
    return null;
  }

  return (
    <>
      {mappedCollapsed ? (
        footer ? (
          <Wrapper collapsed={true}>
            <StyledFooterWrapper data-component-name="Sidebar/FooterWrapper" collapsed={true}>
              {footer}
            </StyledFooterWrapper>
            <MobileSidebarButton opened={isOpen} onClick={toggleMenu}>
              <MobileSidebarIcon />
            </MobileSidebarButton>
          </Wrapper>
        ) : null
      ) : (
        <Wrapper data-component-name="Sidebar/SidebarLayout" className={className}>
          <Sidebar animate={true} opened={isOpen}>
            {header ? (
              <HeaderWrapper onClick={() => telemetry.send('back_to_catalog_button_clicked', {})}>
                {header}
              </HeaderWrapper>
            ) : null}
            {catalogInfo && versions ? <>{versions}</> : null}
            <MenuContainer growContent={growContent}>{menu}</MenuContainer>
            {footer && !isOpen ? (
              <FooterWrapper data-component-name="Sidebar/FooterWrapper">{footer}</FooterWrapper>
            ) : null}
          </Sidebar>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div<{ collapsed?: boolean }>`
  ${({ collapsed }) =>
    collapsed &&
    `
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        border-right: 1px solid var(--sidebar-border-color);
    `}
`;
