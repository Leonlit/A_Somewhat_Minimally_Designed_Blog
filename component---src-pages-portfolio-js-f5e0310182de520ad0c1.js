(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{E6xs:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("Bl7J"),o=a("vrFN"),i=a("9eSz"),s=a.n(i),m=a("jXLL");t.default=function(e){var t=e.location,a=Object(l.useStaticQuery)("229052711"),n=a.site.siteMetadata.title,i=a.allMarkdownRemark.edges;return r.a.createElement(c.a,{location:t,title:n},r.a.createElement(o.a,{title:"Portfolio",description:"Page for displaying the owners portfolios and projects"}),r.a.createElement("h2",{className:"page_title"},r.a.createElement("span",null,"Portfolio")),r.a.createElement("div",{className:"flex"},i.map((function(e){var t=e.node,a=t.fields.slug,n=t.frontmatter.title||a,c=t.frontmatter,o=c.date,i=c.description,u=c.website,d=c.categories;return r.a.createElement("div",{className:"card project-card",key:a},r.a.createElement(s.a,{className:"headerImg",fluid:t.frontmatter.thumbnail.childImageSharp.fluid}),r.a.createElement("header",null,r.a.createElement("h3",null,r.a.createElement(l.Link,{style:{boxShadow:"none"},to:"/portfolio"+a},n)),r.a.createElement("small",null,o),null!=d&&r.a.createElement(m.a,{tags:d}),r.a.createElement("div",null,"Website: ",r.a.createElement("a",{href:"https://"+u[1],target:"_blank",rel:"noreferrer"},u[0]))),r.a.createElement("hr",null),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:i||t.excerpt}})))}))))}},jXLL:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz");t.a=function(e){var t=e.tags;return r.a.createElement("div",{className:"tags_container"},t.map((function(e,t){return r.a.createElement(l.Link,{key:t,className:"tags",to:"/category/"+e},"#",e)})))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-f5e0310182de520ad0c1.js.map