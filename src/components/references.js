import * as React from 'react';
import styled from 'styled-components';

import { H2 } from './shared';

import cyan from '../svg/cyan.svg';
import iba from '../svg/iba.svg';
import notino from '../svg/notino.svg';
import mm from '../svg/mm.svg';

import './layout.css';

const FullWidthReferenceImage = styled.img`
  @media only screen and (max-width: 600px) {
    margin: 24px auto;
  }
`;

const ReferencesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: space-between;
  }
`;

const References = () => {
  return (
    <>
      <H2>umíme přinést výsledky</H2>
      <ReferencesWrapper>
        <FullWidthReferenceImage src={notino} />
        <FullWidthReferenceImage src={mm} />
        <FullWidthReferenceImage src={cyan} />
        <FullWidthReferenceImage src={iba} />
      </ReferencesWrapper>
    </>
  );
};

export default References;
