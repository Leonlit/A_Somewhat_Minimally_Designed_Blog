(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{E6xs:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),n=a("Wbzz"),o=a("Bl7J"),c=a("vrFN"),i=a("9eSz"),s=a.n(i),m=a("jXLL");t.default=function(e){var t=e.location,a=Object(n.useStaticQuery)("3375609965"),l=a.site.siteMetadata.title,i=a.allMarkdownRemark.edges;return r.a.createElement(o.a,{location:t,title:l},r.a.createElement(c.a,{title:"Portfolio",description:"Page for displaying the owners portfolios and projects"}),r.a.createElement("h2",{className:"page_title"},r.a.createElement("span",null,"Portfolio")),r.a.createElement("div",{className:"flex"},i.map((function(e){var t=e.node,a=t.fields.slug,l=t.frontmatter.title||a,o=t.frontmatter,c=o.date,i=o.description,d=o.website,u=o.categories;return r.a.createElement("div",{className:"card project-card",key:t.id},r.a.createElement(s.a,{className:"headerImg",fluid:t.frontmatter.thumbnail.childImageSharp.fluid}),r.a.createElement("header",null,r.a.createElement("h3",null,r.a.createElement(n.Link,{style:{boxShadow:"none"},to:"/portfolio"+a},l)),r.a.createElement("small",null,c),null!=u&&r.a.createElement(m.a,{tags:u}),r.a.createElement("div",null,"Website: ",r.a.createElement("a",{href:"https://"+d[1],target:"_blank",rel:"noreferrer"},d[0]))),r.a.createElement("hr",null),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:i||t.excerpt}})))}))))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-8335ba157b51627138c8.js.map