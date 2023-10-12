import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { getPathnameForLocale, withPathPrefix } from '@portal/utils';
import { usePreloadHistory } from '@portal/usePreloadHistory';
import { useI18nConfig } from '@portal/hooks';
import { useOutsideClick } from '@theme/hooks';
import { Icon } from '@theme/components/icons/Icon';

export const LanguagePicker = (props: { onChangeLanguage: (newLang: string) => void }) => {
  const { currentLocale, locales, defaultLocale } = useI18nConfig();

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const location = useLocation();
  const history = usePreloadHistory();

  if (locales.length < 2) {
    return null;
  }

  return (
    <Dropdown
      data-component-name="I18n/LanguagePicker"
      ref={dropdownRef}
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <DropdownValue>
        <Icon type={currentLocale} />
      </DropdownValue>
      <DropdownMenu>
        {locales.map(locale => (
          <MenuItem
            onClick={() => {
              const newLangPathname = withPathPrefix(
                getPathnameForLocale(location.pathname, defaultLocale, locale.code, locales)
              );
              const newUrlWithLanguage = `${newLangPathname}${location.search}${location.hash}`;
              history.push(newUrlWithLanguage);
              props.onChangeLanguage(locale.code);
            }}
            key={locale.code}
          >
            {locale.name || locale.code || ''}
          </MenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

const Dropdown = styled.div<{ isOpen: boolean }>`
  font-size: var(--profile-menu-item-font-size);
  font-family: var(--profile-menu-item-font-family);
  font-weight: var(--profile-menu-item-font-weight);
  line-height: var(--profile-menu-item-line-height);

  ${props =>
    props.isOpen
      ? `
    ${DropdownMenu} {
      display: block;
    }
  `
      : ``}
`;

const DropdownValue = styled.div`
  cursor: pointer;
  display: block;
  line-height: 0;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  color: var(--profile-menu-item-text-color);
  background-color: var(--profile-menu-background-color);
  top: 80px;
  margin: 0;
  margin-left: -40px;
  box-shadow: 0 1px 2px rgb(204, 204, 204);
  border-radius: 0 1px 2px 2px;
  overflow: hidden;
  display: none;
  overflow-y: auto;
  z-index: 9;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  padding: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--profile-menu-item-hover-text-color);
    text-decoration: var(--profile-menu-item-hover-text-decoration);
    background: var(--profile-menu-item-hover-background-color);
  }
`;