import * as React from 'react';
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
  background-color: ${(props) => (props.active ? '#e8c81d' : 'transparent')};
`;

export const LanguageSwitcher = () => {
  return (
    <LanguageWrapper>
      <Language active={true}>CS</Language>
      <Language>EN</Language>
    </LanguageWrapper>
  );
};
