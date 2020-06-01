import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function DocsPage({ data }) {
    return (
	    <Layout>
	    <SEO title="Samples" />
	    <h2>Vidi Code Samples</h2>
	    <p>
	    The following code samples are meant to demonstrate some interesting uses of Vidi in small scripts and allow for general comparison with other programming languages.
	    </p>
	    <h2>Samples</h2>

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
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "samples"}}}, sort: {fields: frontmatter___num, order: ASC}) {
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
