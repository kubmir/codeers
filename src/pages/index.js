import * as React from 'react';

import Collaboration from '../components/collaboration';
import ContactForm from '../components/contactForm/contactForm';
import Footer from '../components/footer';
import HowWeWork from '../components/howWeWork';
import Layout from '../components/layout';
import MainInfo from '../components/mainInfo';
import Seo from '../components/seo';
import WhyUs from '../components/whyUs';
import References from '../components/references';

const IndexPage = () => (
  <Layout>
    <Seo/>
    <MainInfo />
    <HowWeWork />
    <WhyUs />
    <Collaboration />
    <References />
    <ContactForm />
    <Footer />
  </Layout>
);

export default IndexPage;
