import styled from 'styled-components';

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-top: 50px;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
