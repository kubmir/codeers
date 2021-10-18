import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import styled from 'styled-components';

import { fadeIn } from '../css/animations';
import michal from '../svg/new/faces/michal.png';
import rado from '../svg/new/faces/rado.png';
import sarka from '../svg/new/faces/sarka.png';

import { Description, H2 } from './shared';

const MembersWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-row: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 2rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 50% 50%;
  }
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-name: ${(props) => (props.isVisible ? fadeIn : '')};
  animation-duration: 2000ms;
`;

const MemberName = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const MemberTextWrapper = styled.div`
  padding: 0 1.5rem;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const MemberImage = styled.img`
  height: 130px;
`;

const MemberDescription = styled(Description)`
  margin: 0;
`;


const getTeamMembers = (t) => [
  {
    image: michal,
    name: 'Michal',
    description: t('Developer'),
  },
  {
    image: rado,
    name: 'Radovan',
    description: t('Product Manager'),
  },
  {
    image: sarka,
    name: 'Šárka',
    description: t('Scrum Master'),
  },
  {
    image: sarka,
    name: 'Šárka',
    description: t('Scrum Master'),
  },
];

const TeamMember = ({ member }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Member key={member.name} ref={ref} isVisible={inView}>
      <MemberImage alt={member.name} src={member.image} />
      <MemberTextWrapper>
        <MemberName>{member.name}</MemberName>
        <MemberDescription>{member.description}</MemberDescription>
      </MemberTextWrapper>
    </Member>
  );
};

export const Team = () => {
  const { t } = useTranslation();

  return (
    <>
      <H2>{t('jsme codeers')}</H2>
      <MembersWrapper>
        {getTeamMembers(t).map((member) => (
          <TeamMember key={member.name} member={member} />
        ))}
      </MembersWrapper>
    </>
  );
};
