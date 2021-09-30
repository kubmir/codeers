import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../svg/codeers-logo.svg';
import { LanguageSwitcher } from './languageSwitcher';

import './layout.css';

import '@fontsource/red-hat-display';
import '@fontsource/red-hat-text';

const LogoWrapper = styled.div`
  max-width: 400px;
  height: 60px;
  padding: 30px 48px;
  padding-left: 0;

  @media only screen and (max-width: 600px) {
    padding: 20px 0px;
    padding-left: 0;
  }
`;

const Logo = styled.img`
  height: 60px;
  margin: 0;

  @media only screen and (max-width: 600px) {
    height: 48px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  top: 0;
  z-index: 99;
  padding: 0 3.5rem;
  max-width: 1380px;

  @media only screen and (min-width: 1380px) {
    padding: 0;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 1.5rem;
  }
`;

const ContactLink = styled.a`
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
  color: #000000;
  font-size: 16px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
        <HeaderWrapper>
          <a href="https://codeers.cz" title="Codeers">
            <LogoWrapper>
              <Logo src={logo} />
            </LogoWrapper>
          </a>
          <ContactLink href="#contactForm">Kontakt</ContactLink>
          <LanguageSwitcher />
        </HeaderWrapper>

      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
