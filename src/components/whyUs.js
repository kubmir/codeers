import * as React from 'react';
import styled from 'styled-components';

import development from '../svg/development.svg';
import ideas from '../svg/ideas.svg';
import improvement from '../svg/improvement.svg';

import { H2 } from './shared';
import './layout.css';

const ReasonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const ReasonImage = styled.img`
  margin: 0 auto;
`;

const ReasonImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 48px auto;
`;

const ReasonTitle = styled.p`
  font-size: 36px;
  text-align: center;
  margin-top: 64px;
  line-height: 46px;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin-top: 36px;
    line-height: 32px
  }
`;

const ReasonDescription = styled.p`
  font-size: 16px;
  text-align: center;
`;

const Reason = styled.div`
  width: 30%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const whyUsData = [
  {
    image: ideas,
    title: 'vytváření nových řešení od zadání po nasazení',
    description: 'Máte nápad, ale nemáte prostor či dovednosti na jeho realizaci? Provedeme vás celým procesem - od zadání, přes implementaci, až po nasazení a provoz aplikace.',
  },
  {
    image: improvement,
    title: 'vylepšení vašeho současného produktu',
    description:
      'Máte hotovou či rozpracovanou aplikaci, ale nenaplňuje funkčností či designem očekávání? Provedeme analýzu stávajícího řešení, navrhneme, jak jej dostat na vyšší úroveň a postaráme se o implementaci.',
  },
  {
    image: development,
    title: 'pomůžeme vašemu týmu',
    description:
      'Jste ve slepé uličce a nevíte si rady s vývojem aplikace? Chybí vám znalosti a zkušenosti? Ocenili byste pomoc s definicí zadání či organizací práce? Dokážeme vaše projekty a procesy dát zase do chodu a pomoci vám s růstem.',
  },
];

const WhyUs = () => {
  return (
    <>
      <H2>proč zvolit codeers</H2>
      <ReasonsContainer>
        {whyUsData.map((item) => (
          <Reason key={item.title}>
            <ReasonImageWrapper>
              <ReasonImage src={item.image} />
            </ReasonImageWrapper>
            <ReasonTitle>{item.title}</ReasonTitle>
            <ReasonDescription>{item.description}</ReasonDescription>
          </Reason>
        ))}
      </ReasonsContainer>
    </>
  );
};

export default WhyUs;
