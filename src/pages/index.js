import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroBanner from "../components/homepage/hero-banner"
import FeaturesSection from "../components/homepage/features"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroBanner></HeroBanner>
    <FeaturesSection></FeaturesSection>
  </Layout>
)

export default IndexPage
