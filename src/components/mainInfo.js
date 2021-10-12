import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

import { fadeIn } from '../css/animations';
import titleImage from '../svg/new/top.jpeg';

import './layout.css';

const MainHeading = styled.h1`
  position: absolute;
  bottom: 50px;
  color: white;
  font-size: 64px;
  font-weight: 400;
  line-height: 86px;
  text-transform: uppercase;
  animation-name: ${fadeIn};
  animation-duration: 4000ms;
  margin-left: 2rem;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media only screen and (max-width: 330px) {
    font-size: 1.75rem;
    margin-top: 1rem;
  }

  @media only screen and (min-width: 1035px) {
    margin-left: 0;
  }
`;

const BackgroundProvider = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 120px);
  background: #0b0b0b;
  position: relative;
`;

const Wrapper = styled.div`
  z-index: 99;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 1035px) {
    width: 1035px;
    padding: 0;
  }
`;

const SmallHeading = styled.span`
  font-size: 2rem;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const HeadingWrapper = styled.div`
  flex-grow: 1;
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  height: calc(100vh - 120px);
`;

const Image = styled.img`
  height: calc(100vh - 120px);

  @media only screen and (max-width: 600px) {
    opacity: 0.25;
  }
`;

export const MainInfo = () => {
  const { t } = useTranslation();

  return (
    <BackgroundProvider>
      <Wrapper>
        <HeadingWrapper>
          <MainHeading>
            {t('mobilní aplikace')}
            <br />
            {t('velké věci')}
            <br />
            <SmallHeading>{t('na malém prostoru')}</SmallHeading>
          </MainHeading>
        </HeadingWrapper>
      </Wrapper>

      <ImageWrapper>
        <Image alt="Codeers" src={titleImage} />
      </ImageWrapper>
    </BackgroundProvider>
  );
};
