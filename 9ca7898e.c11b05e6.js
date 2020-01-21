(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),o=n(9),i=(n(0),n(289)),r={id:"recommended-setup",title:"The Recommended Setup",sidebar_label:"Overview"},l=[{value:"Overview",id:"overview",children:[]},{value:"In-browser versus build-time modules",id:"in-browser-versus-build-time-modules",children:[]},{value:"Import Maps",id:"import-maps",children:[]},{value:"SystemJS",id:"systemjs",children:[]},{value:"Lazy loading",id:"lazy-loading",children:[]},{value:"Local development",id:"local-development",children:[]},{value:"Build tools (Webpack / Rollup)",id:"build-tools-webpack--rollup",children:[]},{value:"Utility modules (styleguide, API, etc)",id:"utility-modules-styleguide-api-etc",children:[]},{value:"Shared dependencies",id:"shared-dependencies",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Continuous Integration (CI)",id:"continuous-integration-ci",children:[]},{value:"Applications versus parcels",id:"applications-versus-parcels",children:[]},{value:"Inter-app communication",id:"inter-app-communication",children:[]},{value:"State management",id:"state-management",children:[]}],s={rightToc:l},c="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Single-spa itself is not opinionated about your build tools, CI process, or local development workflow. However, to implement single-spa you will have to figure all of those things out (and more). To help you decide how to approach these problems, the single-spa core team has put together a "recommended setup" that gives an opinionated approach to solving the practical problems of microfrontends.'),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"We recommend a setup that uses in-browser ES modules + import maps (or SystemJS to polyfill these if you need better browser support). This setup has several advantages:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Common libraries are easy to manage, and are only downloaded once. If you're using SystemJS, you can also preload them for a speed boost as well."),Object(i.b)("li",{parentName:"ol"},"Sharing code / functions / variables is as easy as import/export, just like in a monolithic setup"),Object(i.b)("li",{parentName:"ol"},"Lazy loading applications is easy, which enables you to speed up initial load times"),Object(i.b)("li",{parentName:"ol"},"Each application (AKA microservice, AKA ES module) can be independently developed and deployed. Teams are enabled to work at their own speed, experiment (within reason as defined by the organization), QA, and deploy on thier own schedules. This usually also means that release cycles can be decreased to days instead of weeks or months"),Object(i.b)("li",{parentName:"ol"},"A great developer experience (DX): go to your dev environment and add an import map that points the application's url to your localhost. See sections below for details")),Object(i.b)("h2",{id:"in-browser-versus-build-time-modules"},"In-browser versus build-time modules"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=Jxqiu6pdMSU&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=2"}),"Tutorial video")),Object(i.b)("h2",{id:"import-maps"},"Import Maps"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=Lfm2Ge_RUxs&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=3"}),"Tutorial video")),Object(i.b)("h2",{id:"systemjs"},"SystemJS"),Object(i.b)("h2",{id:"lazy-loading"},"Lazy loading"),Object(i.b)("h2",{id:"local-development"},"Local development"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=vjjcuIxqIzY&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=4"}),"Tutorial video")),Object(i.b)("h2",{id:"build-tools-webpack--rollup"},"Build tools (Webpack / Rollup)"),Object(i.b)("h2",{id:"utility-modules-styleguide-api-etc"},"Utility modules (styleguide, API, etc)"),Object(i.b)("h2",{id:"shared-dependencies"},"Shared dependencies"),Object(i.b)("h2",{id:"deployment"},"Deployment"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=QHunH3MFPZs&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=5"}),"Tutorial video")),Object(i.b)("h2",{id:"continuous-integration-ci"},"Continuous Integration (CI)"),Object(i.b)("h2",{id:"applications-versus-parcels"},"Applications versus parcels"),Object(i.b)("h2",{id:"inter-app-communication"},"Inter-app communication"),Object(i.b)("h2",{id:"state-management"},"State management"))}d.isMDXComponent=!0},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=r(n),p=a,u=d[l+"."+p]||d[p]||c[p]||i;return n?o.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):o.a.createElement(u,Object.assign({},{ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);