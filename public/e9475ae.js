(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3],{308:function(t,e,n){"use strict";n.r(e);var o={name:"Footer",computed:{baseUrl:function(){return"https://anhkevin.github.io"},namePage:function(){return"TianDev"}}},r=n(55),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer text-center py-4"},[e("small",{staticClass:"copyright"},[t._v("Copyright © 2024 - "),e("a",{attrs:{href:t.baseUrl,target:"_blank"}},[t._v(t._s(t.namePage))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(308).default})},326:function(t,e,n){"use strict";n.r(e);n(27),n(30),n(45),n(117),n(24),n(116);var o={name:"PostContent",props:{post:{type:Object,required:!0}},computed:{hasTags:function(){return this.post.tags},data:function(){return{sharing:{url:"https://anhkevin.github.io/"+this.post.slug+"/",title:this.post.title,description:this.post.description,quote:"",hashtags:this.post.tags.join(", ")}}},breadcrumb:function(){return"Innovating Tomorrow, Today"},totalPages:function(){return Math.floor(this.total/this.perPage)},currentPage:function(){return parseInt($nuxt.$route.query.page)||1},isHideMain:function(){return!!this.$store.state.search}},methods:{formatDateByLocale:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},r=n(55),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper"},[e("article",{staticClass:"blog-post px-3 py-5 p-md-5"},[e("div",{staticClass:"container single-col-max-width"},[e("header",{staticClass:"blog-post-header"},[e("h2",{staticClass:"title mb-2"},[t._v(t._s(t.post.title))]),t._v(" "),e("div",{staticClass:"meta mb-3"},[e("span",{staticClass:"date"},[t._v("Posted: "+t._s(t.formatDateByLocale(t.post.date)))]),t._v(" by "),e("span",{staticClass:"author"},[t._v(" "+t._s(t.post.authors[0].name)+" ")])])]),t._v(" "),e("div",{staticClass:"blog-post-body"},[e("NuxtContent",{attrs:{document:t.post}})],1),t._v(" "),e("div",{staticClass:"blog-nav nav nav-justified my-5"},[t.hasTags?e("div",{staticClass:"post-tags mb-3"},[e("span",{staticClass:"fw-bold"},[t._v("Tags: ")]),t._v(" "),t._l(t.post.tags,(function(n,o){return e("nuxt-link",{key:o,staticClass:"post-tag no-text-decoration",attrs:{to:{path:"/tags/"+n+"/"}}},[e("span",{staticClass:"badge bg-light text-dark"},[t._v(t._s(n))])])}))],2):t._e()]),t._v(" "),e("div",{staticClass:"blog-comments-section"},[e("Disqus")],1)])]),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(308).default})}}]);