import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function DocPage({ data }) {
    const post = data.markdownRemark
    return (
	
	    <Layout>
	    <SEO title={post.frontmatter.title} />
	    <div>
	    <h2>{post.frontmatter.title}</h2>
	    <div dangerouslySetInnerHTML={{ __html: post.html }} />
	          </div>
	    </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
