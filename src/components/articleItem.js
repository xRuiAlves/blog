import React from "react";
import { Link } from "gatsby";

import "../css/article.css";

const ArticleItem = ({ article }) => (
    <div className="article-item">
        <Link to={article.frontmatter.slug}>
            <span className="date">[{article.frontmatter.date}]</span>
            <span className="title">{article.frontmatter.title}</span>
        </Link>
    </div>
);

export default ArticleItem;
