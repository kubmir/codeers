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

  @media only screen and (min-width: 1768px) {
    max-width: 768px;
    max-height: 300px;
  }
`;

const ReasonImageTwo = styled.img`
  padding-top: 10%;
  padding-left: 40%;
  max-width: 300px;
  max-height: 400px;

  @media only screen and (min-width: 1768px) {
    max-width: 450px;
    max-height: 768px;
  }
`;

const ReasonTitle = styled.h3`
  margin-top: 2rem;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    margin-top: 1.5rem;
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

const getWhyUsData = (t) => [
  {
    title: t('jsme zku??en?? a sehran?? t??m v??voj?????? a design??r??'),
    description: t(
      'D??ky tomu m??me dob??e zaveden?? procesy a funguj??c?? t??m. V??????me, ??e dob??e vyvinut?? a navr??en?? aplikace m????e lidem pomoci ve v??ech oblastech podnik??n?? ??i ka??dodenn??ho ??ivota.',
    ),
  },
  {
    title: t('specializujeme se na mobiln?? aplikace'),
    description: t(
      'Na???? filozofi?? je b??t nejlep???? v jedn?? konkr??tn?? oblasti. Proto se specializujeme na mobiln?? aplikace. Nic jin??ho ned??l??me. D??ky tomu m??me unik??tn?? zku??enosti a v??sledky v oblasti e-commerce, omnichannel i maloobchodu.',
    ),
  },
  {
    title: t('tvo????me nov?? ??e??en?? od zad??n?? po nasazen??'),
    description: t(
      'Jak??koliv n??pad stoj?? za zm??nku a anal??zu. Pokud ale nem??te prostor ??i dovednosti na jeho realizaci, r??di v??s provedeme cel??m procesem - od zad??n??, p??es implementaci, a?? po nasazen?? a provoz aplikace.',
    ),
  },
  {
    title: t('vylep????me v???? sou??asn?? produkt'),
    description: t(
      'Na ka??d?? aplikaci je co vylep??it. Pokud m??te hotovou ??i rozpracovanou aplikaci, ale nenapl??uje funk??nost?? ??i designem va??e o??ek??v??n??, provedeme anal??zu st??vaj??c??ho ??e??en?? a navrhneme, jak jej dostat na vy?????? ??rove??.',
    ),
  },
  {
    title: t('pom????eme va??emu t??mu'),
    description: t(
      'Pokud jste se ocitli ve slep?? uli??ce a ocenili byste pomoc s definic?? zad??n?? ??i organizac?? pr??ce va??eho t??mu, dok????eme va??e projekty a procesy d??t zase do chodu a pomoci v??m s r??stem.',
    ),
  },
];

export const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <MobileWrapper>
      <WhyUsWrapper>
        <ReasonsWrapper>
          <H2 style={{ marginTop: '2rem' }}>{t('pro?? zvolit codeers')}</H2>
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
  );
};
