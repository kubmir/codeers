import * as React from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

const ContactFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
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
  margin-top: 20px;
`;

const ContactForm = () => {
  const [submitClicked, setSubmitClicked] = React.useState(false);
  const [contactFormData, setContactFormData] = React.useState({});

  const onChange = (event) => {
    const newState = { ...contactFormData };
    newState[event.target.id] = event.target.value;

    setContactFormData(newState);
  };

  const onSubmit = (event) => {
    setSubmitClicked(true);
    console.log(contactFormData);
  };

  return (
    <div id="contactForm">
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
      <SendButtonWrapper onClick={onSubmit}>Odeslat</SendButtonWrapper>
    </div>
  );
};

export default ContactForm;
