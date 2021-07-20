import React from 'react';
import styled from 'styled-components';

import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

export const CustomCheckbox = withStyles({
  root: {
    '&$checked': {
      color: '#fbd116',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" style={{ color: props.error ? '#f44336' : '' }} {...props} />);

export const ContactFormWrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-row: auto;
  }
`;

export const TextAreaWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const SendButtonWrapper = styled.button`
  margin-top: 16px;
`;
