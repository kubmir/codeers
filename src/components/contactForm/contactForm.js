import * as React from 'react';

import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { FlexContainer, H2 } from '../shared';
import {
  ContactFormWrapper,
  TextAreaWrapper,
  SendButtonWrapper,
  GdprInfoWrapper,
  ContactWrapper,
  SuccessMessage,
} from './styled';

import './styles.css';
import { useTranslation } from 'react-i18next';

const CZECH_PHONE_NUMBER_REGEX = /([+]?\d{1,3}[. \s]?)?(\d{9}?)/g;

const ContactForm = () => {
  const { t } = useTranslation();

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
          {t('Vaše zpráva byla odeslána týmu Codeers. V brzké době Vás budeme kontaktovat. Děkujeme.')}
        </SuccessMessage>
      </FlexContainer>
    );
  }

  const isPhoneInvalid = !contactFormData.phone?.match(CZECH_PHONE_NUMBER_REGEX);

  return (
    <ContactWrapper id="contactForm">
      <H2 style={{ marginTop: 0 }}>{t('kontaktujte nás')}</H2>
      <ContactFormWrapper>
        <TextField
          id="name"
          label={t('Jméno')}
          variant="outlined"
          helperText={submitClicked && !contactFormData.name ? t('Povinný údaj') : ''}
          onChange={onChange}
          value={contactFormData.name}
          error={submitClicked && !contactFormData.name}
        />
        <TextField
          id="email"
          label={t('E-mail')}
          variant="outlined"
          helperText={submitClicked && !contactFormData.email ? t('Povinný údaj') : ''}
          onChange={onChange}
          value={contactFormData.email}
          error={submitClicked && !contactFormData.email}
        />
        <TextField
          id="phone"
          label={t('Telefon (nepovinně)')}
          type="tel"
          variant="outlined"
          onChange={onChange}
          value={contactFormData.phone}
          error={submitClicked && contactFormData.phone && isPhoneInvalid}
          helperText={
            submitClicked && contactFormData.phone && isPhoneInvalid ? t('Zadejte validní telefonní číslo') : ''
          }
        />
        <TextField
          id="company"
          label={t('Společnost (nepovinně)')}
          variant="outlined"
          onChange={onChange}
          value={contactFormData.company}
        />
      </ContactFormWrapper>
      <TextAreaWrapper>
        <TextField
          id="project"
          label={t('Stručně popište svůj projekt (nepovinně)')}
          multiline
          minRows={8}
          maxRows={10}
          variant="outlined"
          fullWidth={true}
          onChange={onChange}
          value={contactFormData.project}
        />
      </TextAreaWrapper>
      <GdprInfoWrapper>{t('Odesláním souhlasíte se zpracováním osobních údajů')}</GdprInfoWrapper>
      <SendButtonWrapper onClick={onSubmit}>{t('odeslat')}</SendButtonWrapper>
    </ContactWrapper>
  );
};

export default ContactForm;
