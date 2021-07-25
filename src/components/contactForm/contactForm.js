import * as React from 'react';

import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { H2 } from '../shared';
import { CustomCheckbox, ContactFormWrapper, TextAreaWrapper, SendButtonWrapper } from './styled';

import './styles.css';

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

    if (
      contactFormData.name &&
      contactFormData.surname &&
      contactFormData.gdprConsent &&
      contactFormData.email &&
      contactFormData.project
    ) {
      try {
        await axios.post('http://ayurtest.eu/mail.php', contactFormData);
        setIsEmailSent(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (event) => {
    const newState = { ...contactFormData };
    newState[event.target.id] = event.target.checked;

    setContactFormData(newState);
  };

  if (isEmailSent) {
    // TODO successfully sent
  }

  const isPhoneInvalid = !contactFormData.phone?.match(CZECH_PHONE_NUMBER_REGEX);

  return (
    <div id="contactForm">
      <H2>Kontaktujte nás</H2>
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
          id="surname"
          label="Příjmení"
          variant="outlined"
          helperText={submitClicked && !contactFormData.surname ? 'Povinný údaj' : ''}
          onChange={onChange}
          value={contactFormData.surname}
          error={submitClicked && !contactFormData.surname}
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
          label="Telefon (volitelný)"
          type="tel"
          variant="outlined"
          onChange={onChange}
          value={contactFormData.phone}
          error={submitClicked && contactFormData.phone && isPhoneInvalid}
          helperText={submitClicked && contactFormData.phone && isPhoneInvalid ? 'Zadejte validní telefonní číslo' : ''}
        />
        <TextField
          id="company"
          label="Společnost (volitelný)"
          variant="outlined"
          onChange={onChange}
          value={contactFormData.company}
        />
      </ContactFormWrapper>
      <TextAreaWrapper>
        <TextField
          id="project"
          label="Popište Váš projekt"
          multiline
          minRows={8}
          maxRows={10}
          variant="outlined"
          helperText={submitClicked && !contactFormData.project ? 'Povinný údaj' : ''}
          fullWidth={true}
          onChange={onChange}
          value={contactFormData.project}
          error={submitClicked && !contactFormData.project}
        />
      </TextAreaWrapper>
      <FormControlLabel
        style={{
          width: '100%',
          marginTop: '8px',
          color: submitClicked && !contactFormData.gdprConsent ? '#f44336' : '#000000',
        }}
        control={
          <CustomCheckbox
            id="gdprConsent"
            error={submitClicked && !contactFormData.gdprConsent}
            checked={contactFormData.gdprConsent}
            onChange={handleChange}
          />
        }
        label="Souhlas se zpracováním osobních údajů"
      />
      {submitClicked && !contactFormData.gdprConsent && (
        <FormHelperText style={{ color: '#f44336' }}>Povinný údaj</FormHelperText>
      )}
      <SendButtonWrapper onClick={onSubmit}>Odeslat</SendButtonWrapper>
    </div>
  );
};

export default ContactForm;
