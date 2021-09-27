import * as React from 'react';
import styled from 'styled-components';

import whyUsImage from '../svg/new/why.png';

import { H2, SectionWithSpaceAround } from './shared';
import './layout.css';

const ReasonImage = styled.img`
  height: calc(100vh - 120px);
  width: 40%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ReasonTitle = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
  line-height: 46px;
  font-weight: 700;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    margin-top: 1.5rem;
    line-height: 32px;
  }
`;

const ReasonDescription = styled.p`
  font-size: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const WhyUsWrapper = styled.div`
  display: flex;
  margin: 8rem 0;

  @media only screen and (max-width: 600px) {
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: calc(100vh - 120px);
      opacity: 0.1;
      background-image: url(${whyUsImage});
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: cover;
      z-index: -10;
    }
    margin: 3rem 0;
  }
`;

const MainReasonInfo = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 10vh 0;
  line-height: 2.5rem;
`;

const ReasonsContainer = styled.div`
  height: 40vh;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  position: relative;
`;

const whyUsData = [
  {
    title: 'tvoříme nová řešení od zadání po nasazení',
    description:
      'Máte nápad, ale nemáte prostor či dovednosti na jeho realizaci? Provedeme vás celým procesem - od zadání, přes implementaci, až po nasazení a provoz aplikace.',
  },
  {
    title: 'vylepšíme váš současný produkt',
    description:
      'Máte hotovou či rozpracovanou aplikaci, ale nenaplňuje funkčností či designem očekávání? Provedeme analýzu stávajícího řešení, navrhneme, jak jej dostat na vyšší úroveň a postaráme se o implementaci.',
  },
  {
    title: 'pomůžeme vašemu týmu',
    description:
      'Jste ve slepé uličce a nevíte si rady s vývojem aplikace? Chybí vám znalosti a zkušenosti? Ocenili byste pomoc s definicí zadání či organizací práce? Dokážeme vaše projekty a procesy dát zase do chodu a pomoci vám s růstem.',
  },
];

const WhyUs = () => {
  return (
    <MobileWrapper>
      <WhyUsWrapper>
        <SectionWithSpaceAround>
          <H2 style={{ marginTop: '2rem' }}>proč zvolit codeers</H2>
          <MainReasonInfo>Jsme zkušený tým vývojářů a designérů. Specializuje se na mobilní aplikace.</MainReasonInfo>
          <ReasonsContainer>
            {whyUsData.map((step) => (
              <>
                <ReasonTitle>{step.title}</ReasonTitle>
                <ReasonDescription>{step.description}</ReasonDescription>
              </>
            ))}
          </ReasonsContainer>
        </SectionWithSpaceAround>
        <ReasonImage src={whyUsImage} />
      </WhyUsWrapper>
    </MobileWrapper>
  );
};

export default WhyUs;
