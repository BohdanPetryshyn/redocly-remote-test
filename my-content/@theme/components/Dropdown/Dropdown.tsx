import * as React from 'react';
import styled from 'styled-components';

import { ArrowIcon } from '@theme/icons';
import { useOutsideClick } from '@theme/hooks';

interface DropdownItem {
  [key: string]: JSX.Element[];
}

export interface DropdownProps {
  children: React.ReactNode;
  items: DropdownItem[];
  dataAttributes?: Record<string, string>;
  className?: string;
  withArrow?: boolean;
  triggerEvent?: 'click' | 'hover';
  onChange?: (value: React.ReactNode | string) => void;
}

export const Dropdown = ({
  children,
  className,
  items,
  withArrow,
  triggerEvent = 'click',
  onChange,
  dataAttributes,
}: DropdownProps) => {
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (value: React.ReactNode | string) => {
    setIsOpen(false);
    onChange?.(value);
  };

  useOutsideClick(dropdownRef, handleClose);

  return (
    <DropdownContainer
      {...dataAttributes}
      data-testId="dropdown"
      className={className}
      ref={dropdownRef}
      onPointerEnter={triggerEvent === 'hover' ? handleOpen : undefined}
      onPointerLeave={handleClose}
      onClick={triggerEvent === 'click' ? handleToggle : undefined}
    >
      <DropdownHeader>
        {children}
        {withArrow ? isOpen ? <ArrowIcon direction="up" /> : <ArrowIcon direction="down" /> : null}
      </DropdownHeader>

      {isOpen && (
        <DropdownWrapper>
          {items.map(item => {
            return Object.entries(item).map(([key, value], index) => {
              return (
                <DropdownList key={key + index}>
                  <SeparatorWrapper>{key}</SeparatorWrapper>
                  {value.map((link, index) => {
                    return (
                      <DropdownListItem key={index} onClick={() => handleClick(link)}>
                        {link}
                      </DropdownListItem>
                    );
                  })}
                </DropdownList>
              );
            });
          })}
        </DropdownWrapper>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  font-size: var(--dropdown-font-size);
  font-weight: var(--dropdown-font-weight);
  line-height: var(--dropdown-line-height);
  border-radius: var(--dropdown-border-radius);
  color: var(--dropdown-text-color);

  a {
    display: block;
    text-decoration: none;
    color: var(--dropdown-text-color);
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  list-style-type: none;
  padding: 0 10px 0 0;
  cursor: pointer;
  z-index: 1;
`;

const SeparatorWrapper = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 10px 18px;
  color: #fff;
`;

export const DropdownListItem = styled.li`
  border-radius: var(--dropdown-list-item-border-radius);
  a {
    color: var(--label-color);
    font-size: 14px;
  }

  & > * {
    padding: var(--dropdown-list-item-vertical-padding) var(--dropdown-list-item-horizontal-padding);
  }

  :hover a {
    color: #fff;
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  min-width: var(--dropdown-list-min-width);
  max-width: var(--dropdown-list-max-width);
  padding: var(--dropdown-list-padding);
  border: 0.5px solid var(--label-color);
  background-color: var(--dropdown-list-background-color);
  border-radius: var(--dropdown-list-border-radius);
  box-shadow: var(--dropdown-list-box-shadow);
  list-style-type: none;
  white-space: nowrap;
  overflow: hidden;
  z-index: 1;
`;
