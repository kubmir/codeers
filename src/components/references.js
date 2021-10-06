import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import styled from 'styled-components';

import { moveFromLeft, moveFromRight } from '../css/animations';
import mm from '../svg/new/mm.png';
import notino from '../svg/new/notino.png';

import { Description, H2, SectionWithSpaceAround } from './shared';

import './layout.css';

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
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <ReferenceContainer ref={ref} withDesktopBackground={true} reverseMobileOrder={true}>
      <LeftReferenceInfoWrapper animation={inView ? moveFromLeft : ''}>
        <TextWrapper>
          <ReferenceTitle>{t('Notino - parfémy a kosmetika')}</ReferenceTitle>
          <ReferenceDescription>
            {t('E-shop aplikace pro největší obchod s kosmetikou ve střední Evropě.')}
          </ReferenceDescription>
        </TextWrapper>
      </LeftReferenceInfoWrapper>
      <ReferenceImage src={notino} animation={inView ? moveFromRight : ''} />
    </ReferenceContainer>
  );
};

const MMReference = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <ReferenceContainer ref={ref} withTopPadding={true}>
      <ReferenceImage src={mm} animation={inView ? moveFromLeft : ''} mobileAnimation={inView ? moveFromRight : ''} />
      <SectionWithSpaceAround animation={inView ? moveFromRight : ''} mobileAnimation={inView ? moveFromLeft : ''}>
        <ReferenceTitle>{t('M&M - Statistiky')}</ReferenceTitle>
        <ReferenceDescription>
          {t('Statistiky prodeje nemovitostí určené pro vedení společnosti a makléře.')}
        </ReferenceDescription>
      </SectionWithSpaceAround>
    </ReferenceContainer>
  );
};

export const References = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionWithSpaceAround>
        <H2>{t('umíme přinést výsledky')}</H2>
      </SectionWithSpaceAround>

      <NotinoReference />

      <MMReference />
    </>
  );
};
