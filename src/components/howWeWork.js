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
  padding-top: 15%;

  @media only screen and (min-width: 1768px) {
    max-width: 450px;
    max-height: 300px;
  }
`;

const HowWeWorkImageTwo = styled.img`
  max-height: 225px;
  max-width: 320px;
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
    title: t('??vodn?? sch??zka'),
    description: t(
      'Nez??vazn?? n??s kontaktujte a sd??lte n??m svoji p??edstavu. Pokud ji nem??te ucelenou, nam??sto dlouh??ch debat uspo????d??me produktov?? workshop a spole??n?? najdeme odpov??di k ot??zk??m: ???Pro?? chcete mobiln?? aplikaci????, ???Kdo ji bude pou????vat????, ???Jak?? probl??m bude ??e??it???? ??i ???Jak?? technologie preferujete????.',
    ),
  },
  {
    title: t('Anal??za a UX'),
    description: t(
      'Kdy?? v??me co a pro koho vytv??????me, nic n??m nebr??n?? pustit se do pr??zkumu trhu, anal??zy konkurence a zmapov??n?? pot??eb c??lov??ch u??ivatel??. Na z??klad?? toho vytvo????me n??vrhy a prototypy s ohledem na u??ivatelsk?? z????itek. Ka??d?? n??vrh na u??ivatel??ch otestujeme a k v??m se dostane fin??ln?? wireframe, ze kter??ho si utvo????te p??edstavu o v??sledn?? aplikaci.',
    ),
  },
  {
    title: t('Design'),
    description: t(
      'Po odsouhlasen?? wireframu m??te jasnou p??edstavu o tom, jak bude aplikace fungovat. Nem??n?? d??le??it?? je ale i jej?? vzhled. Na ??adu tedy p??ich??z?? grafick?? n??vrh, kter?? s v??mi budeme ??e??it, dokud nebudete s grafickou str??nkou spokojeni. A proto??e respektujeme guidelines pro jednotliv?? platformy, tak jsou na??e aplikace nejen hezk?? na pohled, ale i intuitivn?? pro jejich u??ivatele p??i ovl??d??n??.',
    ),
  },
  {
    title: t('V??voj'),
    description: t(
      'V zad??n?? m??me jasno a na??i v??voj????i se mohou pustit do samotn?? realizace. Pracujeme iterativn?? a v pr??b??hu cel??ho v??voje s v??mi budeme pravideln?? v kontaktu, a?? m??te v??echno pod kontrolou. Aplikace tvo????me nativn?? pro Android a iOS, nebo multriplatform?? pomoc?? Flutter. V??dy v??ak s ohledem na nejnov??j???? trendy a technologie.',
    ),
  },
  {
    title: t('Testov??n??'),
    description: t(
      'Aplikace je skoro hotov??, je ale t??eba ji je??t?? ????dn?? otestovat. U n??s se v??dy najde n??kdo, kdo aplikaci dok????e rozb??t. A dokud nejsme s kvalitou spokojeni, tak pr??ce v??voj?????? nekon????.',
    ),
  },
  {
    title: t('Vyd??n??'),
    description: t(
      'Hotovou aplikaci zve??ejn??me v obchodech Google Play a App Store. Dostane se tak p????mo k va??im z??kazn??k??m. Zve??ejnit ji ale m????eme i intern?? v r??mci va???? firmy jen pro va??e zam??stnance. V obou p????padech se o v??echno postar??me za v??s.',
    ),
  },
  {
    title: t('Podpora, r??st a optimalizace'),
    description: t(
      'Na ??sp????nou spolupr??ci m????eme nav??zat dal????mi kroky, kter?? by aplikaci je??t?? vylep??ily, ??i napomohly k jej??mu r??stu a optimalizaci. Z??rove?? se postar??me i o to, aby aplikace st??le fungovala jak m??.',
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
