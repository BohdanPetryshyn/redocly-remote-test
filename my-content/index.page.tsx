import React, { useEffect, useState } from 'react';

import { Box } from '@theme/ui';
import {
  Wrapper,
  TopSectionContainer,
  MainContainer,
  Title,
  Description,
  LandingButton,
  DarkContainer,
  DarkContainerLabel,
  DarkTitle,
  DarkDescription,
  DarkLink,
  StyledCodeArrows,
  StyledImg,
  StyledLabelImg,
  StyledLinkIcon,
  StyledMain,
  StyledFirstTopCard,
  BottomSectionContainer,
  BottomSectionTitle,
  SubTitle,
  DesktopCardInRowWrapper,
  StyledRowImg,
  RowCardLabel,
  RowCardWrapper,
  CardLabel,
  CardTime,
  CardTitle,
  CardText,
  CardLink,
  BottomSectionSubContainer,
  StyledCardSymbol,
  StyledLinkRow,
  TechnicalCardsSectionWrapper,
  StyledCardImd,
  CardWrapper,
  CardContainer,
  EventsCardSectionWrapper,
  EventsCardWrapper,
  EventsStyledCardImg,
  EventsCardContainer,
  ResourcesSectionWrapper,
  ResourceCard,
  ResourceImgWrapper,
  ResourceTextWrapper,
  ResourceTitle,
  ResourceText,
  ResourceLinkWrapper,
  ResourceLinkText,
  ScrollToTopButton,
  StyledButton,
} from '@theme/styled/landing';
import { Feedback } from '@theme/components';
import codeArrows from './images/code-arrows.svg';
import pcIllustrator from './images/pc-illustration.png';
import codeSnippetIllustration from './images/code-snippet-illustration.png';
import card from './images/card.svg';
import linkIcon from './images/link-element.png';
import wallet from './images/wallet.svg';
import codeIllustration from './images/code-illustration.png';
import introducingCheckout from './images/introducing-checkout.jpg';
import machineLearningIcon from './images/machine-learning.jpg';
import workingDataIcon from './images/working-data-harder.jpg';
import apiDocsIcon from './images/chinese-and-japanese-api-docs.jpg';
import eventsIcon from './images/events.jpg';
import communityIcon from './images/community.jpg';
import coreIcon from './images/core-green.svg';
import codeArrowsBlue from './images/code-arrows-blue.svg';
import wpCard from './images/wp-card.svg';
import { useTranslate } from '@portal/hooks';

const TechnicalCardsSection = () => {
  const cards = [
    {
      link: '/',
      labelColor: 'var(--label-second-color)',
      labelText: 'Technical',
      img: machineLearningIcon,
      time: '10 Jan 2022',
      title: 'Machine learning – the key to modern fraud detection',
      text: 'Machine learning detects fraud more efficiently than ever – and that has everything to do with the data it learns from.',
    },
    {
      link: '/',
      labelText: 'Ways Of Working',
      labelColor: 'var(--label-third-color)',
      img: workingDataIcon,
      time: '1 Dec 2021',
      title: 'Working data harder (2) – how Lean SDLC has made us better',
      text: 'Extracting more value from data, tools and knowledge has made Access Worldpay`s teams faster, better and more autonomous.',
    },
    {
      link: '/',
      labelText: 'Bulletin',
      labelColor: 'var(--label-fourth-color)',
      img: apiDocsIcon,
      time: '3 Nov 2021',
      title: 'Access Worldpay API docs released in Chinese & Japanese',
      text: 'We’re celebrating the launch of our API docs in Chinese and Japanese – and welcoming our new customers.',
    },
  ];

  return (
    <TechnicalCardsSectionWrapper>
      {cards.map((card) => {
        return (
          <CardWrapper key={card.labelText} to={card.link}>
            <StyledCardImd src={card.img}></StyledCardImd>
            <CardContainer>
              <div>
                <CardLabel color={card.labelColor}>{card.labelText}</CardLabel>
                <CardTime>{card.time}</CardTime>
                <CardTitle>{card.title.substring(0, 42) + '...'}</CardTitle>
                <CardText>{card.text}</CardText>
              </div>
              <StyledLinkRow>
                <CardLink to="/">Read more</CardLink>
                <StyledCardSymbol>→</StyledCardSymbol>
              </StyledLinkRow>
            </CardContainer>
          </CardWrapper>
        );
      })}
    </TechnicalCardsSectionWrapper>
  );
};

const EventsCardSection = () => {
  const cards = [
    {
      img: eventsIcon,
      title: 'Events',
      text: 'Join FIS at upcoming forums, conferences and events happening around the world to learn about technology opportunities.',
      linkText: 'See Events',
      link: '/',
    },
    {
      img: communityIcon,
      title: 'Community',
      text: 'If you’re a developer interested in payments or commerce, you’ve come to the right place. At FIS, payments and banking are all we do, we’re a community of like minded developers here to help.',
      linkText: 'Find community',
      link: '/',
    },
  ];

  return (
    <EventsCardSectionWrapper>
      {cards.map((card) => {
        return (
          <EventsCardWrapper key={card.title} to={card.link}>
            <EventsStyledCardImg src={card.img} />
            <EventsCardContainer>
              <div>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </div>
              <StyledLinkRow>
                <CardLink to="/">{card.linkText}</CardLink>
                <StyledCardSymbol>→</StyledCardSymbol>
              </StyledLinkRow>
            </EventsCardContainer>
          </EventsCardWrapper>
        );
      })}
    </EventsCardSectionWrapper>
  );
};

const ResourcesSection = () => {
  const resources = [
    {
      img: coreIcon,
      title: 'FIS',
      text: 'Find out how FIS is advancing the way the world pays, banks and invests.',
      link: '/',
    },
    {
      img: wpCard,
      title: 'Partners',
      text: 'See our Worldpay partner API documentation, specifications and tools.',
      link: '/',
    },
    {
      img: codeArrowsBlue,
      title: 'Code Connect',
      text: 'Build on the power of FIS Banking solutions with open APIs.',
      link: '/',
    },
  ];
  return (
    <ResourcesSectionWrapper>
      {resources.map((resource) => {
        return (
          <ResourceCard key={resource.title}>
            <ResourceImgWrapper>
              <img src={resource.img} />
            </ResourceImgWrapper>
            <ResourceTextWrapper>
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceText>{resource.text}</ResourceText>
              <ResourceLinkWrapper to={resource.link}>
                <ResourceLinkText>Read more</ResourceLinkText>
                <StyledCardSymbol>→</StyledCardSymbol>
              </ResourceLinkWrapper>
            </ResourceTextWrapper>
          </ResourceCard>
        );
      })}
    </ResourcesSectionWrapper>
  );
};

const TopSectionLinks = () => {
  return (
    <Box display="grid" gridTemplatesColumn="1fr" mt="-10px" mb="20px">
      <DarkLink to="/">Overview</DarkLink>
      <DarkLink to="/">Documentation</DarkLink>
      <DarkLink to="/">API Reference</DarkLink>
    </Box>
  );
};

export default function () {
  const [showButton, setShowButton] = useState(false);
  const { translate } = useTranslate();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Wrapper>
      <TopSectionContainer>
        <MainContainer>
          <StyledMain>
            <Box display="flex">
              <StyledCodeArrows src={codeArrows} />
              <Title>
                {translate('landing.title', 'WORLDPAY FOR DEVELOPERS')}
              </Title>
            </Box>
            <Description>
              {translate(
                'landing.description',
                'Documentation, code examples, tools and resources - everything you need to build your omnichannel payment solution.'
              )}
            </Description>
            <LandingButton to="/catalog/">View our APIs</LandingButton>
          </StyledMain>
          <StyledImg src={pcIllustrator} />
        </MainContainer>
        <DarkContainer>
          <StyledFirstTopCard>
            <DarkContainerLabel>
              <StyledLabelImg src={card} />
              Access Worldpay
            </DarkContainerLabel>
            <DarkTitle>ONLINE PAYMENTS</DarkTitle>
            <DarkDescription>
              Access Worldpay uses cloud-based, RESTful JSON APIs for simple
              integration of online payments. Benefit from fault-tolerant,
              scalable services plus rapid, safe, data-driven product
              enhancements on a global scale.
            </DarkDescription>
            <TopSectionLinks />
          </StyledFirstTopCard>
          <StyledImg src={codeSnippetIllustration} />
        </DarkContainer>
        <DarkContainer>
          <StyledImg src={codeIllustration} />
          <Box>
            <DarkContainerLabel>
              <StyledLabelImg src={wallet} />
              Integrated Payment Server
              <StyledLinkIcon src={linkIcon} />
            </DarkContainerLabel>
            <DarkTitle>
              POINT OF SALE <StyledLinkIcon src={linkIcon} />
            </DarkTitle>
            <DarkDescription>
              Integrated Payment Server combines point of sale, integrated
              payments and acquiring into one complete service. Because its API
              works on all major operating systems, integration with current
              point of sale software and systems is easy.
            </DarkDescription>
            <TopSectionLinks />
          </Box>
        </DarkContainer>
      </TopSectionContainer>
      <BottomSectionContainer>
        <BottomSectionTitle>DISCOVER</BottomSectionTitle>
        <BottomSectionSubContainer>
          <SubTitle>Access Worldpay Newsroom</SubTitle>
          <LandingButton to="/">Go to Newsroom</LandingButton>
        </BottomSectionSubContainer>
        <DesktopCardInRowWrapper to="/">
          <StyledRowImg src={introducingCheckout} />
          <RowCardWrapper>
            <div>
              <RowCardLabel>Product Knowledge</RowCardLabel>
              <CardTime>24 Feb 2022</CardTime>
              <CardTitle>Introducing the Checkout SDK</CardTitle>
              <CardText>
                Access Worldpay's Checkout SDK is a secure, PCI compliant and
                customizable way to capture card data on websites or apps. This
                article explains how it works.
              </CardText>
            </div>
            <StyledLinkRow>
              <CardLink to="/">Read more</CardLink>
              <StyledCardSymbol>→</StyledCardSymbol>
            </StyledLinkRow>
          </RowCardWrapper>
        </DesktopCardInRowWrapper>
      </BottomSectionContainer>
      <BottomSectionContainer>
        <TechnicalCardsSection />
        <BottomSectionSubContainer>
          <SubTitle>Events and Community</SubTitle>
        </BottomSectionSubContainer>
        <EventsCardSection />
        <BottomSectionSubContainer>
          <SubTitle>Other resources</SubTitle>
        </BottomSectionSubContainer>
        <ResourcesSection />
      </BottomSectionContainer>
      <Feedback />
      <ScrollToTopButton show={showButton}>
        <StyledButton onClick={scrollToTop}>^</StyledButton>
      </ScrollToTopButton>
    </Wrapper>
  );
}
