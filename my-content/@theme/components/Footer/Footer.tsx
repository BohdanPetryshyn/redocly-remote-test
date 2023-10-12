import React from 'react';
import styled from 'styled-components';

import { FooterColumns } from '@theme/components/Footer/FooterColumns';
import { FooterCopyright } from '@theme/components/Footer/FooterCopyright';
import { isEmptyArray } from '@theme/utils';
import { useThemeConfig } from '@theme/hooks';
import type { ResolvedNavItem } from '@theme/types/portal';
import { Button } from '@theme/components';
import { Facebook } from '../../../images/Facebook';
import { Youtube } from '../../../images/Youtube';
import { Linkedin } from '../../../images/Linkedin';
import { Twitter } from '../../../images/Twitter';

export function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig() || {};
  const { items, copyrightText } = footer || {};

  if (isEmptyArray(items) || !copyrightText || footer?.hide) {
    return null;
  }

  return (
    <FooterPresentationalComponent
      items={items as ResolvedNavItem[]}
      copyrightText={copyrightText}
    />
  );
}

interface FooterPresentationalComponentProps {
  items: ResolvedNavItem[];
  copyrightText: string;
  className?: string;
}

export function FooterPresentationalComponent({
  items,
  copyrightText,
  className,
}: FooterPresentationalComponentProps): JSX.Element | null {
  return (
    <>
      <FooterBanner>
        <FooterBannerWrapper>
          <FooterBannerTextWrapper>
            <TextFirstPart>STILL CAN'T FIND </TextFirstPart>
            <TextSecondPart>WHAT YOU'RE LOOKING FOR?</TextSecondPart>
          </FooterBannerTextWrapper>
          <StyledLine />
          <FooterBannerSecondWrapper>
            <SecondTextWrapper>
              <SmallTitle>Let's start a </SmallTitle>
              <BigTitle>CONVERSATION</BigTitle>
            </SecondTextWrapper>
            <Description>
              To discuss how we can help your business, or to learn more about
              us, just get in touch.
            </Description>
            <TransparentButton to="/">Let's talk</TransparentButton>
            <SubText>STAY CONNECTED</SubText>
            <Row>
              <StyledImage
                onClick={() =>
                  (window.location.href = 'https://www.facebook.com/worldpay')
                }>
                <Facebook color="var(--footer-social-button-color)" />
              </StyledImage>
              <StyledImage
                onClick={() =>
                  (window.location.href = 'https://twitter.com/worldpay_global')
                }>
                <Twitter color="var(--footer-social-button-color)" />
              </StyledImage>
              <StyledImage
                onClick={() =>
                  (window.location.href =
                    'https://www.linkedin.com/company/worldpay')
                }>
                <Linkedin color="var(--footer-social-button-color)" />
              </StyledImage>
              <StyledImage
                onClick={() =>
                  (window.location.href =
                    'https://www.youtube.com/user/WorldpayGlobal')
                }>
                <Youtube color="var(--footer-social-button-color)" />
              </StyledImage>
            </Row>
          </FooterBannerSecondWrapper>
          <StyledLine />
          <FooterBannerSecondWrapper>
            <SecondTextWrapper>
              <SmallTitle>Need </SmallTitle>
              <BigTitle>SUPPORT</BigTitle>
            </SecondTextWrapper>
            <Description>Ask our developer community.</Description>
            <TransparentButton to="/">Get support</TransparentButton>
          </FooterBannerSecondWrapper>
        </FooterBannerWrapper>
      </FooterBanner>
      <FooterContainer
        data-component-name="Footer/Footer"
        className={className}>
        <FooterCopyright copyrightText={copyrightText} />
        <FooterColumns columns={items as ResolvedNavItem[]} />
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: var(--footer-font-size);
  flex-shrink: 0;
  background-color: var(--footer-background-color);
  color: var(--footer-text-color);
  font-family: var(--footer-font-family);
  font-weight: var(--footer-font-weight);
  a:hover {
    color: var(--footer-text-color);
  }

  ${({ theme }) => theme.mediaQueries.medium} {
    flex-direction: row;
  }
`;

const FooterBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;

  ${({ theme }) => theme.mediaQueries.medium} {
    align-items: start;
    justify-content: start;
    padding: 30px;
    flex-direction: row;
    width: 80%;
  }
`;

const FooterBannerTextWrapper = styled.p`
  max-width: auto;
  text-align: flex-start;

  ${({ theme }) => theme.mediaQueries.medium} {
    max-width: 350px;
  }
`;

const TextFirstPart = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 30px;
  }
`;

const TextSecondPart = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: var(--banner-text-color);

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 30px;
  }
`;

const FooterBanner = styled.div`
  background-color: var(--bottom-section-bg-color);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100vw;

  ${({ theme }) => theme.mediaQueries.medium} {
    align-items: center;
    justify-content: center;
  }
`;

const StyledLine = styled.div`
  border-left: none;
  border-bottom: 0.5px solid var(--footer-social-button-color);
  width: 90%;
  height: auto;

  ${({ theme }) => theme.mediaQueries.medium} {
    border-left: 0.5px solid var(--footer-social-button-color);
    width: 10px;
    border-bottom: none;
    height: 300px;
  }
`;

const SmallTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const BigTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
`;

const TransparentButton = styled(Button)`
  border-radius: 25px;
  background-color: transparent;
  border: 2px solid var(--color-primary);
  font-size: 16px;
  height: 40px;
  margin-top: 20px;
  color: var(--color-primary);

  &:hover {
    background-color: var(--footer-button-color);
    border: 2px solid var(--color-primary);
  }
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const StyledImage = styled.div`
  cursor: pointer;
  margin-right: 10px;

  svg path {
    stroke: var(--footer-social-button-color);
    stroke-width: 0;
  }

  .foreground {
    fill: var(--footer-social-button-color);
  }
`;

const FooterBannerSecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: auto;
  text-align: flex-start;
  margin: 0 10px;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.medium} {
    margin: 0 30px;
    max-width: 400px;
    justify-content: start;
    align-items: start;
  }
`;

const SecondTextWrapper = styled.p`
  max-width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: flex-start;

  ${({ theme }) => theme.mediaQueries.medium} {
    max-width: 200px;
    align-items: start;
    justify-content: start;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
