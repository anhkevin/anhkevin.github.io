(window.webpackJsonp=window.webpackJsonp||[]).push([[19,3,13],{249:function(t,e,n){"use strict";n.r(e);var r={name:"Siderbar",computed:{baseUrl:function(){return"http://localhost:3000"},namePage:function(){return"TianDev"},tabs:function(){return[{name:"HOME",link:"http://localhost:3000",icon_class:"fa-fw fas fa-home"},{name:"TAGS",link:"/tags/",icon_class:"fa-fw fas fa-tags"},{name:"ARCHIVES",link:"/archives/",icon_class:"fa-fw fas fa-archive"},{name:"ABOUT",link:"/about/",icon_class:"fa-fw fas fa-info"}]},listInfo:function(){return[{name:"github",link:"https://github.com/anhkevin",target:"_blank",icon_class:"fab fa-github-alt"},{name:"mail",link:"javascript:window.open('mailto:' + ['anhkevin.ht','gmail.com'].join('@'))",target:"_self",icon_class:"fas fa-envelope"},{name:"Youtube",link:"https://www.youtube.com/c/tiandev",target:"_blank",icon_class:"fab fa-youtube"}]}}},l=n(44),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column",attrs:{id:"sidebar"}},[n("div",{attrs:{id:"nav-wrapper"}},[n("div",{staticClass:"d-flex flex-column",attrs:{id:"profile-wrapper"}},[n("div",{staticClass:"d-flex justify-content-center",attrs:{id:"avatar"}},[n("a",{attrs:{href:t.baseUrl,alt:"avatar"}},[n("img",{attrs:{src:"/img/tiandev_logo.png",alt:"avatar"}})])]),t._v(" "),n("div",{staticClass:"profile-text mt-3"},[n("div",{staticClass:"site-title"},[n("a",{attrs:{href:t.baseUrl}},[t._v(t._s(t.namePage))])]),t._v(" "),n("div",{staticClass:"site-subtitle font-italic"},[t._v("Developer notes")])])]),t._v(" "),n("ul",{staticClass:"nav flex-column nav-siderbar-left"},t._l(t.tabs,(function(e){return n("li",{key:e.name,staticClass:"nav-item d-flex justify-content-center"},[n("a",{staticClass:"nav-link d-flex justify-content-center align-items-center w-100",attrs:{href:e.link}},[n("i",{class:e.icon_class}),t._v(" "),n("span",[t._v(t._s(e.name))])])])})),0)]),t._v(" "),n("div",{staticClass:"sidebar-bottom d-flex flex-wrap justify-content-around mt-4"},t._l(t.listInfo,(function(t){return n("a",{key:t.name,attrs:{href:t.link,target:t.target}},[n("i",{class:t.icon_class})])})),0)])}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,n){"use strict";n.r(e);var r=n(44),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-lg btn-box-shadow",staticStyle:{display:"none"},attrs:{id:"back-to-top",href:"#",role:"button"}},[e("i",{staticClass:"fas fa-angle-up"})])}],!1,null,null,null);e.default=component.exports},285:function(t,e,n){"use strict";n.r(e);var r=n(5),l=(n(26),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,o,f,d,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=$nuxt.$route.query.page?parseInt($nuxt.$route.query.page):1,l=10,e.next=5,n("articles").fetch();case 5:return c=e.sent,o=c.length,f=Math.ceil(o/l),d=o%l,v=function(){return 1===r?0:r===f?o-d:(r-1)*l},e.next=12,n("articles").only(["title","description","date"]).sortBy("date","desc").limit(l).skip(v()).fetch();case 12:return m=e.sent,e.abrupt("return",{articles:m,totalArticles:o});case 14:case"end":return e.stop()}}),e)})))()}}),c=n(44),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Siderbar"),t._v(" "),n("HomeMain",{attrs:{articles:t.articles,total:t.totalArticles}}),t._v(" "),n("Bottom")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Siderbar:n(249).default,HomeMain:n(278).default,Bottom:n(256).default})}}]);