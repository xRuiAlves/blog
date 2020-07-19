import React from "react";
import ArticleItem from "./articleItem";

const Articles = ({ items }) => (
    <>
        <h2>Articles</h2>
        <div className="articles">
            {items
                .map((edge) => <ArticleItem key={edge.node.id} article={edge.node} />)
            }
        </div>
    </>
);

export default Articles;
