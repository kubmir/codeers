import * as React from 'react';
import styled from 'styled-components';

import './layout.css';

const MainHeading = styled.h1`
  font-size: 64px;
  font-weight: 700;
  margin-top: 30vh;
  line-height: 86px;

  @media only screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 42px;
  }

  @media only screen and (max-width: 330px) {
    margin-top: 32px;
  }
`;

const MainDescription = styled.p`
  margin-top: 40px;
  font-size: 34px;
  line-height: 46px;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StartCooperation = styled.p`
  color: #000000;
  font-size: 36px;
  background-image: linear-gradient(to bottom, transparent 15px, #e8c81d 15px, #e8c81d 36px, transparent 36px);
  text-align: center;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 0px;
  cursor: pointer;
  
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin-top: 16px;
  }
`;

const CooperationWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const MainInfo = () => {
  const onButtonClick = () =>
    document.getElementById('contactForm').scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <Wrapper>
      <MainHeading>
        mobilní aplikace
        <br />
        velké věci na malém prostoru
      </MainHeading>
      <MainDescription>
        Jsme vývojářská a poradenská firma. Specializujeme se na integraci mobilních aplikací do všech oblastí podnikání.
      </MainDescription>
      <CooperationWrapper>
        <StartCooperation onClick={onButtonClick}>chci spolupracovat</StartCooperation>
      </CooperationWrapper>
    </Wrapper>
  );
};

export default MainInfo;
