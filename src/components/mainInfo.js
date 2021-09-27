import * as React from 'react';
import styled from 'styled-components';
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
  margin-left: 10%;

  @media only screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 42px;
  }

  @media only screen and (max-width: 330px) {
    margin-top: 32px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 120px);
  background: linear-gradient(180.06deg, #8d8d8b 22.87%, #646469 99.95%);
`;

const SmallHeading = styled.span`
  font-size: 32px;
`;

const TitleImage = styled.img``;

const HeadingWrapper = styled.div`
  flex-grow: 1;
`;

const MainInfo = () => (
  <Wrapper>
    <HeadingWrapper>
      <MainHeading>
        mobilní aplikace
        <br />
        velké věci
        <br />
        <SmallHeading>na malém prostoru</SmallHeading>
      </MainHeading>
    </HeadingWrapper>
    <TitleImage src={titleImage} />
  </Wrapper>
);

export default MainInfo;
