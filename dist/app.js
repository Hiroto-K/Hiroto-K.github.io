!function(u){function n(n){for(var t,e,r=n[0],o=n[1],a=n[2],i=0,s=[];i<r.length;i++)e=r[i],l[e]&&s.push(l[e][0]),l[e]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(u[t]=o[t]);for(f&&f(n);s.length;)s.shift()();return p.push.apply(p,a||[]),c()}function c(){for(var n,t=0;t<p.length;t++){for(var e=p[t],r=!0,o=1;o<e.length;o++){var a=e[o];0!==l[a]&&(r=!1)}r&&(p.splice(t--,1),n=i(i.s=e[0]))}return n}var e={},l={2:0},p=[];function i(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return u[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=u,i.c=e,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="dist";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=n,t=t.slice();for(var o=0;o<t.length;o++)n(t[o]);var f=r;p.push([58,0]),c()}({11:function(n,t,e){"use strict";var r=e(0),o={name:"Footer",computed:{currentYear:function(){return(new Date).getFullYear().toString()}}},a=e(2);var i=function(n){e(8)},s=Object(a.a)(o,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("p",{staticClass:"footer-text"},[n._v("© 2015-"+n._s(n.currentYear)+" Hiroto-K")])])])},[],!1,i,"data-v-4fd4ec20",null).exports,u=e(4),c=e(6),l=e.n(c),p=e(7);r.a.use(u.b),u.a.localize("ja",l.a),r.a.use(p.a),r.a.component("page-footer",s)},16:function(n,t,e){var r,o,a,i,s;r=window,o=document,a="ga",r.GoogleAnalyticsObject=a,r.ga=r.ga||function(){(r.ga.q=r.ga.q||[]).push(arguments)},r.ga.l=1*new Date,i=o.createElement("script"),s=o.getElementsByTagName("script")[0],i.async=1,i.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(i,s),ga("create","UA-73752623-2","auto"),ga("send","pageview")},31:function(n,t,e){var r=e(32);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(12).default)("72839c83",r,!0,{})},32:function(n,t,e){(n.exports=e(10)(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},58:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e(23),a=e.n(o),i={name:"App",data:function(){return{apps:[{name:"Train number calc",url:"/train-number-calc.html"}],links:[{name:"Home Page",url:"https://hiroto-k.net/"},{name:"Profile",url:"https://hiroto-k.net/profile"},{name:"Project",url:"https://hiroto-k.net/project"},{name:"Blog (Programming)",url:"https://hiroto-k.hatenablog.com/"},{name:"Blog (Train)",url:"https://hiroto-k.github.io/blog/"}],repos:[],gitHubPages:[],hasError:!1}},computed:{reposLength:function(){return this.repos.length},gitHubPagesLength:function(){return this.gitHubPages.length}},methods:{reloadRepos:function(){this.hasError=!1,this.updateRepos()},updateRepos:function(){var t=this;this.repos=[],this.gitHubPages=[],a.a.get("https://api.github.com/users/hiroto-k/repos?per_page=100").then(function(n){return n.data}).then(function(n){n.forEach(function(n){t.repos.push(n),n.has_pages&&38377426!==n.id&&t.gitHubPages.push(n)}),t.hasError=!1}).catch(function(n){console.log(n),t.hasError=!0})}},mounted:function(){this.updateRepos()}},s=e(2);var u=function(n){e(31)},c=Object(s.a)(i,function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("b-jumbotron",[r("h1",[e._v("Hiroto-K.github.io")]),e._v(" "),r("p",{staticClass:"lead"},[e._v("This is a web pages of "),r("a",{attrs:{href:"https://github.com/hiroto-k"}},[e._v("hiroto-k")]),e._v(".")]),e._v(" "),r("div",{staticClass:"mb-3"},[r("h2",[e._v("Apps")]),e._v(" "),r("b-list-group",e._l(e.apps,function(n,t){return r("b-link",{key:t,staticClass:"list-group-item list-group-item-action",attrs:{href:n.url},domProps:{textContent:e._s(n.name)}})}))],1),e._v(" "),r("div",{staticClass:"mb-4"},[r("h2",[e._v("Links")]),e._v(" "),r("b-list-group",e._l(e.links,function(n,t){return r("b-link",{key:t,staticClass:"list-group-item list-group-item-action",attrs:{href:n.url},domProps:{textContent:e._s(n.name)}})}))],1),e._v(" "),r("hr"),e._v(" "),e.hasError?r("div",[r("div",{staticClass:"mt-3 mb-3"},[r("h2",[e._v("Public Repositories")]),e._v(" "),r("h3",[e._v("Error")]),e._v(" "),r("p",{staticClass:"text-danger"},[e._v("Sorry, An error has occurred.")])])]):r("div",[r("div",{staticClass:"mt-3 mb-3"},[r("h2",[e._v("Public Repositories "),r("b-badge",{attrs:{variant:"primary"}},[e._v(e._s(e.reposLength))])],1),e._v(" "),r("b-list-group",e._l(e.repos,function(n){return r("b-link",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.focus.bottom",value:n.description,expression:"repo.description",modifiers:{hover:!0,focus:!0,bottom:!0}}],key:e.repos.id,staticClass:"list-group-item list-group-item-action",attrs:{href:n.html_url},domProps:{textContent:e._s(n.full_name)}})}))],1),e._v(" "),r("div",{staticClass:"mt-3 mb-3"},[r("h2",[e._v("GitHub Pages "),r("b-badge",{attrs:{variant:"primary"}},[e._v(e._s(e.gitHubPagesLength))])],1),e._v(" "),r("b-list-group",e._l(e.gitHubPages,function(n){return r("b-link",{key:e.gitHubPages.id,staticClass:"list-group-item list-group-item-action",attrs:{href:["https://hiroto-k.github.io/"+n.name]},domProps:{textContent:e._s(n.full_name)}})}))],1)]),e._v(" "),r("b-button",{staticClass:"btn-sm float-right mb-5",attrs:{variant:"primary"},on:{click:function(n){e.reloadRepos()}}},[e._v("\n      Reload repos\n    ")])],1),e._v(" "),r("page-footer")],1)},[],!1,u,"data-v-88e27f1c",null).exports;e(11),e(16);new r.a({el:"#app",render:function(n){return n(c)}})},8:function(n,t,e){var r=e(9);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(12).default)("38a6cfc1",r,!0,{})},9:function(n,t,e){(n.exports=e(10)(!1)).push([n.i,"\nhtml[data-v-4fd4ec20], body[data-v-4fd4ec20] {\n  height: 100%;\n}\n#footer[data-v-4fd4ec20] {\n  margin-bottom: 10px;\n  height: 60px;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  background-color: #f5f5f5;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 0px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.footer-text[data-v-4fd4ec20] {\n  margin: 20px 0;\n  line-height: 60px;\n}\n",""])}});