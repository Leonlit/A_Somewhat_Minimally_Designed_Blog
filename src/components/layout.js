
import React from "react";
import {withPrefix, Link } from "gatsby";
import Helmet from "react-helmet"

import {siteMetadata} from "../../gatsby-config";
import "./desktop.css";
import "./mobile.css";
import RecentPost from "./recentPost";
import NavigationMenu from "./navigationMenu";

const Layout = ({ title, children }) => {
  let header = (
      <h1 id="title">
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  return (
    <div className="titleContainer">
      <div>
        <header>{header}</header>
      </div>
      <NavigationMenu/>
      <hr style={{
        marginBottom: "5%",
      }}/>
      <div id="container">
        <main>{children}</main>
        <aside>
          <h4 style={{marginBottom: "10px",}}>Recent Post</h4>
          <hr/>
          <RecentPost/>
        </aside>
      </div>
      <footer>
        © {new Date().getFullYear()} {siteMetadata.author.name}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      <Helmet>
        <script src={withPrefix('navigationMenu.js')} type="text/javascript" />
      </Helmet>
    </div>
  )
}

export default Layout