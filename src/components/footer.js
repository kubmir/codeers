import * as React from 'react';

import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin-top: 220px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    margin-top: 100px;
  }
`;

const CopyrightMessage = styled.p`
  color: #1c1b17;
  font-size: 1rem;
  font-weight: 700;
`;

export const Footer = () => (
  <FooterWrapper>
    <CopyrightMessage>&copy; 2021 codeers</CopyrightMessage>
  </FooterWrapper>
);
