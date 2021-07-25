import * as React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  height: 160px;
  background-color: #303030;
  margin: 64px -54px 0px -54px;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin: 32px -16px 0px -16px;
  }
`;

const CopyrightMessage = styled.p`
  color: #ffffff;
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <CopyrightMessage>&copy; 2021 Codeers</CopyrightMessage>
    </FooterWrapper>
  );
};

export default Footer;
