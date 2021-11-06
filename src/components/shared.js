import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.centered ? 'center' : '')};
`;

export const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 160px;
  text-transform: uppercase;
  margin-bottom: 2.5rem;

  @media only screen and (max-width: 600px) {
    margin-top: 80px;
    font-size: 1rem;
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

export const SectionWithSpaceAround = styled.div`
  padding: 0 3rem;
  animation-name: ${(props) => props.animation};
  animation-duration: 2000ms;

  @media only screen and (max-width: 600px) {
    padding: 0 0.75rem;
    animation-name: ${(props) => props.mobileAnimation || props.animation};
  }
`;

export const Description = styled.p`
  font-size: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;
