import * as React from 'react';
import styled from 'styled-components';

import { H2 } from './shared';

import notino from '../svg/new/notino.jpg';
import mm from '../svg/new/mm.png';
import { SectionWithSpaceAround } from './shared';

import './layout.css';

const ReferenceImage = styled.img`
  width: 60%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const ReferenceTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const ReferenceDescription = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const LeftReferenceInfoWrapper = styled.div`
  position: relative;
  display: flex;
  width: 40%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  height: 100%;
  width: 120%;
  margin-left: 100px;

  @media only screen and (max-width: 600px) {
    position: relative;
    top: auto;
    margin-left: 0.5rem;
    width: 100%;
  }
`;

const ReferenceContainer = styled.div`
  display: flex;
  padding-top: ${(props) => (props.withTopPadding ? '2rem' : '0')};

  background-color: ${(props) => (props.withDesktopBackground ? '#F7F7F7' : 'transparent')};

  @media only screen and (max-width: 600px) {
    flex-direction: ${(props) => (props.reverseMobileOrder ? 'column' : 'column-reverse')};
    background-color: #F7F7F7;
    padding-top: ${(props) => (props.withTopPadding ? '1rem' : '0')};
  }
`;

const References = () => {
  return (
    <>
      <SectionWithSpaceAround>
        <H2>umíme přinést výsledky</H2>
      </SectionWithSpaceAround>
      <div>
        <ReferenceContainer withDesktopBackground={true} reverseMobileOrder={true}>
          <LeftReferenceInfoWrapper>
            <TextWrapper>
              <ReferenceTitle>Notino - parfémy a kosmetika</ReferenceTitle>
              <ReferenceDescription>
                E-shop aplikace pro největší obchod s kosmetikou ve střední Evropě.
              </ReferenceDescription>
            </TextWrapper>
          </LeftReferenceInfoWrapper>
          <ReferenceImage src={notino} />
        </ReferenceContainer>

        <ReferenceContainer withTopPadding={true}>
          <ReferenceImage src={mm} />
          <SectionWithSpaceAround>
            <ReferenceTitle>M&amp;M - Statistiky</ReferenceTitle>
            <ReferenceDescription>
              Statistiky prodeje nemovitostí určené pro vedení společnosti a makléře.
            </ReferenceDescription>
          </SectionWithSpaceAround>
        </ReferenceContainer>
      </div>
    </>
  );
};

export default References;
