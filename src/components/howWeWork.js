import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

import howWeWorkImage from '../svg/new/how_we_work_1.png';
import howWeWorkImageTwo from '../svg/new/how_we_work_2.png';
import howWeWorkImageMobile from '../svg/new/how_mobile.png';

import { Description, H2, SectionWithSpaceAround } from './shared';
import './layout.css';

const HowWeWorkImage = styled.img`
  max-height: 200px;
  max-width: 300px;
  padding-top: 6rem;

  @media only screen and (min-width: 1768px) {
    max-width: 450px;
    max-height: 300px;
  }
`;

const HowWeWorkImageTwo = styled.img`
  max-height: 175px;
  max-width: 260px;
  padding-left: 5rem;
  padding-top: 10%;

  @media only screen and (min-width: 1768px) {
    max-width: 380px;
    max-height: 250px;
  }
`;

const StepTitle = styled.h3`
  margin-top: 2rem;
  font-weight: 400;

  &:before {
    content: '';
    position: absolute;
    top: 2.75rem;
    left: calc(-2.5rem - 2px);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border: ${(props) => (props.isActive ? '2px solid #E8C81D' : '2px solid #C4C4C4')};
    border-radius: 50%;
    background: #fff;
    transition: border 0.4s ease-in;

    @media only screen and (max-width: 768px) {
      top: 2.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 1.5rem;
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
      top: 0;
      height: 100vh;
      opacity: 1;
      background-image: url(${howWeWorkImageMobile});
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
  width: 40%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StepsWrapper = styled.div`
  width: 60%;
  padding: 0 3rem 4rem 0;

  @media only screen and (max-width: 768px) {
    /* Ugly way to enforce right positioning of text over sticky image */
    margin-top: calc(100vh * (-1));
    margin-bottom: 2rem;
    width: calc(100% - 2rem);
    padding: 0 1rem;
  }
`;

const Line = styled.div`
  margin-top: 3.25rem;
  margin-left: 0.375rem;
  width: 2px;
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

const HowWeWorkSectionWrapper = styled(SectionWithSpaceAround)`
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
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

export const HowWeWork = () => {
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
    <HowWeWorkSectionWrapper>
      <MobileWrapper>
        <HowWeWorkWrapper>
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
          <ImageWrapper>
            <HowWeWorkImage src={howWeWorkImage} />
            <HowWeWorkImageTwo src={howWeWorkImageTwo} />
          </ImageWrapper>
        </HowWeWorkWrapper>
      </MobileWrapper>
    </HowWeWorkSectionWrapper>
  );
};
