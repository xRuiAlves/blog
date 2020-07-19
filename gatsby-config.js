module.exports = {
    siteMetadata: {
        title: "Rui Alves Blog",
        description: "Tech-related Blog",
        author: "Rui Alves",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "markdown-pages",
                path: `${__dirname}/src/articles`,
            },
        },
        "gatsby-transformer-remark",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "src/images/logo.png", // This path is relative to the root of the site.
            },
        },
    ],
};
