import * as React from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import { H2 } from './shared';

const CustomCheckbox = withStyles({
  root: {
    '&$checked': {
      color: '#fbd116',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" style={{ color: props.error ? '#f44336' : '' }} {...props} />);

const ContactFormWrapper = styled.div`
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

const ContactForm = () => {
  const [submitClicked, setSubmitClicked] = React.useState(false);
  const [contactFormData, setContactFormData] = React.useState({});

  const onChange = (event) => {
    const newState = { ...contactFormData };
    newState[event.target.id] = event.target.value;

    setContactFormData(newState);
  };

  const onSubmit = () => {
    setSubmitClicked(true);

    if (
      contactFormData.name &&
      contactFormData.surname &&
      contactFormData.gdprConsent &&
      contactFormData.email &&
      contactFormData.project
    ) {
      //TODO send mail
      console.log(contactFormData);
    }
  };

  const handleChange = (event) => {
    const newState = { ...contactFormData };
    newState[event.target.id] = event.target.checked;

    setContactFormData(newState);
  };

  return (
    <div id="contactForm">
      <H2>Kontaktujte nás</H2>
      <ContactFormWrapper>
        <TextField
          required
          id="name"
          label="Jméno"
          variant="outlined"
          helperText={submitClicked && !contactFormData.name ? 'Povinný údaj' : ''}
          onChange={onChange}
          value={contactFormData.name}
          error={submitClicked && !contactFormData.name}
        />
        <TextField
          required
          id="surname"
          label="Příjmení"
          variant="outlined"
          helperText={submitClicked && !contactFormData.surname ? 'Povinný údaj' : ''}
          onChange={onChange}
          value={contactFormData.surname}
          error={submitClicked && !contactFormData.surname}
        />
        <TextField
          required
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
          label="Telefon"
          type="number"
          variant="outlined"
          onChange={onChange}
          value={contactFormData.phone}
        />
        <TextField
          id="company"
          label="Společnost"
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
        style={{ width: '100%', marginTop: '8px' }}
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
