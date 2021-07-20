import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../svg/codeers-logo.svg';
import './layout.css';
import '@fontsource/red-hat-display';

const LogoWrapper = styled.div`
  max-width: 400px;
  height: 60px;
  padding: 30px 48px;
  padding-left: 0;

  @media only screen and (max-width: 600px) {
    padding: 6px 24px;
    padding-left: 0;
  }
`;
const Logo = styled.img`
  height: 60px;
  margin: 0;

  @media only screen and (max-width: 600px) {
    height: 24px;
  }
`;

const Layout = ({ children }) => {
  return (
    <body>
      <a href="https://codeers.cz" title="Codeers">
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
      </a>
      <main>{children}</main>
    </body>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
