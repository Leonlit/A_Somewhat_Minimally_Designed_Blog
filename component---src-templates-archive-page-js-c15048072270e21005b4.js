(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{DNPW:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("jXLL"),c=a("9eSz"),i=a.n(c);t.a=function(e){var t=e.node,a=e.locationPlaceholder,n=e.postKey,c=t.fields.slug,s=t.frontmatter.title,m=t.frontmatter.categories;return r.a.createElement("article",{className:"card blog-card",key:n},r.a.createElement(i.a,{className:"headerImg",fluid:t.frontmatter.thumbnail.childImageSharp.fluid}),r.a.createElement("header",null,r.a.createElement("h3",null,r.a.createElement(l.Link,{style:{boxShadow:"none"},to:""+a+c+"."},s)),r.a.createElement("small",null,t.frontmatter.date)),m&&r.a.createElement(o.a,{tags:m}),r.a.createElement("hr",null),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}},bGIY:function(e,t,a){"use strict";a.r(t),a.d(t,"ArchiveTemplate",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),o=a("vrFN"),c=a("DNPW");t.default=function(e){var t=e.data,a=e.pageContext,n=e.location;console.log(t);var i=t.site.siteMetadata.title,s=t.allMarkdownRemark.edges,m=a.archive;return r.a.createElement(l.a,{location:n,title:i},r.a.createElement(o.a,{title:"Post posted in "+m,description:"ALl the blog post posted on "+m}),r.a.createElement("div",null,s.map((function(e,t){var a=e.node,n="blog";return"project"===a.frontmatter.postType&&(n="portfolio"),r.a.createElement(c.a,{postKey:t,key:"post-"+t,node:a,locationPlaceholder:"../../../"+n})}))))};var i="1260853479"}}]);
//# sourceMappingURL=component---src-templates-archive-page-js-c15048072270e21005b4.js.map