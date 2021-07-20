import * as React from 'react';

import Collaboration from '../components/collaboration';
import ContactForm from '../components/contactForm';
import HowWeWork from '../components/howWeWork';
import Layout from '../components/layout';
import MainInfo from '../components/mainInfo';
import Seo from '../components/seo';
import WhyUs from '../components/whyUs';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <MainInfo />
    <HowWeWork />
    <WhyUs />
    <Collaboration />
    <ContactForm />
  </Layout>
);

export default IndexPage;
