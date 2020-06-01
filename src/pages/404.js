import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>This isn't the page you are looking for.</h1>
    <p>Sorry, there is no page at this location.</p>
  </Layout>
)

export default NotFoundPage
