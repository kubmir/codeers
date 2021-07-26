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
  color: #000000;
  font-size: 16px;
  background-image: linear-gradient(to bottom, transparent 10px, #e8c81d 10px, #e8c81d 20px, transparent 20px);
  bottom: 48px;

  @media only screen and (max-width: 600px) {
    bottom: 16px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <CopyrightMessage>&copy; 2021 codeers</CopyrightMessage>
    </FooterWrapper>
  );
};

export default Footer;
