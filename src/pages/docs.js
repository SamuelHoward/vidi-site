import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function DocsPage({ data }) {
    return (
	    <Layout>
	    <SEO title="Docs" />
	    <h2>Vidi Documentation</h2>
	    <p>
	    Here you can find all of the documentation written for Vidi. The goal of the documentation is to outline exactly how Vidi code should operate.
	    </p>
	    <h2>Docs Overview</h2>

	{data.allMarkdownRemark.edges.map(({ node }) => (
		<div key={node.id}>
		<a style={{ color: `#46b4eb` }}
	    href={node.fields.slug}
	                >
		<h4>{node.frontmatter.title}</h4>
	    </a>
	    </div>
	))}
	    
	</Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "docs"}}}, sort: {fields: frontmatter___num, order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            title
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
