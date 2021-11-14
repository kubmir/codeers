import * as React from 'react';

import { useI18next } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';

const LanguageWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

const Language = styled.div`
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  background-color: ${(props) => (props.active ? '#e8c81d' : '#ffffff')};
`;

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useI18next();

  return (
    <LanguageWrapper>
      <Language onClick={() => changeLanguage('cs')} active={language === 'cs'}>
        CS
      </Language>
      <Language onClick={() => changeLanguage('en')} active={language === 'en'}>
        EN
      </Language>
    </LanguageWrapper>
  );
};
