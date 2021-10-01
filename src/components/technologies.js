import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

import android from '../svg/new/tech/tech-1.svg';
import ios from '../svg/new/tech/tech-2.svg';
import kotlin from '../svg/new/tech/tech-3.svg';
import swift from '../svg/new/tech/tech-4.svg';
import reactivex from '../svg/new/tech/tech-5.svg';
import firebase from '../svg/new/tech/tech-6.svg';
import flutter from '../svg/new/tech/tech-7.svg';
import { H2 } from './shared';

const TechnologiesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;

  @media only screen and (max-width: 780px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row: auto auto;
    grid-column-gap: 10px;
    grid-row-gap: 2rem;
  }
`;

const technologyFadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;

const Technology = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TechnologyImage = styled.img`
  animation-name: ${props => props.inView ? technologyFadeIn : ''};
  animation-duration: 3000ms;
`;

const techonologies = [android, ios, kotlin, swift, reactivex, firebase, flutter];

const TechnologyItem = ({ technology }) => {
  const { ref, inView } = useInView();

  return (
    <Technology ref={ref}>
      <TechnologyImage src={technology} inView={inView} />
    </Technology>
  );
};
export const Technologies = () => (
  <>
    <H2>naše technologie</H2>
    <TechnologiesWrapper>
      {techonologies.map((technology) => (
        <TechnologyItem key={technology} technology={technology} />
      ))}
    </TechnologiesWrapper>
  </>
);
