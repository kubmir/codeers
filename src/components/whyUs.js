import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

import whyUsImage from '../svg/new/why.png';

import { Description, H2 } from './shared';
import './layout.css';

const ReasonImage = styled.img`
  position: sticky;
  top: 120px;
  right: 0;
  height: calc(100vh - 120px);
  width: 100%;
  z-index: -1;
`;

const ReasonTitle = styled.h3`
  margin-top: 2rem;
  line-height: 2.25rem;
  font-weight: 700;

  @media only screen and (max-width: 600px) {
    margin-top: 1.5rem;
    line-height: 1.5rem;
  }
`;

const WhyUsWrapper = styled.div`
  display: flex;
  margin: 8rem 0;

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 2rem 0;
    margin: 3rem 0;

    &:before {
      content: ' ';
      display: block;
      position: sticky;
      left: 0;
      top: 100px;
      width: 100%;
      height: calc(100vh - 100px);
      opacity: 0.1;
      background-image: url(${whyUsImage});
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -10;
    }
  }
`;

const MobileWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    position: relative;
  }
`;

const ImageWrapper = styled.div`
  width: 55%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ReasonsWrapper = styled.div`
  width: 45%;
  padding: 0 3rem 4rem 3rem;

  @media only screen and (max-width: 768px) {
    /* Ugly way to enforce right positioning of text over sticky image */
    margin-top: calc((100vh - 100px) * (-1));
    margin-bottom: 2rem;
    width: calc(100% - 2rem);
    padding: 0 1rem;
  }
`;

const getWhyUsData = (t) => [
  {
    title: t('sme zkušený a sehraný tým vývojářů a designérů'),
    description: t(
      'Díky tomu máme dobře zavedené procesy a fungující tým. Věříme, že dobře vyvinutá a navržená aplikace může lidem pomoci ve všech oblastech podnikání či každodenního života.',
    ),
  },
  {
    title: t('specializujeme se na mobilní aplikace'),
    description: t(
      'Naší filozofií je být nejlepší v jedné konkrétní oblasti. Proto se specializujeme na mobilní aplikace. Nic jiného neděláme. Díky tomu máme unikátní zkušenosti a výsledky v oblasti e-commerce, omnichannel i maloobchodu.',
    ),
  },
  {
    title: t('tvoříme nová řešení od zadání po nasazení'),
    description: t(
      'Jakýkoliv nápad stojí za zmínku a analýzu. Pokud ale nemáte prostor či dovednosti na jeho realizaci, rádi vás provedeme celým procesem - od zadání, přes implementaci, až po nasazení a provoz aplikace.',
    ),
  },
  {
    title: t('vylepšíme váš současný produkt'),
    description: t(
      'Na každé aplikaci je co vylepšit. Pokud máte hotovou či rozpracovanou aplikaci, ale nenaplňuje funkčností či designem vaše očekávání, provedeme analýzu stávajícího řešení a navrhneme, jak jej dostat na vyšší úroveň.',
    ),
  },
  {
    title: t('pomůžeme vašemu týmu'),
    description: t(
      'Pokud jste se ocitli ve slepé uličce a ocenili byste pomoc s definicí zadání či organizací práce vašeho týmu, dokážeme vaše projekty a procesy dát zase do chodu a pomoci vám s růstem.',
    ),
  },
];

export const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <MobileWrapper>
      <WhyUsWrapper>
        <ReasonsWrapper>
          <H2 style={{ marginTop: '2rem' }}>{t('proč zvolit codeers')}</H2>
          {getWhyUsData(t).map((step) => (
            <div key={step.title}>
              <ReasonTitle>{step.title}</ReasonTitle>
              <Description>{step.description}</Description>
            </div>
          ))}
        </ReasonsWrapper>
        <ImageWrapper>
          <ReasonImage src={whyUsImage} />
        </ImageWrapper>
      </WhyUsWrapper>
    </MobileWrapper>
  );
};
