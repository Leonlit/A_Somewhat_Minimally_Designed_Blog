(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{jXLL:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz");t.a=function(e){var t=e.tags;return r.a.createElement("div",{className:"tags_container"},t.map((function(e,t){return r.a.createElement(l.Link,{key:t,className:"tags",to:"/category/"+e},"#",e)})))}},kwyN:function(e,t,a){"use strict";a.r(t),a.d(t,"categoryTemplate",(function(){return u}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("9eSz"),c=a.n(o),i=a("Bl7J"),m=a("vrFN"),s=a("jXLL");t.default=function(e){var t=e.data,a=e.pageContext,n=e.location,o=t.site.siteMetadata.title,u=t.allMarkdownRemark.edges,d=a.category;return r.a.createElement(i.a,{location:n,title:o},r.a.createElement(m.a,{title:d,description:"ALl post for #"+d}),r.a.createElement("div",null,u.map((function(e){var t=e.node,a=t.fields.slug,n=t.frontmatter.title||a,o=t.frontmatter.categories,i="blog";return"project"===t.frontmatter.postType&&(i="portfolio"),r.a.createElement("article",{className:"card blog-card",key:a},r.a.createElement(c.a,{className:"headerImg",fluid:t.frontmatter.thumbnail.childImageSharp.fluid}),r.a.createElement("header",null,r.a.createElement("h3",null,r.a.createElement(l.Link,{style:{boxShadow:"none"},to:"../../"+i+a+"/."},n)),r.a.createElement("small",null,t.frontmatter.date)),o&&r.a.createElement(s.a,{tags:o}),r.a.createElement("hr",null),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}))))};var u="2460205226"}}]);
//# sourceMappingURL=component---src-templates-category-page-js-a745514db9ca7184786f.js.map