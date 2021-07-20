import * as React from 'react';
import styled from 'styled-components';

import design from '../svg/design.svg';
import optimization from '../svg/optimization.svg';
import strategy from '../svg/strategy.svg';

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
  margin: 16px auto;
`;

const ReasonTitle = styled.h5`
  font-size: 24px;
  text-align: center;
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
    image: design,
    title: 'Vytváření nových řešení od zadání po nasazení',
    description: 'Máte nápad, ale nemáte prostor či dovednosti na jeho realizaci? Provedeme Vás celým tímto procesem.',
  },
  {
    image: strategy,
    title: 'Vylepšení vašeho současného produktu',
    description:
      'Máte hotovou či rozpracovanou aplikaci, ale nenaplňuje funkčností či designem vaše očekávání? Zanalyzujeme stávající řešení, navrhneme jak jej dostat na vyšší úroveň a v případě zájmu se postaráme i o samotnou implementaci.',
  },
  {
    image: optimization,
    title: 'Pomůžeme vašemu týmu',
    description:
      'Jste ve slepé uličce a nevíte si rady s vývojem aplikace? Chybí vám znalosti a zkušenosti v oblasti technologií? Rádi byste si vyzkoušeli nové funkce, ale nevíte jak na to? Chcete pomoci s definicí produktu? Nevíte si rady s organizací vývoje a chcete se dozvědět více o tom, jak v praxi fungovat agilně? Dokážeme vaše projekty či procesy dát zase do chodu a pomoci vám s růstem.',
  },
];

const WhyUs = () => {
  return (
    <>
      <H2>Proč zvolit nás</H2>
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
