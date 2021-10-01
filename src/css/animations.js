import { keyframes } from 'styled-components';

export const moveFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const moveFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;
