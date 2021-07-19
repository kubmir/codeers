import * as React from "react"

import Layout from "../components/layout"
import MainInfo from "../components/mainInfo"
import HowWeWork from "../components/howWeWork"
import WhyUs from "../components/whyUs"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <MainInfo />
    <HowWeWork />
    <WhyUs />
  </Layout>
)

export default IndexPage
