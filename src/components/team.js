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
  grid-template-columns: 50% 50%;
  grid-row: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 2rem;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${(props) => (props.isVisible ? fadeIn : '')};
  animation-duration: 2000ms;

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const MemberName = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const MemberTextWrapper = styled.div`
  padding: 0 1.5rem;

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const MemberImage = styled.img`
  @media only screen and (max-width: 600px) {
    width: 25%;
  }
`;

const getTeamMembers = (t) => [
  {
    image: michal,
    name: 'Michal',
    description: t('Postará se o to, aby vaše aplikace byla vždy technicky mezi špičkou a podle posledních trendů.'),
  },
  {
    image: rado,
    name: 'Radovan',
    description: t('Díky němu bude vaše aplikace dělat to co má a užívatelé ji budou zbožňovat.'),
  },
  {
    image: sarka,
    name: 'Šárka',
    description: t('Odřídí a odkomunikuje celý projekt od jeho začátku až ke zdárnému konci.'),
  },
];

const TeamMember = ({ member }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Member key={member.name} ref={ref} isVisible={inView}>
      <MemberImage alt={member.name} src={member.image} />
      <MemberTextWrapper>
        <MemberName>{member.name}</MemberName>
        <Description>{member.description}</Description>
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
