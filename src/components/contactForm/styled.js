import React from 'react';
import styled from 'styled-components';

import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

export const CustomCheckbox = withStyles({
  root: {
    '&$checked': {
      color: '#e8c81d',
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

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-row: auto;
  }
`;

export const TextAreaWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const SendButtonWrapper = styled.button`
  width: 235px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const GdprInfoWrapper = styled.p`
  margin: 25px 0;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.54);

  @media only screen and (max-width: 768px) {
    margin: 30px 0;
    font-size: 16px;
  }
`;

export const SuccessMessage = styled.p`
  font-size: 24px;
  font-weight: 400;
  padding-left: 16px;
  color: #28a745;
`;

export const ContactWrapper = styled.div`
  padding-top: 130px;
  margin: 0 auto;
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const FormFieldsWrapper = styled.div`
  width: 920px;

  @media only screen and (max-width: 920px) {
    display: 100%;
  }
`;

export const EmailContactWrapper = styled.div`
  display: flex;
  border-left: 3px solid #000000;
  margin-left: 3rem;
  align-items: center;

  @media only screen and (max-width: 920px) {
    display: none;
  }
`;

export const EmailContact = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  margin-left: 1rem;
`;

