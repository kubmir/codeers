import { createStyles, makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from 'react';
import styled from 'styled-components';

import { H2, ItemsWrapper, FlexContainer } from './shared';

import './layout.css';

const HowWeWorkItemWrapper = styled.div`
  width: 100%;
  margin-top: ${(props) => (props.order > 2 ? '40px' : '0px')};

  @media only screen and (max-width: 600px) {
    margin-top: 0px;
  }
`;

const HowWeWorkItemHeading = styled.h3`
  font-size: 32px;
  margin-bottom: 0;
  padding-top: 8px;
  font-weight: 400;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    padding-top: 10px;
  }
`;

const HighlightedText = styled.span`
  background-image: linear-gradient(to bottom, transparent 10px, #e8c81d 10px, #e8c81d 25px, transparent 25px);
  font-size: 56px;
  margin-top: 10px;
  min-width: 72px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    font-size: 48px;
    min-width: 64px;
  }
`;

const DescriptionWrapper = styled.p`
  padding-bottom: 0px;
  margin-bottom: 0px;
  margin-top: 18px;

  @media only screen and (max-width: 600px) {
    margin-top: 14px;
  }
`;
const DetailsList = styled.ul`
  margin: 18px 0 0;
`;

const ListItem = styled.li`
  margin: 8px 0;
`;

const HowWeWorkTextItemWrapper = styled.div`
  padding-left: 24px;

  @media only screen and (max-width: 600px) {
    padding-left: 16px;
  }
`;

const WeCanHelpYouMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  @media only screen and (max-width: 780px) {
    display: block;
    margin-top: 32px;
  }
`;

const WeCanHelpYouMessage = styled.span`
  color: #000000;
  font-size: 36px;
  background: linear-gradient(to bottom, transparent 15px, #e8c81d 15px, #e8c81d 36px, transparent 36px);
  cursor: pointer;

  @media only screen and (max-width: 780px) {
    background: repeating-linear-gradient(to bottom, transparent 0% 50%, #e8c81d 50% 100%);
  }

  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const DesktopWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const howWeWorkData = [
  {
    order: '01',
    title: 'produktová strategie',
    description: 'Společně definujeme, jak dokážeme vaši vizi zhmotnit pomocí aplikace.',
    details: ['zmapování potřeb', 'průzkum trhu', 'analýza možností', 'definice produktu', 'stanovení budgetu'],
  },
  {
    order: '02',
    title: 'produktový design',
    description:
      'Posuneme od strategie k reálnému zadání, abychom si vše vyjasnili než se pustíme do samotného vývoje.',
    details: [
      'vypracování detailního zadání a funkčnosti MVP',
      'discovery fáze',
      'prototypování v případě více možných návrhů',
      'návrh aplikace zaměřený na uživatele',
      'grafický návrh v podobě wireframů',
      'roadmapa první fáze vývoje',
      'vizuální design (UX/UI)',
    ],
  },
  {
    order: '03',
    title: 'vývoj aplikace',
    description: 'Zadání máme vyjasněno. Začínáme se samotným vývojem aplikace.',
    details: [
      'iterativní vývoj',
      'spolupráce založená na základech agilních principů',
      'CI/CD umožňující sledování vývoje',
      'příprava API',
      'nativní vývoj pro iOS & Android',
      'nasazení na Apple/Google store',
      'monitoring',
      'strojové učení',
      'QA',
    ],
  },
  {
    order: '04',
    title: 'růst a optimalizace',
    description: 'Máme hotovo, ale vždycky je co zlepšovat.',
    details: [
      'analýza nefunkčních částí aplikace',
      'další doporučení a návrhy na rozšíření o nové funkcionality',
      'aplikace nových technologií',
      'škálování',
      'trackování a analýza dat uživatelů',
      'vyhodnocení nasbíraných dat na základě analytiky a metrik',
    ],
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    rootWithoutBorders: {
      boxShadow: 'none',
      '&:before': {
        display: 'none',
      },
    },
    summaryRoot: {
      padding: 0,
      margin: '16px 0 -8px',
    },
  }),
);

const HowWeWork = () => {
  const classes = useStyles();

  const onButtonClick = () =>
    document.getElementById('contactForm').scrollIntoView({
      behavior: 'smooth',
    });

  const getTitle = (item) => (
    <HowWeWorkItemWrapper order={item.order}>
      <FlexContainer>
        <HighlightedText>{item.order}</HighlightedText>
        <HowWeWorkTextItemWrapper>
          <HowWeWorkItemHeading>{item.title}</HowWeWorkItemHeading>
        </HowWeWorkTextItemWrapper>
      </FlexContainer>
    </HowWeWorkItemWrapper>
  );

  const getDescription = (item, desktopView) => (
    <>
      {desktopView && <DescriptionWrapper>{item.description}</DescriptionWrapper>}
      <DetailsList>
        {item.details.map((detail, index) => (
          <ListItem key={index}>{detail}</ListItem>
        ))}
      </DetailsList>
    </>
  );

  return (
    <>
      <H2>jak pracujeme</H2>
      <ItemsWrapper>
        {howWeWorkData.map((item) => (
          <>
            <DesktopWrapper>
              {getTitle(item)}
              {getDescription(item, true)}
            </DesktopWrapper>
            <MobileWrapper>
              <Accordion
                key={item.order}
                classes={{
                  root: classes.rootWithoutBorders,
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  classes={{
                    root: classes.summaryRoot,
                  }}>
                  <div>
                    {getTitle(item)}
                    <DescriptionWrapper>{item.description}</DescriptionWrapper>
                  </div>
                </AccordionSummary>
                <AccordionDetails style={{ paddingLeft: 0, display: 'block' }}>
                  {getDescription(item, false)}
                </AccordionDetails>
              </Accordion>
            </MobileWrapper>
          </>
        ))}
      </ItemsWrapper>
      <WeCanHelpYouMessageWrapper>
        <WeCanHelpYouMessage onClick={onButtonClick}>
          dokážeme vám pomoci v jakékoliv fázi vašeho projektu
        </WeCanHelpYouMessage>
      </WeCanHelpYouMessageWrapper>
    </>
  );
};

export default HowWeWork;
