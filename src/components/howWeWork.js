import { createStyles, makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from 'react';
import styled from 'styled-components';

import { H2, ItemsWrapper } from './shared';

import './layout.css';

const HowWeWorkItemWrapper = styled.div`
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const HowWeWorkItemHeading = styled.h3`
  font-size: 35px;
  margin-bottom: 0;
  padding-left: 8px;
`;

const HighlightedText = styled.span`
  background-image: linear-gradient(to bottom, transparent 10px, #fbd116 10px, #fbd116 25px, transparent 25px);
  font-size: 55px;
  margin-top: 10px;
  min-width: 72px;
  display: flex;
  justify-content: center;
`;

const DescriptionWrapper = styled.p`
  padding: 14px 8px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
`;
const DetailsList = styled.ul`
  margin: 0;
  padding-left: 92px;
`;

const ListItem = styled.li`
  margin: 8px 0;
`;

const howWeWorkData = [
  {
    order: '01',
    title: 'Produktová strategie',
    description: 'Společně definujeme, jak dokážeme vaši vizi zhmotnit pomocí aplikace.',
    details: ['zmapování potřeb', 'průzkum trhu', 'analýza možností', 'definice produktu', 'stanovení budgetu'],
  },
  {
    order: '02',
    title: 'Produktový design',
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
    title: 'Vývoj aplikace',
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
    title: 'Růst a optimalizace',
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
    },
  }),
);

const HowWeWork = () => {
  const classes = useStyles();

  return (
    <>
      <H2>Jak pracujeme</H2>
      <ItemsWrapper>
        {howWeWorkData.map((item) => (
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
              <HowWeWorkItemWrapper>
                <FlexContainer>
                  <HighlightedText>{item.order}</HighlightedText>
                  <div>
                    <HowWeWorkItemHeading>{item.title}</HowWeWorkItemHeading>
                    <DescriptionWrapper>{item.description}</DescriptionWrapper>
                  </div>
                </FlexContainer>
              </HowWeWorkItemWrapper>
            </AccordionSummary>
            <AccordionDetails>
              <DetailsList>
                {item.details.map((detail, index) => (
                  <ListItem key={index}>{detail}</ListItem>
                ))}
              </DetailsList>
            </AccordionDetails>
          </Accordion>
        ))}
      </ItemsWrapper>
    </>
  );
};

export default HowWeWork;
