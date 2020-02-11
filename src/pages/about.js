import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <h1>About Gatsby</h1>
    <p>Welcome to about page. You're gonna be so damn successful in coding!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage