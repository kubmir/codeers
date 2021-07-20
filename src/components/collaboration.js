import * as React from 'react';
import styled from 'styled-components';

import { H2, ItemsWrapper } from './shared';

import './layout.css';

const collaborationSteps = [
  {
    description:
      'Nezávazně nás kontaktujte a sdělte nám svoji představu. Pokud ji nemáte ucelenou, namísto dlouhých debat uspořádáme produktový workshop a jednotlivé nápady vyzkoušíme rovnou v praxi.',
  },
  {
    description:
      'Smluvené požadavky rozpracujeme v analýze, abychom představy dali transparentně na papír a sjednotili se.',
  },
  {
    description:
      'Začneme s iterativním vývojem, v průběhu kterého s vámi budeme pravidelně v kontaktu a ověříme si, že se věci vyvíjí správným směrem.',
  },
  {
    description:
      'Hotový produkt vydáme buď do obchodu nebo interně v rámci Vaší firmy a domluvíme se na dalších možnostech spolupráce, které by produkt ještě vylepšily, či napomohly k jeho růstu a optimalizaci.',
  },
];

const CollaborationItem = styled.div`
  padding: 35px 30px;
  background: #fafafb;
  border-style: solid;
  border-width: 3px;
  border-color: #fafafb;
  border-radius: 20px;
  box-shadow: none;

  @media only screen and (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

const CollaborationItemDescription = styled.span`
  font-weight: 600;
`;

const Collaboration = () => {
  return (
    <>
      <H2>Jak bude vypadat spolupráce?</H2>
      <ItemsWrapper>
        {collaborationSteps.map((step, index) => (
          <CollaborationItem key={index}>
            <CollaborationItemDescription>{step.description}</CollaborationItemDescription>
          </CollaborationItem>
        ))}
      </ItemsWrapper>
    </>
  );
};

export default Collaboration;
