import * as React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin-top: 220px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin-top: 100px;
  }
`;

const CopyrightMessage = styled.p`
  color: #1c1b17;
  font-size: 1rem;
  font-weight: 700;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <CopyrightMessage>&copy; 2021 codeers</CopyrightMessage>
    </FooterWrapper>
  );
};

export default Footer;
