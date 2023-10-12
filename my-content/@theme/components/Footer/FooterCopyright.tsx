import React from 'react';
import styled from 'styled-components';

import { useTranslate } from '@portal/hooks';

interface FooterCopyrightProps {
  copyrightText: string;
  className?: string;
}

export function FooterCopyright({
  copyrightText = '',
  className,
}: FooterCopyrightProps): JSX.Element | null {
  const { translate } = useTranslate();
  const translationKeys = {
    copyrightText: 'theme.footer.copyrightText',
  };
  return copyrightText ? (
    <Wrapper
      className={className}
      data-component-name="Footer/FooterCopyright"
      data-translation-key={translationKeys.copyrightText}
    >
      {translate(translationKeys.copyrightText, copyrightText)}
    </Wrapper>
  ) : null;
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding: 1.5em 3em;
  font-weight: 300;
  background-color: var(--footer-background-color);
  color: var(--footer-text-color);
  text-align: center;
  span {
    max-width: var(--footer-container-max-width);
  }
`;
