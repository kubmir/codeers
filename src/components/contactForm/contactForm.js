import * as React from 'react';
import styled from 'styled-components';

import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { FlexContainer, H2 } from '../shared';
import { ContactFormWrapper, TextAreaWrapper, SendButtonWrapper, GdprInfoWrapper } from './styled';

import './styles.css';

const SuccessMessage = styled.p`
  font-size: 24px;
  font-weight: 400;
  padding-left: 16px;
  color: #28a745;
`;

const CZECH_PHONE_NUMBER_REGEX = /([+]?\d{1,3}[. \s]?)?(\d{9}?)/g;

const ContactForm = () => {
  const [submitClicked, setSubmitClicked] = React.useState(false);
  const [contactFormData, setContactFormData] = React.useState({});
  const [isEmailSent, setIsEmailSent] = React.useState(false);

  const onChange = (event) => {
    const newState = { ...contactFormData };
    newState[event.target.id] = event.target.value;

    setContactFormData(newState);
  };

  const onSubmit = async () => {
    setSubmitClicked(true);

    if (contactFormData.name && contactFormData.email) {
      try {
        await axios.post('https://codeers.cz/mail.php', contactFormData);
        setIsEmailSent(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (isEmailSent) {
    return (
      <FlexContainer style={{ marginTop: '160px' }} centered={true}>
        <CheckCircleIcon style={{ alignSelf: 'center', color: '#28a745' }} color="success" />
        <SuccessMessage>
          Vaše zpráva byla odeslána týmu Codeers. V brzké době Vás budeme kontaktovat. Děkujeme.
        </SuccessMessage>
      </FlexContainer>
    );
  }

  const isPhoneInvalid = !contactFormData.phone?.match(CZECH_PHONE_NUMBER_REGEX);

  return (
    <div id="contactForm">
      <H2>kontaktujte nás</H2>
      <ContactFormWrapper>
        <TextField
          id="name"
          label="Jméno"
          variant="outlined"
          helperText={submitClicked && !contactFormData.name ? 'Povinný údaj' : ''}
          onChange={onChange}
          value={contactFormData.name}
          error={submitClicked && !contactFormData.name}
        />
        <TextField
          id="email"
          label="E-mail"
          variant="outlined"
          helperText={submitClicked && !contactFormData.email ? 'Povinný údaj' : ''}
          onChange={onChange}
          value={contactFormData.email}
          error={submitClicked && !contactFormData.email}
        />
        <TextField
          id="phone"
          label="Telefon (nepovinně)"
          type="tel"
          variant="outlined"
          onChange={onChange}
          value={contactFormData.phone}
          error={submitClicked && contactFormData.phone && isPhoneInvalid}
          helperText={submitClicked && contactFormData.phone && isPhoneInvalid ? 'Zadejte validní telefonní číslo' : ''}
        />
        <TextField
          id="company"
          label="Společnost (nepovinně)"
          variant="outlined"
          onChange={onChange}
          value={contactFormData.company}
        />
      </ContactFormWrapper>
      <TextAreaWrapper>
        <TextField
          id="project"
          label="Stručně popište svůj projekt (nepovinně)"
          multiline
          minRows={8}
          maxRows={10}
          variant="outlined"
          fullWidth={true}
          onChange={onChange}
          value={contactFormData.project}
        />
      </TextAreaWrapper>
      <GdprInfoWrapper>Odesláním souhlasíte se zpracováním osobních údajů</GdprInfoWrapper>
      <SendButtonWrapper onClick={onSubmit}>odeslat</SendButtonWrapper>
    </div>
  );
};

export default ContactForm;