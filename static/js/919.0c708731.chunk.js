"use strict";(self.webpackChunkthe_bedtime_project=self.webpackChunkthe_bedtime_project||[]).push([[919],{8362:function(e,t,n){n.d(t,{Z:function(){return a}});n(2791);var r=n(1221),i=n(3504),l=n(184);function s(e){var t=e.backLink,n=e.backLinkText;return(0,l.jsxs)("div",{className:"MoreContentSoon-Container",children:[(0,l.jsx)("div",{children:(0,l.jsx)("strong",{children:"More Coming Soon!"})}),t&&(0,l.jsx)("div",{className:"Backlink",children:(0,l.jsx)(i.rU,{to:t,children:n})})]})}var c=n(1584);function a(e){var t=e.storyData,n=e.backLink,i=e.backLinkText;return t?(0,l.jsx)("div",{className:"PaperStory-Container",children:t.title?(0,l.jsxs)("article",{className:"Paper-Container",children:[(0,l.jsxs)("div",{className:"Heading-Information",children:[(0,l.jsx)(r.Z,{children:t.title}),t.field_author&&(0,l.jsxs)("div",{children:["By ",t.field_author]})]}),(0,l.jsx)("div",{className:"Chapters",children:t.field_chapters&&(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:t.field_chapters}})}),"True"==t.field_more_content_coming_soon&&(0,l.jsx)(s,{backLink:n,backLinkText:i})]}):(0,l.jsx)("div",{className:"PaperStory-Loading-Container",children:(0,l.jsx)(c.Z,{color:"#FFFFFF"})})}):null}},1221:function(e,t,n){n.d(t,{Z:function(){return i}});n(2791);var r=n(184);function i(e){var t=e.children;return(0,r.jsx)("div",{className:"PageTitle-Container",children:(0,r.jsx)("h1",{className:"PageTitle",children:t})})}},8919:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(6515),i=n(3430),l=n(2791),s=n(9424),c=n(8362),a=n(6929),o=n(6871),d=n(9736),u=n(256),f=n(5329),h=n(184);function v(){var e=(0,o.UO)(),t=(0,l.useContext)(u.I).state,n=(0,l.useState)({title:void 0}),v=(0,i.Z)(n,2),p=v[0],j=v[1];return(0,l.useEffect)((function(){var n,i=null===t||void 0===t||null===(n=t.stories)||void 0===n?void 0:n.find((function(t){return(0,f.v)(t.title)===e.story}));fetch("https://drupal.bedtimeproject.dev/rest/views/story?title="+(null===i||void 0===i?void 0:i.title)).then((function(e){return e.json()})).then((function(e){var t,n=(0,r.Z)((0,r.Z)({},e[0]),{},{field_chapters:(0,a.c)(null===(t=e[0])||void 0===t?void 0:t.field_chapters)});j(n)}))}),[t.stories]),(0,h.jsxs)(d.Z,{children:[(0,h.jsx)(s.Z,{title:p.title}),(0,h.jsx)(c.Z,{storyData:p,backLink:"/read/stories",backLinkText:"Back to Stories"})]})}},6929:function(e,t,n){function r(e){if(""!=e&&e)return e.replaceAll('src="/sites/default/files','src="https://drupal.bedtimeproject.dev/sites/default/files')}n.d(t,{c:function(){return r}})},5329:function(e,t,n){function r(e){return e.replaceAll(".","").replaceAll("-","").replaceAll("(","").replaceAll(")","").replaceAll("  "," ").replaceAll(" ","-").toLowerCase()}n.d(t,{v:function(){return r}})}}]);
//# sourceMappingURL=919.0c708731.chunk.js.map