import * as React from 'react';
import styled from 'styled-components';

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

const Technology = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const techonologies = [android, ios, kotlin, swift, reactivex, firebase, flutter];

export const Technologies = () => (
  <>
    <H2>naše technologie</H2>
    <TechnologiesWrapper>
      {techonologies.map((technology) => (
        <Technology key={technology}>
          <img alt="" src={technology} />
        </Technology>
      ))}
    </TechnologiesWrapper>
  </>
);
