const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const article_template = require.resolve("./src/templates/article.js");

    const md_pages = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `);

    // Handle errors
    if (md_pages.errors) {
        reporter.panicOnBuild("Error while running GraphQL query.");
        return;
    }

    md_pages.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: article_template,
            context: {
                slug: node.frontmatter.slug,
            },
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: "slug",
            node,
            value,
        });
    }
};
