(this["webpackJsonpthe-bedtime-project"]=this["webpackJsonpthe-bedtime-project"]||[]).push([[9],{147:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(1),n(148);var r=n(0);function c(e){var t=e.children;return Object(r.jsx)("div",{className:"PageTitle-Container",children:Object(r.jsx)("h1",{className:"PageTitle",children:t})})}},148:function(e,t,n){},149:function(e,t,n){"use strict";function r(e){if(""!=e&&e)return e.replaceAll('src="/sites/default/files','src="https://drupal.bedtimeproject.dev/sites/default/files')}n.d(t,"a",(function(){return r}))},155:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return i}))},160:function(e,t,n){},161:function(e,t,n){},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(1),n(160);var r=n(147),c=n(8),i=(n(161),n(0));function s(e){var t=e.backLink,n=e.backLinkText;return Object(i.jsxs)("div",{className:"MoreContentSoon-Container",children:[Object(i.jsx)("div",{children:Object(i.jsx)("strong",{children:"More Coming Soon!"})}),t&&Object(i.jsx)("div",{className:"Backlink",children:Object(i.jsx)(c.b,{to:t,children:n})})]})}function a(e){var t=e.storyData,n=e.backLink,c=e.backLinkText;return t?Object(i.jsx)("div",{className:"PaperStory-Container",children:Object(i.jsxs)("article",{className:"Paper-Container",children:[Object(i.jsxs)("div",{className:"Heading-Information",children:[Object(i.jsx)(r.a,{children:t.title}),Object(i.jsxs)("div",{children:["By ",t.field_author]})]}),Object(i.jsx)("div",{className:"Chapters",children:t.field_chapters&&Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:t.field_chapters}})}),"True"==t.field_more_content_coming_soon&&Object(i.jsx)(s,{backLink:n,backLinkText:c})]})}):null}},187:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(13),c=n(1),i=n(4),s=n(42),a=n(43),o=n(154),u=n(153),l=n(155),j=n(167),b=n(149),d=n(0);function f(e){var t=e.story,n=Object(c.useState)(t),i=Object(r.a)(n,2),s=i[0],a=i[1];return Object(c.useEffect)((function(){fetch("https://drupal.bedtimeproject.dev/rest/views/story?title="+(null===t||void 0===t?void 0:t.title)).then((function(e){return e.json()})).then((function(e){var t,n=Object(l.a)(Object(l.a)({},e[0]),{},{field_chapters:Object(b.a)(null===(t=e[0])||void 0===t?void 0:t.field_chapters)});a(n)}))}),[]),Object(d.jsx)(j.a,{storyData:s,backLink:"/read/stories",backLinkText:"Back to Stories"})}n(187);var O=n(156);function h(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],l=t[1];return Object(c.useEffect)((function(){fetch("https://drupal.bedtimeproject.dev/rest/views/stories").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),Object(d.jsx)(a.a,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/read/stories",children:Object(d.jsxs)("div",{className:"Stories-Container",children:[Object(d.jsx)(s.a,{title:"Stories"}),Object(d.jsx)(u.a,{pageTitle:"Stories",books1:n.map((function(e,t){if(t>2)return null;var n=Object(O.a)(e.title);return Object(d.jsx)(o.a,{link:"/read/stories/".concat(n),story:e},t)})),books2:n.map((function(e,t){if(t<=2||t>5)return null;var n=Object(O.a)(e.title);return Object(d.jsx)(o.a,{link:"/read/tales/".concat(n),story:e},t)})),books3:n.map((function(e,t){if(t<=5||t>8)return null;var n=Object(O.a)(e.title);return Object(d.jsx)(o.a,{link:"/read/tales/".concat(n),story:e},t)}))})]})}),n.map((function(e,t){var n=Object(O.a)(e.title);return Object(d.jsxs)(i.a,{exact:!0,path:"/read/stories/".concat(n),children:[Object(d.jsx)(s.a,{title:e.title}),Object(d.jsx)(f,{story:e})]},t)}))]})})}}}]);
//# sourceMappingURL=9.ef8a281c.chunk.js.map