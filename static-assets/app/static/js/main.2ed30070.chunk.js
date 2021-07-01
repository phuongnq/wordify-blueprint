(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[1],{11:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var r=t(4),c=t(1),o=t(5),a=t(0),i=t(14),s=t(16),l=Object(a.createContext)();function u(){var e=Object(a.useContext)(l);if(!e)throw new Error("useGlobalContext must be used within a GlobalContextProvider");return e}function b(e){var n=Object(s.h)({isAuthoring:Object(i.d)(),locale:"en",pages:null,pagesLoading:!1,theme:"light",$:e.jQuery}),t=Object(o.a)(n,2),u=t[0],b=t[1],d=Object(a.useMemo)((function(){return[u,b]}),[u,b]);return Object(c.jsx)(l.Provider,Object(r.a)({value:d},e))}},111:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),o=t.n(c),a=t(75),i=t.n(a),s=t(22),l=t(20),u=t(4),b=t(5),d=t(42),m=t(26),j=t(39),f=t(64),p=t(27),O=t(35),h=t(32);function _(e){var n=e.match,t=e.location,o=Object(c.useState)(null),a=Object(b.a)(o,2),i=a[0],s=a[1],l=n.path.includes(":")?n.path.substring(0,n.path.indexOf(":")-1):n.url;return Object(c.useEffect)((function(){var e,n=!1,r=parseInt(null!==(e=Object(h.parse)(t.search).page)&&void 0!==e?e:1)-1,c={limit:8,offset:r?8*r:0};return Object(O.d)(l),Object(m.a)({text:j.a},{url:".*".concat("/"===l?"website/index":l,".*"),includePosts:!0,postsLimit:c.limit,postsOffset:c.offset}).then((function(e){var t=e.data;if(!n){var r,o,a=Object(p.a)(null===(r=t.content.items)||void 0===r?void 0:r[0]),i=t.levelDescriptors.items.filter((function(e){return"crafter-level-descriptor.level.xml"===e.file__name})).map((function(e){return e}))[0];if(s({model:a,meta:{siteTitle:i.siteTitle_s,socialLinks:i.socialLinks_o.item,disqus:{websiteShortname:i.websiteShortname_s},posts:Object(u.a)({total:t.posts.total},c)}}),a)if(document.title=null!==(o=a.pageTitle_s)&&void 0!==o?o:"Wordify Crafter CMS",a.pageDescription_s){var l,b=document.head.querySelector('meta[name="description"]');b&&b.setAttribute("content",null!==(l=a.pageDescription_s)&&void 0!==l?l:"")}}})),function(){n=!0}}),[l,t.search]),Object(c.useEffect)((function(){window.scroll(0,0)}),[l]),null===i?Object(r.jsx)(d.a,{}):Object(r.jsx)(f.b,Object(u.a)(Object(u.a)({},i),e))}function y(){return Object(r.jsx)(s.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/category/:id?",component:_}),Object(r.jsx)(l.a,{path:"/tag/:id?",component:_}),Object(r.jsx)(l.a,{path:"/*",component:_})]})})}var g=t(11),v=t(113),x={en:t(81),es:t(82)},k=function(e){var n=Object(g.b)(),t=Object(b.a)(n,1)[0].locale;return Object(r.jsx)(v.a,Object(u.a)(Object(u.a)({},e),{},{locale:t,messages:x[t]}))},N=t(14),U=t(83);function I(e){return Object(c.useEffect)((function(){Object(N.d)()&&Object(U.a)()}),[]),Object(r.jsx)(g.a,{jQuery:e.jQuery,children:Object(r.jsx)(k,{children:Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(d.a,{}),children:Object(r.jsx)(y,{})})})})}i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(I,{jQuery:window.jQuery})}),document.getElementById("root"))},14:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return l})),t.d(n,"e",(function(){return b})),t.d(n,"c",(function(){return d}));var r=t(5),c=t(76),o=t.n(c);function a(){var e=document.documentElement.getAttribute("data-craftercms-preview");return"${modePreview?c}"===e||"true"===e}function i(e){var n,t="pending",r=e().then((function(e){t="success",n=e}),(function(e){t="error",n=e}));return{read:function(){if("pending"===t)throw r;if("error"===t)throw n;if("success"===t)return n}}}var s=document.getElementById("2fb5164e").innerHTML;"null"===s&&(s=o.a.get("crafterSite"));var l={baseUrl:"//localhost:8080",site:s,graphQLServer:"/api/1/site/graphql"},u=["rootId","crafterSite","crafterPublishedDate","crafterPublishedDate_dt","inheritsFrom_smv"];function b(e){return Object.entries(e).forEach((function(n){var t=Object(r.a)(n,2),c=t[0],o=t[1];u.includes(c)?delete e[c]:c.endsWith("_o")&&(Array.isArray(o.item)||(e[c]={item:[o.item]}),e[c].item.forEach((function(n,t){e[c].item[t]=b(n),n.component&&(e[c].item[t].component=b(n.component))})))})),e}function d(e){return function(n){return n.craftercms.path.includes(e)}}},16:function(e,n,t){"use strict";t.d(n,"h",(function(){return _})),t.d(n,"c",(function(){return y})),t.d(n,"b",(function(){return g})),t.d(n,"f",(function(){return v})),t.d(n,"e",(function(){return x})),t.d(n,"i",(function(){return k})),t.d(n,"d",(function(){return N})),t.d(n,"a",(function(){return U})),t.d(n,"g",(function(){return I})),t.d(n,"j",(function(){return Q}));var r=t(84),c=t(5),o=t(4),a=t(0),i=t(26),s=t(11),l=t(51),u=t(32),b=t(20),d=t(14),m=t(60),j=t(30),f=t(27),p=t(39),O=Object(d.b)((function(){return new Promise((function(){}))})),h=function(e,n){return Object(o.a)(Object(o.a)({},e),n)};function _(e,n){return Object(a.useReducer)(h,e,n)}function y(){var e=Object(s.b)(),n=Object(c.a)(e,2),t=n[0],r=t.pages,o=t.pagesLoading,l=n[1],u=Object(a.useRef)(!1);return Object(a.useEffect)((function(){return function(){u.current=!0}}),[]),Object(a.useEffect)((function(){r||o||(l({pagesLoading:!0}),Object(i.a)({text:'\n          query Nav {\n            pages {\n              total\n              items {\n                navLabel\n                contentTypeId: content__type\n                url: localId(transform: "storeUrlToRenderUrl")\n                placeInNav(filter: { equals: true }) @skip(if: true)\n                orderDefault_f\n              }\n            }\n          }\n        '}).then((function(e){var n=e.data;!u.current&&l({pages:n.pages.items})})))}),[l,r,o]),r}function g(){var e=Object(s.b)(),n=Object(c.a)(e,2),t=n[0],r=t.footer,o=t.footerLoading,l=n[1],u=Object(a.useRef)(!1);return Object(a.useEffect)((function(){return function(){u.current=!0}}),[]),Object(a.useEffect)((function(){r||o||(l({footerLoading:!0}),Object(i.a)({text:'\n          query Footer {\n            component_footer {\n              items {\n                aboutTitle_s\n                about_t\n                aboutImage_s\n                quickLinksTitle_s\n                socialLinksTitle_s\n                file__name(filter: {matches: "site-footer.xml"})\n                internal__name\n                localId\n                quickLinks_o {\n                  item {\n                    label_s\n                    url_s\n                  }\n                }\n                copyright_html_raw\n              }\n            }\n          }\n        '}).then((function(e){var n=e.data;!u.current&&l({footer:Object(f.a)(n.component_footer.items)[0]})})))}),[l,r,o]),r}function v(){var e=Object(s.b)(),n=Object(c.a)(e,2),t=n[0].posts,r=n[1],o=Object(a.useRef)(!1);return Object(a.useEffect)((function(){return function(){o.current=!0}}),[]),Object(a.useEffect)((function(){t||(r({postsLoading:!0}),Object(i.a)({text:p.b}).then((function(e){var n=e.data;!o.current&&r({posts:Object(f.a)(n.posts.items)})})))}),[r,t]),t}function x(e,n,t,r){var o=Object(a.useState)(),s=Object(c.a)(o,2),l=s[0],u=s[1];return Object(a.useEffect)((function(){var c=n?Array.isArray(n)?n.map((function(e){return{matches:e.key}})):[{matches:n.key}]:[],o=t?Array.isArray(t)?t.map((function(e){return{matches:e.key}})):[{matches:t.key}]:[];Object(i.a)({text:p.b},{postsLimit:e.itemsPerPage,postsOffset:e.currentPage*e.itemsPerPage,categoriesFilter:c,tagsFilter:o,exclude:null!==r&&void 0!==r?r:""}).then((function(n){var t=n.data;u({items:Object(f.a)(t.posts.items),total:t.posts.total,pageCount:Math.ceil(t.posts.total/e.itemsPerPage)})}))}),[e,n,t,r]),l}function k(){var e=Object(a.useState)(O),n=Object(c.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){var e=Object(d.b)((function(){return Object(i.a)({text:"\n        query Taxonomies {\n          taxonomy {\n            total\n            items {\n              guid: objectId\n              path: localId\n              contentTypeId: content__type\n              dateCreated: createdDate_dt\n              dateModified: lastModifiedDate_dt\n              label: internal__name\n              items {\n                item {\n                  key\n                  value\n                  image_s\n                }\n              }\n            }\n          }\n        }\n      "})}));r(e)}),[]),t}function N(e){var n=e.model,t=e.parentModelId,r=Object(s.b)(),o=Object(c.a)(r,1)[0].isAuthoring;return Object(l.b)({model:n,parentModelId:t,isAuthoring:o}).props}function U(e){var n=e.model,t=e.fieldId,r=Object(s.b)(),o=Object(c.a)(r,1)[0].isAuthoring;return Object(l.a)({model:n,zoneName:t,isAuthoring:o}).props}function I(){var e=Object(b.g)().search,n=Object(a.useState)((function(){var n;return null!==(n=Object(u.parse)(e).q)&&void 0!==n?n:""})),t=Object(c.a)(n,2),r=t[0],o=t[1],i=Object(a.useState)((function(){var n;return null!==(n=Object(u.parse)(e).p)&&void 0!==n?n:0})),s=Object(c.a)(i,2),l=s[0],d=s[1],m=Object(a.useCallback)((function(e){return o(e.target.value)}),[]);return Object(a.useEffect)((function(){var n,t;o(null!==(n=Object(u.parse)(e).q)&&void 0!==n?n:""),d(null!==(t=Object(u.parse)(e).p)&&void 0!==t?t:0)}),[e]),[r,m,o,l]}var T=["/component/post"];function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=I(),t=Object(c.a)(n,4),i=t[0],s=t[3],l=Object(a.useState)(O),u=Object(c.a)(l,2),b=u[0],p=u[1];return Object(a.useEffect)((function(){var n=["headline_t^1.5","content_o.item.component.content_html^1"],t={},c=i;if(t.filter=[{terms:{"content-type":T.map((function(e){return e}))}}],c){var a=c.match(/.*("([^"]+)").*/);a?(t.must=[{multi_match:{query:a[2],fields:n,fuzzy_transpositions:!1,auto_generate_synonyms_phrase_query:!1}}],c=c.replace(a[1],"")):t.minimum_should_match=1,c&&(t.should=[{multi_match:{query:c,fields:n,type:"phrase_prefix",boost:1.5}},{multi_match:{query:c,fields:n}},{match:{pageDescription_s:c}},{match:{"categories_o.item.value_smv":c}}])}p(Object(d.b)((function(){return Object(m.d)(Object(m.c)("elasticsearch",{query:{bool:t},size:e,from:s}),d.a).pipe(Object(j.a)((function(e){var n=e.hits,t=Object(r.a)(e,["hits"]),c={},a=n.map((function(e){var n=e._source;return Object(f.a)(Object(d.e)(n))})).filter((function(e){return!(e.craftercms.id in c)&&(c[e.craftercms.id]=!0,!0)}));return Object(o.a)(Object(o.a)({},t),{},{hits:a})}))).toPromise()})))}),[i,s,e]),b}},26:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(14);function c(e,n){return fetch("".concat(r.a.graphQLServer,"?crafterSite=").concat(r.a.site),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e.text,variables:n})}).then((function(e){return e.json()}))}},39:function(e,n,t){"use strict";t.d(n,"b",(function(){return o}));var r='\n  fragment byUrlQueryPost on component_post {\n    ...byUrlQueryContentItemFields\n    slug: localId(transform: "storeUrlToRenderUrl")\n    pageTitle_s\n    pageDescription_s\n    blurb_t\n    headline_s\n    mainImage_s\n    content_o {\n      item {\n        key\n        component {\n          ...on component_rich_text {\n            ...byUrlQueryRichText\n          }\n          ...on component_image {\n            ...byUrlQueryImage\n          }\n          ...on component_responsive_columns {\n            ...byUrlQueryResponsiveColumns\n          }\n        }\n      }\n    }\n    authorBio_o {\n      item {\n        key\n        component {\n          ...byUrlQueryBioFragment\n        }\n      }\n    }\n    categories_o {\n      item {\n        key(filter: {or: $categoriesFilter})\n        value_smv\n      }\n    }\n    tags_o {\n      item {\n        value_smv\n        key(filter: {or: $tagsFilter})\n      }\n    }\n  }\n\n  fragment byUrlQueryContentItemFields on ContentItem {\n    guid: objectId\n    path: localId(filter: {not: [{equals: $exclude}]})\n    contentTypeId: content__type\n    dateCreated: createdDate_dt\n    dateModified: lastModifiedDate_dt\n    label: internal__name\n  }\n\n  fragment byUrlQueryBioFragment on component_bio {\n    guid: objectId\n    contentTypeId: content__type\n    label: internal__name\n    path: localId\n    bio_t\n    name_s\n    profilePic_s\n    linkButtonText_s\n    linkButtonUrl_s\n    showLinkButton_b\n    facebookLink_s\n    twitterLink_s\n    instagramLink_s\n    youTubeLink_s\n  }\n\n  fragment byUrlQueryRichText on component_rich_text {\n    ...byUrlQueryContentItemFields\n    content_html: content_html_raw\n  }\n\n  fragment byUrlQueryImage on component_image {\n    ...byUrlQueryContentItemFields\n    image_s\n    alternativeText_s\n  }\n\n  fragment byUrlQueryResponsiveColumns on component_responsive_columns {\n    ...byUrlQueryContentItemFields\n    columns_o {\n      item {\n        columnSize_s\n        content_o {\n          item {\n            key\n            component {\n              ...on component_rich_text {\n                ...byUrlQueryRichText\n              }\n              ...on component_image {\n                ...byUrlQueryImage\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n',c="\n  ".concat(r,'\n\n  fragment byUrlQueryHomepage on page_entry  {\n    pageTitle_s\n    pageDescription_s\n    bios_o {\n      item {\n        key\n        component {\n          ...byUrlQueryBioFragment\n        }\n      }\n    }\n    slider_o {\n      item {\n        key\n        component {\n          ...byUrlQueryContentItemFields\n          ...on component_slider {\n            ...byUrlQuerySlider\n          }\n        }\n      }\n    }\n  }\n\n  fragment byUrlQueryAboutPage on page_about {\n    pageTitle_s\n    pageDescription_s\n    headline_s\n    bios_o {\n      item {\n        key\n        component {\n          ...byUrlQueryBioFragment\n        }\n      }\n    }\n    content_o {\n      item {\n        key\n        component {\n          ...on component_rich_text {\n            ...byUrlQueryRichText\n          }\n          ...on component_image {\n            ...byUrlQueryImage\n          }\n          ...on component_responsive_columns {\n            ...byUrlQueryResponsiveColumns\n          }\n        }\n      }\n    }\n  }\n\n  fragment byUrlQueryContactPage on page_contact {\n    pageTitle_s\n    pageDescription_s\n    message_t\n    headline_s\n  }\n\n  fragment byUrlQueryCategoryPage on page_category {\n    pageTitle_s\n    pageDescription_s\n  }\n\n  fragment byUrlQuerySlider on component_slider {\n    ...byUrlQueryContentItemFields\n    posts_o {\n      item {\n        key\n        component {\n          ...byUrlQueryContentItemFields\n          slug: localId(transform: "storeUrlToRenderUrl")\n          pageTitle_s\n          pageDescription_s\n          blurb_t\n          headline_s\n          mainImage_s\n          authorBio_o {\n            item {\n              key,\n              component {\n                ...byUrlQueryBioFragment\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  query byUrlQuery(\n    $url: String\n    $skipContentType: Boolean = true\n    $includePosts: Boolean = true\n    $postsLimit: Int = 8\n    $postsOffset: Int = 0\n    $exclude: String = ""\n    $categoriesFilter: [TextFilters!] = []\n    $tagsFilter: [TextFilters!] = []\n  ) {\n    content: contentItems {\n      total\n      items {\n        ...byUrlQueryContentItemFields\n        url: localId(\n          transform: "storeUrlToRenderUrl",\n          filter:{ regex: $url }\n        )\n        content__type(\n          filter:{\n            regex: ".*(bio|post|entry|category|contact|about|search).*"\n          }\n        ) @skip (if: $skipContentType)\n        ...on page_entry {\n          ...byUrlQueryHomepage\n        }\n        ...on page_about {\n          ...byUrlQueryAboutPage\n        }\n        ...on page_contact {\n          ...byUrlQueryContactPage\n        }\n        ...on page_category {\n          ...byUrlQueryCategoryPage\n        }\n        ...on component_post {\n          ...byUrlQueryPost\n        }\n      }\n    }\n    levelDescriptors: component_level__descriptor {\n      items {\n        siteTitle_s\n        file__name\n        websiteShortname_s\n        socialLinks_o {\n          item {\n            socialNetwork_s\n            label_s\n            url_s\n          }\n        }\n      }\n    }\n    posts: component_post(\n      limit: $postsLimit,\n      offset: $postsOffset,\n      sortOrder: DESC,\n      sortBy: "lastModifiedDate_dt"\n    ) @include(if: $includePosts) {\n      total\n      items {\n        ...byUrlQueryPost\n      }\n    }\n  }\n'),o="\n  ".concat(r,'\n\n  query postsQuery(\n    $postsLimit: Int = 8\n    $postsOffset: Int = 0\n    $exclude: String = ""\n    $categoriesFilter: [TextFilters!] = []\n    $tagsFilter: [TextFilters!] = []\n  ) {\n    posts: component_post(\n      limit: $postsLimit,\n      offset: $postsOffset,\n      sortOrder: DESC,\n      sortBy: "lastModifiedDate_dt"\n    ) {\n      total\n      items {\n        ...byUrlQueryPost\n      }\n    }\n  }\n');n.a=c},42:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(1);t(0);function c(e){var n=e.message,t=e.screenHeight,c=void 0===t||t;return Object(r.jsxs)("div",{className:"circular-progress-spinner ".concat(c?"circular-progress-spinner__screen-height":""),children:[Object(r.jsx)("div",{className:"circular-progress-spinner--graphic-container",children:Object(r.jsx)("svg",{className:"circular-progress-spinner--graphic",children:Object(r.jsx)("circle",{className:"circular-progress-spinner--path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})})}),n&&Object(r.jsx)("p",{className:"circular-progress-spinner--message",children:n})]})}},62:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(1),c=t(5),o=t(77),a=t(80),i=(t(0),t(11));function s(e){var n=e.siteTitle,t=e.socialLinks,s=e.children,l=Object(i.b)(),u=Object(c.a)(l,1)[0].theme;return Object(r.jsxs)("div",{className:"wrap theme-".concat(u),children:[Object(r.jsx)(o.default,{siteTitle:n,socialLinks:t}),Object(r.jsx)("div",{className:"wrap",children:s}),Object(r.jsx)(a.default,{socialLinks:t})]})}},63:function(e,n,t){"use strict";var r=t(1),c=t(5),o=(t(0),t(20)),a=t(16),i=0;n.a=function(e){var n=Object(o.f)(),t=e.placeholder,s=void 0===t?"":t,l=e.id,u=void 0===l?"searchInput_".concat(i++):l,b=Object.assign({form:"",input:"",inputWrapper:""},e.classes),d=Object(a.g)(),m=Object(c.a)(d,2),j=m[0],f=m[1];return Object(r.jsx)("form",{className:b.form,onSubmit:function(e){e.preventDefault(),j.trim()&&n.push("/search?q=".concat(j))},children:Object(r.jsxs)("div",{className:b.inputWrapper,children:[Object(r.jsx)("span",{className:"icon fa fa-search"}),Object(r.jsx)("input",{id:u,type:"text",value:j,onChange:f,className:b.input,placeholder:s})]})})}},64:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(4),c=t(1),o=t(0),a=t(62);function i(){return Object(c.jsx)(a.a,{children:Object(c.jsxs)("section",{style:{textAlign:"center",padding:"50px 0"},children:[Object(c.jsx)("h1",{children:"Not Found"}),Object(c.jsx)("p",{children:"The page you're looking for does not exist."})]})})}function s(){return Object(c.jsx)("section",{children:"The page you've selected needs to be created by the site developers."})}var l={"/page/entry":Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,130))})),"/page/about":Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,131))})),"/page/contact":Object(o.lazy)((function(){return t.e(5).then(t.bind(null,136))})),"/page/category":Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,137))})),"/page/search":Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,132))})),"/component/header":Object(o.lazy)((function(){return Promise.resolve().then(t.bind(null,77))})),"/component/footer":Object(o.lazy)((function(){return Promise.resolve().then(t.bind(null,80))})),"/component/bio":Object(o.lazy)((function(){return t.e(12).then(t.bind(null,118))})),"/component/image":Object(o.lazy)((function(){return t.e(13).then(t.bind(null,133))})),"/component/responsive_columns":Object(o.lazy)((function(){return t.e(11).then(t.bind(null,134))})),"/component/rich_text":Object(o.lazy)((function(){return t.e(14).then(t.bind(null,135))})),"/component/slider":Object(o.lazy)((function(){return t.e(10).then(t.bind(null,129))})),"/component/post":Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,138))}))},u=t(16);function b(e){var n=e.model,t=null===n?i:l[n.craftercms.contentTypeId]||s;return Object(c.jsx)(t,Object(r.a)({},e))}function d(e){var n=e.wrapper,t=e.wrapper,o=(t=void 0===t?{component:"div"}:t).component,a=void 0===o?"div":o,i=Object(u.d)(e),s=Object(r.a)({},n);delete s.component;var l=Object(r.a)({},e);return delete l.wrapper,Object(c.jsx)(a,Object(r.a)(Object(r.a)(Object(r.a)({},i),s),{},{children:Object(c.jsx)(b,Object(r.a)({},l))}))}n.b=function(e){var n=Object(u.d)(e);return Object(c.jsx)(b,Object(r.a)({ice:n},e))}},77:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var r=t(1),c=t(5),o=(t(0),t(22)),a=t(16),i=t(63),s=t(11);function l(e){var n=e.siteTitle,t=e.socialLinks,l=Object(a.c)(),u=Object(s.b)(),b=Object(c.a)(u,1)[0].$;return Object(r.jsxs)("header",{role:"banner",children:[Object(r.jsx)("div",{className:"top-bar",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-9 social",children:null===t||void 0===t?void 0:t.map((function(e){return Object(r.jsx)("a",{href:e.url_s,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("span",{className:"fa fa-"+e.socialNetwork_s})},e.socialNetwork_s)}))}),Object(r.jsx)("div",{className:"col-3 search-top",children:Object(r.jsx)(i.a,{classes:{form:"search-top-form"},placeholder:"Type keyword to search..."})})]})})}),Object(r.jsx)("div",{className:"container logo-wrap",children:Object(r.jsx)("div",{className:"row pt-5",children:Object(r.jsxs)("div",{className:"col-12 text-center",children:[Object(r.jsx)("a",{className:"absolute-toggle d-block d-md-none","data-toggle":"collapse",href:"#navbarMenu",role:"button",onClick:function(e){e.preventDefault(),b("#navbarMenu").toggleClass("show")},"aria-expanded":"false","aria-controls":"navbarMenu",children:Object(r.jsx)("span",{className:"burger-lines"})}),Object(r.jsx)("h1",{className:"site-logo",children:Object(r.jsx)(o.b,{to:"/",children:n})})]})})}),Object(r.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-light",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarMenu",children:Object(r.jsx)("ul",{className:"navbar-nav mx-auto",children:null===l||void 0===l?void 0:l.sort((function(e,n){var t=e.orderDefault_f,r=n.orderDefault_f;return t<r?-1:t>r?1:0})).map((function(e){return Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.c,{exact:!0,className:"nav-link",activeClassName:"active",to:e.url,children:e.navLabel})},e.url)}))})})})})]})}},80:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));var r=t(4),c=t(1),o=(t(0),t(22)),a=t(16);function i(e){var n=e.socialLinks,t=Object(a.b)(),i=Object(a.d)({model:t});return Object(c.jsx)("footer",Object(r.a)(Object(r.a)({className:"site-footer"},i),{},{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row mb-5",children:[Object(c.jsxs)("div",{className:"col-md-4",children:[Object(c.jsx)("h3",{children:null===t||void 0===t?void 0:t.aboutTitle_s}),Object(c.jsx)("p",{className:"mb-4",children:Object(c.jsx)("img",{src:null===t||void 0===t?void 0:t.aboutImage_s,alt:"",className:"img-fluid"})}),Object(c.jsx)("p",{children:null===t||void 0===t?void 0:t.about_t})]}),Object(c.jsx)("div",{className:"col-md-6 ml-auto",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-md-6",children:[Object(c.jsx)("h3",{children:null===t||void 0===t?void 0:t.quickLinksTitle_s}),Object(c.jsx)("ul",{className:"list-unstyled",children:null===t||void 0===t?void 0:t.quickLinks_o.map((function(e,n){return Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:e.url_s,children:e.label_s})},n)}))})]}),Object(c.jsx)("div",{className:"col-md-1"}),Object(c.jsx)("div",{className:"col-md-5",children:Object(c.jsxs)("div",{className:"mb-5",children:[Object(c.jsx)("h3",{children:null===t||void 0===t?void 0:t.socialLinksTitle_s}),Object(c.jsx)("ul",{className:"list-unstyled footer-social",children:null===n||void 0===n?void 0:n.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("a",{href:e.url_s,target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("span",{className:"fa fa-"+e.socialNetwork_s}),e.label_s]})},e.socialNetwork_s)}))})]})})]})})]}),Object(c.jsx)("div",{className:"row",children:t&&Object(c.jsx)("div",{className:"col-md-12 text-center",dangerouslySetInnerHTML:{__html:t.copyright_html_raw}})})]})}))}},81:function(e){e.exports=JSON.parse("{}")},82:function(e){e.exports=JSON.parse("{}")}},[[111,2,3]]]);
//# sourceMappingURL=main.2ed30070.chunk.js.map