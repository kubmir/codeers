import * as React from 'react';
import styled from 'styled-components';

import howWeWorkImage from '../svg/new/how.png';

import { H2 } from './shared';
import './layout.css';

const HowWeWorkImage = styled.img`
  position: sticky;
  top: 120px;
  right: 0;
  height: calc(100vh - 120px);
  z-index: -1;
`;

const StepTitle = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
  line-height: 46px;
  font-weight: 700;

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    margin-top: 1.5rem;
    line-height: 32px;
  }
`;

const StepDescription = styled.p`
  font-size: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const HowWeWorkWrapper = styled.div`
  display: flex;
  margin: 8rem 0;

  @media only screen and (max-width: 768px) {
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: ${(props) => props.mobileTopPosition}px;
      width: 100%;
      height: calc(100vh - 100px);
      opacity: 0.1;
      background-image: url(${howWeWorkImage});
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -10;
    }
    padding: 2rem 0;
    margin: 3rem 0;
  }
`;

const MobileWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    position: relative;
  }
`;

const ImageWrapper = styled.div`
  width: 40%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StepsWrapper = styled.div`
  padding: 0 3rem 4rem 3rem;

  @media only screen and (max-width: 768px) {
    width: calc(100% - 2rem);
    padding: 0 1rem;
  }
`;

const StepWrapper = styled.div``;

const stepsData = [
  {
    title: 'Úvodní schůzka',
    description:
      'Nezávazně nás kontaktujte a sdělte nám svoji představu. Pokud ji nemáte ucelenou, namísto dlouhých debat uspořádáme produktový workshop a společně najdeme odpovědi k otázkám: “Proč chcete mobilní aplikaci?”, “Kdo ji bude používat?”, “Jaký problém bude řešit?” či “Jaké technologie preferujete?”.',
  },
  {
    title: 'Analýza a UX',
    description:
      'Když víme co a pro koho vytváříme, nic nám nebrání pustit se do průzkumu trhu, analýzy konkurence a zmapování potřeb cílových uživatelů. Na základě toho vytvoříme návrhy a prototypy s ohledem na uživatelský zážitek. Každý návrh na uživatelích otestujeme a k vám se dostane finální wireframe, ze kterého si utvoříte představu o výsledné aplikaci.',
  },
  {
    title: 'Design',
    description:
      'Po odsouhlasení wireframu máte jasnou představu o tom, jak bude aplikace fungovat. Neméně důležitý je ale i její vzhled. Na řadu tedy přichází grafický návrh, který s vámi budeme řešit, dokud nebudete s grafickou stránkou spokojeni. A protože respektujeme guidelines pro jednotlivé platformy, tak jsou naše aplikace nejen hezké na pohled, ale i intuitivní pro jejich uživatele při ovládání.',
  },
  {
    title: 'Vývoj',
    description:
      'V zadání máme jasno a naši vývojáři se mohou pustit do samotné realizace. Pracujeme iterativně a v průběhu celého vývoje s vámi budeme pravidelně v kontaktu, ať máte všechno pod kontrolou. Aplikace tvoříme nativně pro Android a iOS, nebo multriplatformě pomocí Flutter. Vždy však s ohledem na nejnovější trendy a technologie.',
  },
  {
    title: 'Testování',
    description:
      'Aplikace je skoro hotová, je ale třeba ji ještě řádně otestovat. U nás se vždy najde někdo, kdo aplikaci dokáže rozbít. A dokud nejsme s kvalitou spokojeni, tak práce vývojářů nekončí.',
  },
  {
    title: 'Vydání',
    description:
      'Hotovou aplikaci zveřejníme v obchodech Google Play a App Store. Dostane se tak přímo k vašim zákazníkům. Zveřejnit ji ale můžeme i interně v rámci vaší firmy jen pro vaše zaměstnance. V obou případech se o všechno postaráme za vás.',
  },
  {
    title: 'Podpora, růst a optimalizace',
    description:
      'Na úspěšnou spolupráci můžeme navázat dalšími kroky, které by aplikaci ještě vylepšily, či napomohly k jejímu růstu a optimalizaci. Zároveň se postaráme i o to, aby aplikace stále fungovala jak má.',
  },
];

const HowWeWork = () => {
  const [topPositionOfImageMobile, setTopPositionOfImageMobile] = React.useState(0);

  React.useLayoutEffect(() => {
    const calculateImageTopPosition = () => {
      const mobileScreenHeight = window.innerHeight - 100;

      const howWeWorkElement = document.getElementById('howWeWorkWrapper');

      const howWeWorkWrapperHeight = howWeWorkElement.clientHeight;

      const maxTopMobileShift =
        howWeWorkWrapperHeight > mobileScreenHeight ? howWeWorkWrapperHeight - mobileScreenHeight : 0;
      const currentMobileShift = howWeWorkElement.getBoundingClientRect().top * -1 + 100;
      const newTopMobilePosition = currentMobileShift > maxTopMobileShift ? maxTopMobileShift : currentMobileShift;

      setTopPositionOfImageMobile(newTopMobilePosition < 0 ? 0 : newTopMobilePosition);
    };

    document.addEventListener('scroll', calculateImageTopPosition);

    return () => {
      document.removeEventListener('scroll', calculateImageTopPosition);
    };
  }, []);

  return (
    <MobileWrapper>
      <HowWeWorkWrapper id="howWeWorkWrapper" mobileTopPosition={topPositionOfImageMobile}>
        <ImageWrapper>
          <HowWeWorkImage src={howWeWorkImage} />
        </ImageWrapper>
        <StepsWrapper>
          <H2 style={{ marginTop: '2rem' }}>jak pracujeme</H2>
          {stepsData.map((step) => (
            <StepWrapper key={step.title}>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepWrapper>
          ))}
        </StepsWrapper>
      </HowWeWorkWrapper>
    </MobileWrapper>
  );
};

export default HowWeWork;
