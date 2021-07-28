import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${props => props.centered ? 'center' : ''};
`;

export const H2 = styled.h2`
  font-size: 64px;
  font-weight: 700;
  margin-top: 160px;

  @media only screen and (max-width: 600px) {
    font-size: 32px;
    margin-top: 120px;
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
