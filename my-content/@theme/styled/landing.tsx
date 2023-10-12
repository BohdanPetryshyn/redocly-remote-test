import styled from 'styled-components';

import { Button } from '@theme/components/Button';
import { Link } from '@portal/Link';
import homeBackground from '../../images/home-background.jpg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const TopSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-image: url(${homeBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0 0 0;

  ${({ theme }) => theme.mediaQueries.medium} {
    margin: 100px 0;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  max-width: 500px;
  text-align: center;
  margin-right: 20px;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 50px;
    text-align: start;
    line-height: 60px;
    margin-right: 0;
  }
`;

export const StyledCodeArrows = styled.img`
  display: flex;
  margin: 0 0 0 20px;

  ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: -60px;
  }
`;

export const Description = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  max-width: 500px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 20px;
    text-align: start;
    line-height: 38px;
    margin-right: 0;
  }
`;

export const LandingButton = styled(Button)`
  color: var(--text-main-color);
  font-size: 16px;
  width: 200px;
  height: 45px;
  border: 1px solid var(--items-color);
  background-color: var(--items-color);
  border-radius: 25px;
  margin: 70px 0 100px 0;

  &:hover {
    border: 1px solid var(--hover-items-color);
    background-color: var(--hover-items-color);
  }

  ${({ theme }) => theme.mediaQueries.medium} {
    margin: 0 0 0 20px;
  }
`;

export const StyledImg = styled.img`
  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
    width: 500px;
    margin-right: 20px;
  }
`;

export const DarkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  width: 95%;
  background-color: var(--sections-background-color);
  border-radius: 10px;
  padding: 30px 20px 0 20px;

  ${({ theme }) => theme.mediaQueries.medium} {
    width: 75%;
    padding-top: 50px;
  }
`;

export const DarkContainerLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--label-color);

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 16px;
  }
`;

export const StyledLabelImg = styled.img`
  margin-right: 5px;
`;

export const DarkTitle = styled.p`
  color: var(--color-primary);
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
  max-width: 410px;
  margin-top: 10px;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 50px;
    line-height: 50px;
  }
`;

export const DarkDescription = styled.p`
  color: var(--color-primary);
  font-size: 12px;
  font-weight: 500;
  line-height: 25px;
  margin-top: -10px;
  max-width: 400px;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 14px;
    line-height: 25px;
    margin-top: -30px;
  }
`;

export const DarkLink = styled(Link)`
  color: var(--color-primary);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 15px;
`;

export const StyledLinkIcon = styled.img`
  margin-left: 5px;
  width: 12px;
  height: 12px;
`;

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.medium} {
    justify-content: start;
    align-items: start;
  }
`;

export const StyledFirstTopCard = styled.div`
  padding: 0;

  ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0 80px;
  }
`;

export const BottomSectionContainer = styled.div`
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

export const BottomSectionTitle = styled.p`
  color: var(--color-primary);
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
  width: 75%;
  padding: 10px;
  margin: 40px 0 -50px 0;

  ${({ theme }) => theme.mediaQueries.medium} {
    margin: 80px 0 0 0;
    padding: 0;
    font-size: 50px;
    line-height: 50px;
  }
`;

export const SubTitle = styled.p`
  color: var(--color-primary);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  padding: 10px;
  margin: -10px 20px -20px 0;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    margin: 30px 0 20px 0;
    padding: 0;
  }
`;

export const DesktopCardInRowWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  text-decoration: none;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;

  ${({ theme }) => theme.mediaQueries.medium} {
    flex-direction: row;
    margin-bottom: 80px;
    margin-left: 0;
    margin-right: 0;
    width: 80%;
    cursor: pointer;
  }
`;

export const StyledRowImg = styled.img`
  border-radius: 10px;
  z-index: 0;

  width: 100%;
  max-width: 340px;
  height: 200px;
  object-fit: cover;
  transition: transform 0.6s;

  ${({ theme }) => theme.mediaQueries.medium} {
    width: 100%;
    max-width: 800px;
    height: 450px;

    ${DesktopCardInRowWrapper}:hover & {
      transform: scale(1.03);
    }
  }
`;

export const RowCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-primary);
  border-radius: 0 0 10px 10px;
  margin: 20px 0;
  padding: 30px;
  max-width: 340px;
  transform: translateY(-20%);

  ${({ theme }) => theme.mediaQueries.medium} {
    margin: 20px 0;
    padding: 40px;
    border-radius: 10px;
    max-width: 600px;
    transform: translateX(-10%);
    transition: transform 0.6s;
    ${DesktopCardInRowWrapper}:hover & {
      transform: translateX(-15%);
    }
  }
`;

export const RowCardLabel = styled.div`
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  background-color: var(--label-first-color);
  color: var(--text-main-color);
  border-radius: 25px;
  padding: 5px 16px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 16px;
  }
`;

export const CardLabel = styled.div<{ color: string }>`
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  background-color: ${({ color }) => color};
  color: var(--text-main-color);
  border-radius: 25px;
  padding: 5px 16px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 16px;
  }
`;

export const CardTime = styled.p`
  color: var(--inactive-text-color);
  font-size: 10px;
  font-weight: 500;
  margin-top: 20px;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 14px;
  }
`;

export const CardTitle = styled.p`
  color: var(--text-main-color);
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin: 0;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 22px;
    line-height: 22px;
  }
`;

export const CardText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: var(--text-main-color);

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const CardLink = styled(Link)`
  color: var(--text-main-color);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
`;

export const BottomSectionSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
`;

export const StyledCardSymbol = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-main-color);
  text-decoration: none;
  margin: 0 0 0 10px;
`;

export const StyledLinkRow = styled.div`
  display: flex;
`;

export const TechnicalCardsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  padding: 0 10px;

  ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
  }
`;

export const CardWrapper = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  max-width: 280px;

  ${({ theme }) => theme.mediaQueries.medium} {
    max-width: 300px;
  }
`;

export const StyledCardImd = styled.img`
  width: 120%;
  object-fit: cover;
  transition: transform 0.6s;
  border-radius: 6px;

  ${({ theme }) => theme.mediaQueries.medium} {
    ${CardWrapper}:hover & {
      transform: scale(1.03);
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-primary);
  border-radius: 0 0 10px 10px;
  width: 120%;
  height: 300px;
  z-index: 1;
  margin: 0;
  padding: 30px;
  transform: translateY(-30%);

  ${({ theme }) => theme.mediaQueries.medium} {
    padding: 20px;
    width: 320px;
    margin: 0 20px;
    border-radius: 10px;
    transform: translateY(-30%);
    transition: transform 0.6s;

    ${CardWrapper}:hover & {
      transform: translateY(-35%);
    }
  }
`;

export const EventsCardWrapper = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  max-width: 350px;
  margin: 30px 0 0 0;
  padding: 10px;

  ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0;
    margin: 0 100px 0 0;
    max-width: 400px;
  }
`;

export const EventsStyledCardImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 0.6s;
  border-radius: 6px;

  ${({ theme }) => theme.mediaQueries.medium} {
    width: 115%;
    ${EventsCardWrapper}:hover & {
      transform: scale(1.03);
    }
  }
`;

export const EventsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-primary);
  border-radius: 0 0 10px 10px;
  width: 330px;
  height: 220px;
  margin: 0;
  padding: 30px;

  transform: translateY(-5%);

  ${({ theme }) => theme.mediaQueries.medium} {
    width: 420px;
    padding: 30px;
    margin: 0 20px;
    border-radius: 10px;
    transform: translateY(-30%);
    transition: transform 0.6s;

    ${EventsCardWrapper}:hover & {
      transform: translateY(-35%);
    }
  }
`;

export const EventsCardSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.medium} {
    align-items: center;
    flex-direction: row;
    width: 80%;
  }
`;

export const ResourcesSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  padding: 10px;

  ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0;
    margin-top: 0;
    flex-direction: row;
    width: 80%;
  }
`;

export const ResourceCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  ${({ theme }) => theme.mediaQueries.medium} {
    width: 80%;
  }
`;

export const ResourceImgWrapper = styled.div`
  margin-right: 30px;
`;

export const ResourceTextWrapper = styled.div`
  max-width: 300px;
`;

export const ResourceTitle = styled.p`
  color: var(--color-primary);
  font-size: 16px;
  font-weight: 700;
`;

export const ResourceText = styled.p`
  color: var(--color-primary);
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
`;

export const ResourceLinkWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const ResourceLinkText = styled.p`
  color: var(--color-primary);
  font-size: 12px;
  font-weight: 600;
`;

export const ScrollToTopButton = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: 60px;
  right: 60px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  background-color: var(--scroll-button-color);
  color: var(--items-color);
  font-size: 24px;
  font-weight: 600;
  align-items: center;
  border: none;
  border: 1px solid var(--scroll-button-color);
  border-radius: 50%;
  cursor: pointer;
`;
