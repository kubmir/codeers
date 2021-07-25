import styled from 'styled-components';

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-top: 96px;

  @media only screen and (max-width: 600px) {
    font-size: 28px;
    margin-top: 72px;
  }
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  max-width: 100%;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
