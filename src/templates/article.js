import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import "../css/article.css";

export default function Article({
    data,
}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout>
            <div className="article-container">
                <article className="article">
                    <header>
                        <h1 className="title">{frontmatter.title}</h1>
                        <div className="date">{frontmatter.date}</div>
                    </header>
                    <div
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </article>
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
