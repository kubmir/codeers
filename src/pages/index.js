import * as React from 'react';
import { graphql } from 'gatsby';

import ContactForm from '../components/contactForm/contactForm';
import Footer from '../components/footer';
import Layout from '../components/layout';
import MainInfo from '../components/mainInfo';
import Seo from '../components/seo';
import WhyUs from '../components/whyUs';
import References from '../components/references';
import { Technologies } from '../components/technologies';
import { SectionWithSpaceAround } from '../components/shared';
import { Team } from '../components/team';
import HowWeWork from '../components/howWeWork';

const IndexPage = () => (
  <Layout>
    <Seo />
    <MainInfo />
    <WhyUs />
    <References />
    <SectionWithSpaceAround>
      <Technologies />
    </SectionWithSpaceAround>
    <HowWeWork />
    <SectionWithSpaceAround>
      <Team />
      <ContactForm />
    </SectionWithSpaceAround>
    <Footer />
  </Layout>
);

export default IndexPage;


export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;