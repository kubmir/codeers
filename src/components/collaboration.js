import * as React from 'react';
import styled from 'styled-components';

import { H2 } from './shared';

import howWeDoIt from '../svg/how-we-do-it.svg';
import './layout.css';

const collaborationSteps = [
  {
    title: 'naplánujeme schůzku',
    description:
      'Nezávazně nás kontaktujte a sdělte nám svoji představu. Pokud ji nemáte ucelenou, namísto dlouhých debat uspořádáme produktový workshop a jednotlivé nápady vyzkoušíme rovnou v praxi.',
  },
  {
    title: 'analýza',
    description:
      'Smluvené požadavky rozpracujeme v analýze, abychom představy dali transparentně na papír a sjednotili se.',
  },
  {
    title: 'realizace',
    description:
      'Začneme s iterativním vývojem, v průběhu kterého s vámi budeme pravidelně v kontaktu a ověříme si, že se věci vyvíjí správným směrem.',
  },
  {
    title: 'odevzdání',
    description:
      'Hotový produkt vydáme buď do obchodu nebo interně v rámci Vaší firmy a domluvíme se na dalších možnostech spolupráce, které by produkt ještě vylepšily, či napomohly k jeho růstu a optimalizaci.',
  },
];

const CollaborationItemTitle = styled.p`
  font-size: 36px;
  line-height: 46px;
  margin-bottom: 18px;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 8px;
  }
`;

const CollaborationItem = styled.div`
  margin: 40px 0px 18px 100px;

  @media only screen and (max-width: 780px) {
    margin: 32px 0px 8px 0px;
  }
`;

const CollaborationItemDescription = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const CollaborationWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

const HowWeDoItImage = styled.img`
  @media only screen and (max-width: 780px) {
    max-width: 90%;
    margin: 0 auto 32px auto;
  }
`;

const Collaboration = () => {
  return (
    <>
      <H2>jak bude vypadat spolupráce</H2>
      <CollaborationWrapper>
        <HowWeDoItImage src={howWeDoIt} />
        <div>
          {collaborationSteps.map((step, index) => (
            <CollaborationItem key={index}>
              <CollaborationItemTitle>{step.title}</CollaborationItemTitle>
              <CollaborationItemDescription>{step.description}</CollaborationItemDescription>
            </CollaborationItem>
          ))}
        </div>
      </CollaborationWrapper>
    </>
  );
};

export default Collaboration;
