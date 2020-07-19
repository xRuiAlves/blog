import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Article({
    data,
}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout>
            <div className="blog-post-container">
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        slug
        title
      }
    }
  }
`;
