import * as React from 'react';
import styled from 'styled-components';

import howWeWorkImage from '../svg/new/how.png';

import { Description, H2 } from './shared';
import './layout.css';
import { useTranslation } from 'react-i18next';

const HowWeWorkImage = styled.img`
  position: sticky;
  top: 120px;
  right: 0;
  height: calc(100vh - 120px);
  z-index: -1;
`;

const StepTitle = styled.h3`
  margin-top: 2rem;
  line-height: 2.5rem;
  font-weight: 700;

  &:before {
    content: '';
    position: absolute;
    top: 3.25rem;
    left: calc(-2.5rem - 5px);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border: ${(props) => (props.isActive ? '4px solid #E8C81D' : '4px solid #C4C4C4')};
    border-radius: 50%;
    background: #fff;
    transition: border 0.4s ease-in;

    @media only screen and (max-width: 600px) {
      top: 2.5rem;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 1.5rem;
    line-height: 32px;
  }
`;

const HowWeWorkWrapper = styled.div`
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
      background-image: url(${howWeWorkImage});
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
  width: 40%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StepsWrapper = styled.div`
  width: 60%;
  padding: 0 3rem 4rem 3rem;

  @media only screen and (max-width: 768px) {
    /* Ugly way to enforce right positioning of text over sticky image */
    margin-top: calc((100vh - 100px) * (-1));
    width: calc(100% - 2rem);
    padding: 0 1rem;
  }
`;

const Line = styled.div`
  margin-top: 3.25rem;
  width: 4px;
  background: ${(props) => (props.isActive ? '#E8C81D' : '#C4C4C4')};
  transition: background 0.4s ease-in;

  @media only screen and (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;

const StepWrapper = styled.div`
  display: flex;
`;

const StepInfoWrapper = styled.div`
  margin-left: 2rem;
  width: 70%;
  position: relative;
`;

const getStepsData = (t) => [
  {
    title: t('Úvodní schůzka'),
    description: t(
      'Nezávazně nás kontaktujte a sdělte nám svoji představu. Pokud ji nemáte ucelenou, namísto dlouhých debat uspořádáme produktový workshop a společně najdeme odpovědi k otázkám: “Proč chcete mobilní aplikaci?”, “Kdo ji bude používat?”, “Jaký problém bude řešit?” či “Jaké technologie preferujete?”.',
    ),
  },
  {
    title: t('Analýza a UX'),
    description: t(
      'Když víme co a pro koho vytváříme, nic nám nebrání pustit se do průzkumu trhu, analýzy konkurence a zmapování potřeb cílových uživatelů. Na základě toho vytvoříme návrhy a prototypy s ohledem na uživatelský zážitek. Každý návrh na uživatelích otestujeme a k vám se dostane finální wireframe, ze kterého si utvoříte představu o výsledné aplikaci.',
    ),
  },
  {
    title: t('Design'),
    description: t(
      'Po odsouhlasení wireframu máte jasnou představu o tom, jak bude aplikace fungovat. Neméně důležitý je ale i její vzhled. Na řadu tedy přichází grafický návrh, který s vámi budeme řešit, dokud nebudete s grafickou stránkou spokojeni. A protože respektujeme guidelines pro jednotlivé platformy, tak jsou naše aplikace nejen hezké na pohled, ale i intuitivní pro jejich uživatele při ovládání.',
    ),
  },
  {
    title: t('Vývoj'),
    description: t(
      'V zadání máme jasno a naši vývojáři se mohou pustit do samotné realizace. Pracujeme iterativně a v průběhu celého vývoje s vámi budeme pravidelně v kontaktu, ať máte všechno pod kontrolou. Aplikace tvoříme nativně pro Android a iOS, nebo multriplatformě pomocí Flutter. Vždy však s ohledem na nejnovější trendy a technologie.',
    ),
  },
  {
    title: t('Testování'),
    description: t(
      'Aplikace je skoro hotová, je ale třeba ji ještě řádně otestovat. U nás se vždy najde někdo, kdo aplikaci dokáže rozbít. A dokud nejsme s kvalitou spokojeni, tak práce vývojářů nekončí.',
    ),
  },
  {
    title: t('Vydání'),
    description: t(
      'Hotovou aplikaci zveřejníme v obchodech Google Play a App Store. Dostane se tak přímo k vašim zákazníkům. Zveřejnit ji ale můžeme i interně v rámci vaší firmy jen pro vaše zaměstnance. V obou případech se o všechno postaráme za vás.',
    ),
  },
  {
    title: t('Podpora, růst a optimalizace'),
    description: t(
      'Na úspěšnou spolupráci můžeme navázat dalšími kroky, které by aplikaci ještě vylepšily, či napomohly k jejímu růstu a optimalizaci. Zároveň se postaráme i o to, aby aplikace stále fungovala jak má.',
    ),
  },
];

const HowWeWork = () => {
  const { t } = useTranslation();
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  React.useLayoutEffect(() => {
    const decideActiveStep = () => {
      const steps = document.getElementById('steps');
      const stepsHeadings = steps.querySelectorAll('h3');
      const middleOfViewport = window.innerHeight / 2;
      const currentStepHeadingPosition = stepsHeadings[currentStepIndex].getBoundingClientRect().top;

      if (currentStepIndex === 0) {
        const nextStepHeadingPosition = stepsHeadings[currentStepIndex + 1].getBoundingClientRect().top;
        const newIndex =
          Math.abs(currentStepHeadingPosition - middleOfViewport) < Math.abs(nextStepHeadingPosition - middleOfViewport)
            ? currentStepIndex
            : currentStepIndex + 1;

        return setCurrentStepIndex(newIndex);
      }

      if (currentStepIndex === stepsHeadings.length - 1) {
        const previousStepHeadingPosition = stepsHeadings[currentStepIndex - 1].getBoundingClientRect().top;
        const newIndex =
          Math.abs(currentStepHeadingPosition - middleOfViewport) <
          Math.abs(previousStepHeadingPosition - middleOfViewport)
            ? currentStepIndex
            : currentStepIndex - 1;

        return setCurrentStepIndex(newIndex);
      }

      const nextStepHeadingPosition = stepsHeadings[currentStepIndex + 1].getBoundingClientRect().top;
      const previousStepHeadingPosition = stepsHeadings[currentStepIndex - 1].getBoundingClientRect().top;
      const betterPositionrOfNeighbours =
        Math.abs(nextStepHeadingPosition - middleOfViewport) < Math.abs(previousStepHeadingPosition - middleOfViewport)
          ? nextStepHeadingPosition
          : previousStepHeadingPosition;

      const newIndex =
        Math.abs(currentStepHeadingPosition - middleOfViewport) <
        Math.abs(betterPositionrOfNeighbours - middleOfViewport)
          ? currentStepIndex
          : betterPositionrOfNeighbours === previousStepHeadingPosition
          ? currentStepIndex - 1
          : currentStepIndex + 1;
      setCurrentStepIndex(newIndex);
    };

    document.addEventListener('scroll', decideActiveStep);

    return () => document.removeEventListener('scroll', decideActiveStep);
  }, [currentStepIndex]);

  return (
    <MobileWrapper>
      <HowWeWorkWrapper>
        <ImageWrapper>
          <HowWeWorkImage src={howWeWorkImage} />
        </ImageWrapper>
        <StepsWrapper id="steps">
          <H2 style={{ marginTop: '2rem' }}>{t('jak pracujeme')}</H2>
          {getStepsData(t).map((step, index) => (
            <StepWrapper key={step.title}>
              <Line isActive={index <= currentStepIndex} />
              <StepInfoWrapper>
                <StepTitle isActive={index <= currentStepIndex}>{step.title}</StepTitle>
                <Description>{step.description}</Description>
              </StepInfoWrapper>
            </StepWrapper>
          ))}
        </StepsWrapper>
      </HowWeWorkWrapper>
    </MobileWrapper>
  );
};

export default HowWeWork;
