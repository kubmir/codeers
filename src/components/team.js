import * as React from 'react';
import styled from 'styled-components';

import michal from '../svg/new/faces/michal.png';
import rado from '../svg/new/faces/rado.png';
import sarka from '../svg/new/faces/sarka.png';
import { H2 } from './shared';

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

const MemberDescription = styled.p`
  font-size: 1.25rem;

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const MemberTextWrapper = styled.div`
  padding: 0 1.5rem;

  @media only screen and (max-width: 600px) {
    padding: 0 0.875rem;
}
`;

const teamMembers = [
  {
    image: michal,
    name: 'Michal',
    description: 'Postará se o to, aby vaše aplikace byla vždy technicky mezi špičkou a podle posledních trendů.',
  },
  {
    image: rado,
    name: 'Radovan',
    description: 'Díky němu bude vaše aplikace dělat to co má a užívatelé ji budou zbožňovat.',
  },
  {
    image: sarka,
    name: 'Šárka',
    description: 'Odřídí a odkomunikuje celý projekt od jeho začátku až ke zdárnému konci.',
  },
];

export const Team = () => (
  <>
    <H2>jsme codeers</H2>
    <MembersWrapper>
      {teamMembers.map((member) => (
        <Member key={member.name}>
          <img alt={member.name} src={member.image} />
          <MemberTextWrapper>
            <MemberName>{member.name}</MemberName>
            <MemberDescription>{member.description}</MemberDescription>
          </MemberTextWrapper>
        </Member>
      ))}
    </MembersWrapper>
  </>
);
