import * as React from 'react';
import styled from 'styled-components';

import './layout.css';

const MainHeading = styled.h1`
  font-size: 46px;
  font-weight: 600;
`;

const MainDescription = styled.p`
  font-weight: 600;
`;
const StartCooperationButton = styled.button``;

const MainInfo = () => {
  const onButtonClick = () =>
    document.getElementById('contactForm').scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <>
      <MainHeading>
        Mobilní aplikace.
        <br />
        Velké věci na malém prostoru.
      </MainHeading>
      <MainDescription>
        Jsme vývojářská a poradenská firma. Specializujeme se na integraci nativních mobilních aplikací do Vašeho
        podnikání.
      </MainDescription>
      <StartCooperationButton onClick={onButtonClick}>Začít Spolupráci</StartCooperationButton>
    </>
  );
};

export default MainInfo;
