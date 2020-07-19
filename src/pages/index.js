import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Welcome from "../components/welcome";

config.autoAddCss = false;

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Welcome />
    </Layout>
);

export default IndexPage;
