(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"45XD":function(e,t,n){},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n("q1tI"),a=r(o),i=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),T.canUseDOM?t(u):n&&(u=n(u))}var T=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var l=o.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){s.push(this),f()},l.componentDidUpdate=function(){f()},l.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},l.render=function(){return a.createElement(r,this.props)},o}(o.Component);return l(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(T,"canUseDOM",c),T}}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("TJpk"),l=n.n(i),c=(n("45XD"),n("X+Hn"),function(){var e=Object(a.useStaticQuery)("2754826180").allMarkdownRemark.edges,t=0;return e.length>9&&e.splice(9,e.length-9),o.a.createElement("div",null,e.map((function(e){var n=e.node,r=n.frontmatter,i="blog";return"project"===r.postType&&(i="portfolio"),o.a.createElement(a.Link,{key:t++,className:"side_menu_links",activeStyle:{backgroundColor:"#bfbfbf"},partiallyActive:!0,to:"/"+i+n.fields.slug},r.title)})))}),u=function(){var e=Object(a.useStaticQuery)("1174410162"),t={};return e.allMarkdownRemark.edges.forEach((function(e){var n=e.node.frontmatter.date;t[n]?t[n]++:t[n]=1})),(t=Object.keys(t).map((function(e){return[e,t[e]]}))).reverse(),o.a.createElement("div",null,t.map((function(e,t){var n=e[0].split(",");return o.a.createElement(a.Link,{key:t,className:"side_menu_links",activeStyle:{backgroundColor:"#bfbfbf"},partiallyActive:!0,to:"/archive/"+n[1]+"/"+n[0]},n.join(", ")+" ("+e[1]+")")})))},s=n("jFb6"),f=function(){var e=s.siteMetadata.menuLinks;return o.a.createElement("nav",null,e.map((function(t,n){var r=t.name,i=t.link,l="";return n<e.length-1&&(l="|"),o.a.createElement("span",{key:++n},o.a.createElement(a.Link,{to:i},r)," ",l," ")})))},T=function(){var e=0,t=s.siteMetadata.menuLinks;return o.a.createElement("nav",{className:"footer_nav"},t.map((function(t){var n=t.name,r=t.link;return o.a.createElement("span",{key:e++,className:"footer_page_nav"},o.a.createElement(a.Link,{to:r},n))})),o.a.createElement("footer",null,"© ",(new Date).getFullYear()," ",s.siteMetadata.author.name,", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};t.a=function(e){var t=e.title,n=e.children,r=o.a.createElement("h1",{id:"title"},o.a.createElement(a.Link,{style:{boxShadow:"none",color:"inherit"},to:"/"},t));return o.a.createElement("div",{className:"blogContainer"},o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("img",{alt:"Blog's logo",src:"/blog-ico.png",className:"blogLogo"}),r)),o.a.createElement(f,null),o.a.createElement("hr",{style:{marginBottom:"5%"}}),o.a.createElement("div",{id:"container"},o.a.createElement("main",null,n),o.a.createElement("aside",null,o.a.createElement("h4",{style:{marginBottom:"10px"}},"Recent Post"),o.a.createElement("hr",null),o.a.createElement(c,null),o.a.createElement("h4",{style:{marginTop:"50px"}},"Archive"),o.a.createElement("hr",null),o.a.createElement(u,null))),o.a.createElement(T,null),o.a.createElement(l.a,null,o.a.createElement("script",{src:Object(a.withPrefix)("navigationMenu.js"),type:"text/javascript"})))}},Gytx:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var u=a[c];if(!l(u))return!1;var s=e[u],f=t[u];if(!1===(o=n?n.call(r,s,f,u):void 0)||void 0===o&&s!==f)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=f(n("q1tI")),i=f(n("17x9")),l=f(n("8+s/")),c=f(n("bmMU")),u=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,m,A,y=(0,l.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),h=(d=y,A=m=function(e){function t(){return p(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,a=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},a,((t={})[o.type]=l,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=T(o,["children"]),l=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(d,o)},o(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(a.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=d.peek,m.rewind=function(){var e=d.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);h.renderStatic=h.rewind,t.Helmet=h,t.default=h},"X+Hn":function(e,t,n){},bmMU:function(e,t,n){"use strict";var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,c,u,s=r(t),f=r(n);if(s&&f){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(s!=f)return!1;var T=t instanceof Date,p=n instanceof Date;if(T!=p)return!1;if(T&&p)return t.getTime()==n.getTime();var E=t instanceof RegExp,d=n instanceof RegExp;if(E!=d)return!1;if(E&&d)return t.toString()==n.toString();var m=o(t);if((c=m.length)!==o(n).length)return!1;for(l=c;0!=l--;)if(!a.call(n,m[l]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(l=c;0!=l--;)if(!("_owner"===(u=m[l])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},jFb6:function(e,t){(function(t){e.exports={pathPrefix:"/A_Somewhat_Minimally_Designed_Blog",siteMetadata:{title:"A Somewhat Minimally Designed Blog",logo:"public/blog-ico.png",author:{name:"Leon Lit",summary:"I'm Creating some fun side project."},description:"A blog for testing Gatsby.",siteUrl:"https://github.com/Leonlit",social:{twitter:{url:"https://twitter.com/leonlit",name:"leonlit"},github:{url:"https://github.com/Leonlit",name:"Leonlit"},linkedIn:{url:"https://www.linkedin.com/in/leon-lit-152480142/",name:"leon-lit"}},menuLinks:[{name:"Home",link:"/"},{name:"Portfolio",link:"/portfolio"},{name:"About Me",link:"/about"}]},plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/content/blog",name:"blog"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/portfolio",name:"portfolio"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:590}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}}]}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-manifest",options:{name:"A Somewhat Minimally Designed Blog",short_name:"Minimally designed blog template",start_url:"/",background_color:"#ffffff",theme_color:"#663399",display:"minimal-ui",icon:"static/blog-ico.png"}},"gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-typography",options:{pathToConfigModule:"src/utils/typography"}}]}}).call(this,"/")},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n("q1tI")),i=c(n("6qGY")),l=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=m(e,l.TAG_NAMES.TITLE),n=m(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return m(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},d=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===l.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),c=0;c<a.length;c++){var u=a[c],s=(0,i.default)({},o[u],r[u]);o[u]=s}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){A(e)}),0)}),y=function(e){return clearTimeout(e)},h="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,_=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,T=e.title,p=e.titleAttributes;R(l.TAG_NAMES.BODY,r),R(l.TAG_NAMES.HTML,o),M(T,p);var E={baseTag:P(l.TAG_NAMES.BASE,n),linkTags:P(l.TAG_NAMES.LINK,a),metaTags:P(l.TAG_NAMES.META,i),noscriptTags:P(l.TAG_NAMES.NOSCRIPT,c),scriptTags:P(l.TAG_NAMES.SCRIPT,s),styleTags:P(l.TAG_NAMES.STYLE,f)},d={},m={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(m[e]=E[e].oldTags)})),t&&t(),u(e,d,m)},v=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){void 0!==e&&document.title!==e&&(document.title=v(e)),R(l.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=a.indexOf(u);-1!==f&&a.splice(f,1)}for(var T=a.length-1;T>=0;T--)n.removeAttribute(a[T]);o.length===a.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},P=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,o=w(n,r),[a.default.createElement(l.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=O(n),a=v(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){g&&b(g),e.defer?g=h((function(){_(e,(function(){g=null}))})):(_(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,T=void 0===f?"":f,p=e.titleAttributes;return{base:C(l.TAG_NAMES.BASE,t,r),bodyAttributes:C(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(l.ATTRIBUTE_NAMES.HTML,o,r),link:C(l.TAG_NAMES.LINK,a,r),meta:C(l.TAG_NAMES.META,i,r),noscript:C(l.TAG_NAMES.NOSCRIPT,c,r),script:C(l.TAG_NAMES.SCRIPT,u,r),style:C(l.TAG_NAMES.STYLE,s,r),title:C(l.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:E([l.TAG_PROPERTIES.HREF],e),bodyAttributes:p(l.ATTRIBUTE_NAMES.BODY,e),defer:m(e,l.HELMET_PROPS.DEFER),encode:m(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(l.ATTRIBUTE_NAMES.HTML,e),linkTags:d(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:d(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:d(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=h,t.warn=S}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("TJpk"),i=n("Wbzz"),l=function(e){var t=e.description,n=e.lang,r=e.meta,l=e.title,c=e.url,u=Object(i.useStaticQuery)("3110614458").site,s=t||u.siteMetadata.description;return o.a.createElement(a.Helmet,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{property:"og:url",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.social.twitter.name},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(r)})};l.defaultProps={lang:"en",meta:[],description:"A Somewhat minimally designed blog template"},t.a=l},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-8177be3fa7535de0cda0.js.map