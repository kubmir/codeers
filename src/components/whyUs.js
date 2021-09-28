import * as React from 'react';
import styled from 'styled-components';

import whyUsImage from '../svg/new/why.png';

import { H2 } from './shared';
import './layout.css';

const ReasonImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: -1;
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
  position: relative;
  margin: 8rem 0;

  @media only screen and (max-width: 768px) {
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: ${props => props.mobileTopPosition}px;
      width: 100%;
      height: calc(100vh - 100px);
      opacity: 0.1;
      background-image: url(${whyUsImage});
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -10;
    }
    padding: 2rem 0;
    margin: 3rem 0;
  }
`;

const MainReasonInfo = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 10vh 0;
  line-height: 2.5rem;
`;

const MobileWrapper = styled.div`
  overflow: scroll;

  @media only screen and (max-width: 768px) {
    position: relative;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  height: calc(100vh - 120px);

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ReasonsWrapper = styled.div`
  width: 60%;
  padding: 0 3rem 4rem 3rem;

  @media only screen and (max-width: 768px) {
    width: calc(100% - 2rem);
    padding: 0 1rem;
  }
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
  const [topPositionOfImage, setTopPositionOfImage] = React.useState(0);
  const [topPositionOfImageMobile, setTopPositionOfImageMobile] = React.useState(0);

  React.useLayoutEffect(() => {
    const calculateImageTopPosition = () => {
      const mobileScreenHeight = window.innerHeight - 100;

      const whyUsWrapperElement = document.getElementById('whyUsWrapper');
      const imageWrapper = document.getElementById('imageWrapper');

      const whyUsWrapperHeight = whyUsWrapperElement.clientHeight;
      const imageWrapperHeight = imageWrapper.clientHeight;

      const maxTopShift = whyUsWrapperHeight > imageWrapperHeight ? whyUsWrapperHeight - imageWrapperHeight : 0;
      const currentShift = (whyUsWrapperElement.getBoundingClientRect().top * -1) + 120;
      const newTopPosition = currentShift > maxTopShift ? maxTopShift : currentShift;

      const maxTopMobileShift = whyUsWrapperHeight > mobileScreenHeight ? whyUsWrapperHeight - mobileScreenHeight : 0;
      const currentMobileShift = whyUsWrapperElement.getBoundingClientRect().top * -1 + 100;
      const newTopMobilePosition = currentMobileShift > maxTopMobileShift ? maxTopMobileShift : currentMobileShift;

      setTopPositionOfImage(newTopPosition < 0 ? 0 : newTopPosition);
      setTopPositionOfImageMobile(newTopMobilePosition < 0 ? 0 : newTopMobilePosition);
    };

    document.addEventListener('scroll', calculateImageTopPosition);

    return () => {
      document.removeEventListener('scroll', calculateImageTopPosition);
    }
  }, []);

  return (
    <MobileWrapper>
      <WhyUsWrapper id="whyUsWrapper" mobileTopPosition={topPositionOfImageMobile}>
        <ReasonsWrapper>
          <H2 style={{ marginTop: '2rem' }}>proč zvolit codeers</H2>
          <MainReasonInfo>Jsme zkušený tým vývojářů a designérů. Specializuje se na mobilní aplikace.</MainReasonInfo>
          {whyUsData.map((step) => (
            <div key={step.title}>
              <ReasonTitle>{step.title}</ReasonTitle>
              <ReasonDescription>{step.description}</ReasonDescription>
            </div>
          ))}
        </ReasonsWrapper>
        <ImageWrapper id="imageWrapper" style={{ top: topPositionOfImage}}>
          <ReasonImage src={whyUsImage} />
        </ImageWrapper>
      </WhyUsWrapper>
    </MobileWrapper>
  );
};

export default WhyUs;
