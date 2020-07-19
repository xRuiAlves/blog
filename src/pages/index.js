import React from "react";
import { graphql } from "gatsby";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Welcome from "../components/welcome";
import Articles from "../components/articles";

config.autoAddCss = false;

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => (
    <Layout>
        <SEO title="Home" />
        <Welcome />
        <Articles items={edges} />
    </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD-MM-YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;
