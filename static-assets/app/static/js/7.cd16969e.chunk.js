(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[7,9],{169:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return u})),t.d(a,"a",(function(){return d}));var l=t(13),n=t(0),r=t.n(n),c=t(5),s=t(170),m=t(58),o=t(17),i="landscape",u="landscapeCompressed",d="imageBackground";a.d=function(e){var a,t,n=Object(s.a)().formatDate,E=Object(o.b)(),f=Object(l.a)(E,1)[0].isAuthoring,p=e.classes,v=e.parentModelId,b=e.format,N=void 0===b?"portrait":b,g=e.showBlurb,h=void 0!==g&&g,y=e.tags,O=void 0===y?"":y,j=e.numOfComments,w=void 0===j?3:j,x=e.model,k=e.model,F=k.slug,M=void 0===F?x.craftercms.path.replace(/(\/site\/website)|(index\.xml)/g,"").replace(/(\/\/)/g,"/"):F,_=Object(l.a)(k.authorBio_o,1)[0],C=_.name_s,P=_.profilePic_s,T=k.blurb_t,B=k.headline_s,A=k.mainImage_s,I=k.mainImageAlt_s,S=void 0===I?"":I,L=k.craftercms.dateModified,U=Object(m.b)({model:x,parentModelId:v,isAuthoring:f}).props;switch(N){case"portrait":return r.a.createElement(c.b,Object.assign({to:M,className:"blog-entry ".concat(null!==(a=null===p||void 0===p?void 0:p.root)&&void 0!==a?a:"")},U),r.a.createElement("img",{src:A,alt:S}),r.a.createElement("div",{className:"blog-content-body"},r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"author mr-2"},r.a.createElement("img",{src:P,alt:""})," ",C)," \u2022 ",r.a.createElement("span",{className:"mr-2"},n(L))," \u2022 ",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," ",w)),r.a.createElement("h2",null,B)));case i:return r.a.createElement("div",Object.assign({className:"post-entry-horizontal"},U),r.a.createElement(c.b,{to:M,className:null===p||void 0===p?void 0:p.root},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(A,")")}}),r.a.createElement("span",{className:"text"},r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"author mr-2"},r.a.createElement("img",{src:P,alt:""})," ",C),"\u2022 ",r.a.createElement("span",{className:"mr-2"},n(L)),"\u2022 ",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," $",w)),r.a.createElement("h2",null,B))));case u:return r.a.createElement(c.b,Object.assign({to:M,className:null===p||void 0===p?void 0:p.root},U),r.a.createElement("img",{src:A,alt:S,className:"mr-4"}),r.a.createElement("div",{className:"text"},r.a.createElement("h4",null,B),r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"mr-2"},n(L)))));case d:return r.a.createElement(c.b,{to:M,className:"a-block d-flex align-items-center ".concat(null!==(t=null===p||void 0===p?void 0:p.root)&&void 0!==t?t:""),style:{backgroundImage:"url(".concat(A,")")}},r.a.createElement("div",Object.assign({className:"text ".concat(null===p||void 0===p?void 0:p.innerWrapper)},U),r.a.createElement("div",{className:"post-meta"},O&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"category"},O)," \u2022 "),r.a.createElement("span",{className:"mr-2"},n(L))," \u2022 ",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," ",w)),r.a.createElement("h3",null,B),h&&r.a.createElement("p",null,T)));default:return console.error('Unknown PostCard format "'.concat(N,'" on post "').concat(B,'"')),r.a.createElement(c.b,Object.assign({to:M,className:null===p||void 0===p?void 0:p.root},U),r.a.createElement("h2",null,B))}}},170:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t(0),n=t(70),r=t(4);function c(){var e=Object(l.useContext)(n.a);return Object(r.f)(e),e}},171:function(e,a,t){"use strict";var l=t(74),n=t(43),r=t(72),c=t(45),s=t(44),m=t(0),o=t(70),i=t(73),u=t(4),d=t(59),E=function(e,a){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)a.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(t[l[n]]=e[l[n]])}return t},f=t.n(d).a||d;function p(e,a){return Object(i.a)(Object.assign(Object.assign({},u.a),{locale:"en"}),Object(u.b)(),e,a)}var v=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(e){var a=this.props,t=a.values,l=E(a,["values"]),n=e.values,r=E(e,["values"]);return!f(n,t)||!f(l,r)}},{key:"render",value:function(){var e=this;return m.createElement(o.a.Consumer,null,(function(a){e.props.defaultMessage||Object(u.f)(a);var t=a||{},n=t.formatMessage,r=void 0===n?p:n,c=t.textComponent,s=void 0===c?m.Fragment:c,o=e.props,i=o.id,d=o.description,E=o.defaultMessage,f=o.values,v=o.children,b=o.tagName,N=void 0===b?s:b,g=r({id:i,description:d,defaultMessage:E},f);return Array.isArray(g)||(g=[g]),"function"===typeof v?v.apply(void 0,Object(l.a)(g)):N?m.createElement.apply(m,[N,null].concat(Object(l.a)(g))):g}))}}]),t}(m.Component);v.displayName="FormattedMessage",v.defaultProps={values:{}},a.a=v},172:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l);a.default=function(e){var a=e.ice,t=e.model,l=t.bio_t,r=t.name_s,c=t.profilePic_s,s=t.linkButtonText_s,m=t.linkButtonUrl_s,o=t.showLinkButton_b;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",Object.assign({className:"bio text-center"},a),n.a.createElement("img",{src:c,alt:"",className:"img-fluid"}),n.a.createElement("div",{className:"bio-body"},n.a.createElement("h2",null,r),n.a.createElement("p",null,l),o&&n.a.createElement("p",null,n.a.createElement("a",{href:m,className:"btn btn-primary btn-sm rounded"},s)),n.a.createElement("p",{className:"social"},n.a.createElement("a",{href:"/",className:"p-2"},n.a.createElement("span",{className:"fa fa-facebook"})),n.a.createElement("a",{href:"/",className:"p-2"},n.a.createElement("span",{className:"fa fa-twitter"})),n.a.createElement("a",{href:"/",className:"p-2"},n.a.createElement("span",{className:"fa fa-instagram"})),n.a.createElement("a",{href:"/",className:"p-2"},n.a.createElement("span",{className:"fa fa-youtube-play"}))))))}},173:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(172),c=t(25);function s(e){var a=e.model,t=Object(c.c)(e);return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement(r.default,{ice:t,model:a}))}a.a=function(e){var a=e.bios;return n.a.createElement(n.a.Fragment,null,null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement(s,{key:e.craftercms.id,model:e})})))}},174:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(171),c=t(169);a.a=function(e){var a=e.posts;return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(r.a,{id:"common.popularPostsTitle",defaultMessage:"Popular Posts"})),n.a.createElement("div",{className:"post-entry-sidebar"},n.a.createElement("ul",null,null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement("li",{key:e.craftercms.id},n.a.createElement(c.d,{model:e,format:c.c}))})))))}},175:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(171);a.a=function(){return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(r.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"})),n.a.createElement("ul",{className:"categories"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Food ",n.a.createElement("span",null,"(12)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Travel ",n.a.createElement("span",null,"(22)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Lifestyle ",n.a.createElement("span",null,"(37)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Business ",n.a.createElement("span",null,"(42)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Adventure ",n.a.createElement("span",null,"(14)")))))}},176:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(171);a.a=function(){return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(r.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"})),n.a.createElement("ul",{className:"tags"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Travel")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Adventure")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Food")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Lifestyle")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Business")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Freelancing")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Travel")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Adventure")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Food")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Lifestyle")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Business")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Freelancing"))))}},182:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(71),c=t(174),s=t(173),m=t(175),o=t(176);a.default=function(e){var a=e.bios_o,t=e.posts;return n.a.createElement(r.a,null,n.a.createElement("section",{className:"site-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h1",null,"Contact Me"))),n.a.createElement("div",{className:"row blog-entries"},n.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},n.a.createElement("form",{action:"#",method:"post"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("input",{type:"text",id:"name",className:"form-control "})),n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"phone"},"Phone"),n.a.createElement("input",{type:"text",id:"phone",className:"form-control "})),n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",className:"form-control "}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"message"},"Write Message"),n.a.createElement("textarea",{name:"message",id:"message",className:"form-control ",cols:"30",rows:"8"}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 form-group"},n.a.createElement("input",{type:"submit",value:"Send Message",className:"btn btn-primary"}))))),n.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},n.a.createElement("div",{className:"sidebar-box search-form-wrap"},n.a.createElement("form",{action:"#",className:"search-form"},n.a.createElement("div",{className:"form-group"},n.a.createElement("span",{className:"icon fa fa-search"}),n.a.createElement("input",{type:"text",className:"form-control",id:"s",placeholder:"Type a keyword and hit enter"})))),n.a.createElement(s.a,{bios:a}),n.a.createElement(c.a,{posts:t}),n.a.createElement(m.a,null),n.a.createElement(o.a,null))))))}}}]);
//# sourceMappingURL=7.cd16969e.chunk.js.map