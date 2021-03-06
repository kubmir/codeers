import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

import { fadeIn } from '../css/animations';
import titleImage from '../svg/new/top.jpeg';
import logo from '../svg/new/banner.svg';

import { LanguageSwitcher } from './languageSwitcher';
import './layout.css';

const MainHeading = styled.h1`
  position: absolute;
  bottom: 50px;
  color: white;
  font-size: 48px;
  font-weight: 400;
  line-height: 64px;
  text-transform: uppercase;
  animation-name: ${fadeIn};
  animation-duration: 4000ms;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media only screen and (max-width: 330px) {
    font-size: 1.75rem;
    margin-top: 1rem;
  }

  @media only screen and (min-width: 1440px) {
    margin-left: 0;
  }
`;

const BackgroundProvider = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #0b0b0b;
  position: relative;
`;

const Wrapper = styled.div`
  z-index: 99;
  width: 100%;
  margin: 0 auto;
  padding: 3.5rem;

  @media only screen and (min-width: 1440px) {
    width: calc(1440px - 7rem);
    padding: 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const SmallHeading = styled.span`
  font-size: 1.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const HeadingWrapper = styled.div`
  flex-grow: 1;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100vh;
  max-width: 100vw;
`;

const Image = styled.img`
  height: 100%;
  max-width: 100vw;

  @media only screen and (max-width: 768px) {
    width: 100%;
    opacity: 0.25;
  }
`;

const LogoWrapper = styled.div`
  max-width: 400px;
  height: 60px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const LanguageSwitcherWrapper = styled.div`
  height: 60px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Logo = styled.img`
  height: 60px;
  margin: 0;

  @media only screen and (max-width: 768px) {
    height: 48px;
  }
`;

const TopLineWrapper = styled.div`
  display: flex;
  padding-top: 2rem;
  justify-content: space-between;
`;

export const MainInfo = () => {
  const { t } = useTranslation();

  return (
    <BackgroundProvider>
      <Wrapper>
        <TopLineWrapper>
          <LogoWrapper>
            <a href="https://codeers.cz" title="Codeers">
              <Logo src={logo} />
            </a>
          </LogoWrapper>

          <LanguageSwitcherWrapper>
            <LanguageSwitcher />
          </LanguageSwitcherWrapper>
        </TopLineWrapper>

        <HeadingWrapper>
          <MainHeading>
            {t('mobiln?? aplikace')}
            <br />
            {t('velk?? v??ci')}
            <br />
            <SmallHeading>{t('na mal??m prostoru')}</SmallHeading>
          </MainHeading>
        </HeadingWrapper>
      </Wrapper>

      <ImageWrapper>
        <Image alt="Codeers" src={titleImage} />
      </ImageWrapper>
    </BackgroundProvider>
  );
};
