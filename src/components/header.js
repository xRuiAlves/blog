import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../css/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import Copyright from "./copyright";

const Header = ({ siteTitle }) => (
    <header id="page_header">
        <h1>
            <Link to="/">
                {siteTitle}
                <FontAwesomeIcon icon={faFileAlt} className="header-icon" />
            </Link>
        </h1>
        <Copyright />
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

export default Header;
