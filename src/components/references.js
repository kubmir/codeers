import * as React from 'react';
import styled from 'styled-components';

import { Description, H2 } from './shared';

import notino from '../svg/new/notino.jpg';
import mm from '../svg/new/mm.png';
import { SectionWithSpaceAround } from './shared';

import './layout.css';
import { useInView } from 'react-intersection-observer';
import { moveFromLeft, moveFromRight } from '../css/animations';

const ReferenceImage = styled.img`
  width: 60%;
  max-height: 32rem;
  animation-name: ${(props) => props.animation};
  animation-duration: 2000ms;

  @media only screen and (max-width: 600px) {
    width: 100%;
    animation-name: ${(props) => props.mobileAnimation || props.animation};
  }
`;

const ReferenceTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const ReferenceDescription = styled(Description)`
  margin-top: 1rem;
`;

const LeftReferenceInfoWrapper = styled.div`
  position: relative;
  display: flex;
  width: 40%;
  animation-name: ${(props) => props.animation};
  animation-duration: 2000ms;

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
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
    width: calc(100% - 2rem);
    flex-direction: ${(props) => (props.reverseMobileOrder ? 'column' : 'column-reverse')};
    background-color: #f7f7f7;
    padding-top: ${(props) => (props.withTopPadding ? '1rem' : '0')};
  }
`;

const NotinoReference = () => {
  const { ref, inView } = useInView();

  return (
    <ReferenceContainer ref={ref} withDesktopBackground={true} reverseMobileOrder={true}>
      <LeftReferenceInfoWrapper animation={inView ? moveFromLeft : ''}>
        <TextWrapper>
          <ReferenceTitle>Notino - parfémy a kosmetika</ReferenceTitle>
          <ReferenceDescription>
            E-shop aplikace pro největší obchod s kosmetikou ve střední Evropě.
          </ReferenceDescription>
        </TextWrapper>
      </LeftReferenceInfoWrapper>
      <ReferenceImage src={notino} animation={inView ? moveFromRight : ''} />
    </ReferenceContainer>
  );
};

const MMReference = () => {
  const { ref, inView } = useInView();

  return (
    <ReferenceContainer ref={ref} withTopPadding={true}>
      <ReferenceImage src={mm} animation={inView ? moveFromLeft : ''} mobileAnimation={inView ? moveFromRight : ''} />
      <SectionWithSpaceAround animation={inView ? moveFromRight : ''} mobileAnimation={inView ? moveFromLeft : ''}>
        <ReferenceTitle>M&amp;M - Statistiky</ReferenceTitle>
        <ReferenceDescription>
          Statistiky prodeje nemovitostí určené pro vedení společnosti a makléře.
        </ReferenceDescription>
      </SectionWithSpaceAround>
    </ReferenceContainer>
  );
};

const References = () => {
  return (
    <>
      <SectionWithSpaceAround>
        <H2>umíme přinést výsledky</H2>
      </SectionWithSpaceAround>

      <NotinoReference />

      <MMReference />
    </>
  );
};

export default References;
