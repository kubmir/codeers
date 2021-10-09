import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

import { fadeIn } from '../css/animations';
import titleImage from '../svg/new/top.png';

import './layout.css';

const MainHeading = styled.h1`
  position: absolute;
  bottom: 50px;
  color: white;
  font-size: 64px;
  font-weight: 400;
  line-height: 86px;
  text-transform: uppercase;
  margin-left: 4rem;
  animation-name: ${fadeIn};
  animation-duration: 4000ms;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media only screen and (max-width: 330px) {
    font-size: 1.75rem;
    margin-top: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 120px);
  background: linear-gradient(180.06deg, #8d8d8b 22.87%, #646469 99.95%);
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

export const MainInfo = () => {
  const { t } = useTranslation();

  return (
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
      <img alt="Codeers" src={titleImage} />
    </Wrapper>
  );
};

