import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

import whyUsImageMobile from '../svg/new/why_codeers_mobile.png';
import whyUsImage from '../svg/new/why_codeers_1.png';
import whyUsImageTwo from '../svg/new/why_codeers_2.png';

import { Description, H2 } from './shared';
import './layout.css';

const ReasonImage = styled.img`
  padding-top: 2rem;
  padding-left: 5%;
  max-width: 400px;
  max-height: 200px;

  @media only screen and (min-width: 1600px) {
    max-width: 600px;
    max-height: 300px;
  }
`;

const ReasonImageTwo = styled.img`
  padding-top: 10%;
  padding-left: 40%;
  max-width: 300px;
  max-height: 400px;

  @media only screen and (min-width: 1600px) {
    max-width: 450px;
    max-height: 600px;
  }
`;

const ReasonTitle = styled.h3`
  margin-top: 2rem;
  font-weight: 400;

  @media only screen and (max-width: 600px) {
    margin-top: 1.5rem;
  }
`;

const WhyUsWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    display: block;

    &:before {
      content: ' ';
      display: block;
      position: sticky;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      opacity: 0.1;
      background-image: url(${whyUsImageMobile});
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
  position: sticky;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
    margin-top: calc(100vh * (-1));
    margin-bottom: 2rem;
    width: calc(100% - 2rem);
    padding: 0 1rem;
  }
`;

const Spacer = styled.div`
  height: 8rem;

  @media only screen and (max-width: 768px) {
    height: 3rem;
  }
`;

const MainReasonInfo = styled.h3`
  font-weight: 400;
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
    <>
      <Spacer />

      <MobileWrapper>
        <WhyUsWrapper>
          <ReasonsWrapper>
            <H2 style={{ marginTop: '2rem' }}>{t('proč zvolit codeers')}</H2>
            <MainReasonInfo>
              {t('Jsme zkušený tým vývojářů a designérů. Specializujeme se na mobilní aplikace.')}
            </MainReasonInfo>
            {getWhyUsData(t).map((step) => (
              <div key={step.title}>
                <ReasonTitle>{step.title}</ReasonTitle>
                <Description>{step.description}</Description>
              </div>
            ))}
          </ReasonsWrapper>
          <ImageWrapper>
            <ReasonImage src={whyUsImage} />
            <ReasonImageTwo src={whyUsImageTwo} />
          </ImageWrapper>
        </WhyUsWrapper>
      </MobileWrapper>
    </>
  );
};
